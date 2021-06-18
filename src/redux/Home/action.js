import * as types from "../../redux/types";
import axios from 'axios';

export const setHomeLoading = (data) => {
    return {
        type: types.HOME_SET_LOADER,
        data
    }
}

export const handleState = (property, value) => {
    return{
        type: types.HANDLE_STATE,
        property, value
    }
}

export const fetchMovie = (payload) => {
    return {
        type: types.FETCH_MOVIE,
        payload
    }
}