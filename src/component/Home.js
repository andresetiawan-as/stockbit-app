import React, {useState, useEffect, useRef, Fragment} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../redux/Home/action';
import MovieLists from '../component/MovieList';

const Home = (props) => {
    const [searchMovie, setSearchMovie] = useState([])
    const [input, setInput] = useState("")
    let { Home, setHomeLoading, fetchMovie, handleState } = props
    let { page, Search, MovieList, isLoading } = Home

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            getMovie(page);
        }
    }

    useEffect(() => {
        getMovie(page);
    }, []);

    const getMovie = async (page) => {
        setHomeLoading(true)
        await axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=Batman&page=${page}`)
            .then(response => {
                // handle success
                let data = MovieList.concat(response.data.Search)
                handleState("Search", data)
                fetchMovie(response.data)
                handleState("page", page + 1)
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                setHomeLoading(false)
            })
    }

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            let result = MovieList.filter((e) => e.Title.toLowerCase().includes(input.toLowerCase()) || e.Type.toLowerCase().includes(input.toLowerCase()) || e.Year.toLowerCase().includes(input.toLowerCase()))
            if (input === "") {
                if (result.length !== 0){
                    handleState("Search", MovieList)
                }
            } else {
                handleState("Search", result)
            }
        }, 500);
        return () => clearTimeout(timeOutId);
    }, [input]);

    return (
        <Fragment>
            <div className="content-header">
                <h2>IMDb Charts</h2>
                <h3>Top Rated Movies</h3>
            </div>

            <div className="search">
                <input className='input' placeholder="Cari nama" type="text" value={input} onChange={e => setInput(e.target.value)} />
            </div>

            <MovieLists
                movie={Search}
                isLoading={isLoading}
            />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    Home: state.Home
})
const mapDispatchToProps = {
    ...actions
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
