import * as types from "../../redux/types";

const initState = {
    isLoading: false,
    Search: [],
    MovieList: [],
    totalResults: "",
    Response: "False",
    page: 1,
    input:""
}

export default function (state = initState, action) {
    switch (action.type) {
        case types.HOME_SET_LOADER: {
            return {
                ...state,
                isLoading: action.data
            }
        }
        case types.HANDLE_STATE:{
            return{
                ...state,
                [action.property]: action.value
            }
        }
        case types.FETCH_MOVIE:{
            return{
                ...state,
                MovieList: state.MovieList.concat(action.payload.Search),
                totalResults: action.payload.totalResults,
                Response: action.payload.Response
            }
        }
        default: {
            return { ...state }
        }
    }
}