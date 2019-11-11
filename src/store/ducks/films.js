import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    getFilmsAsync: {},
    getFilmAsync: {}
});

/**
 * Handlers
 */
const INITIAL_STATE = {};

const getFilms = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    newState.filmList = action.payload;
    return newState.filmList;
};

const getFilm = (state = INITIAL_STATE, action) => {
    const newState = { ...state };
    newState.filmList = action.payload;
    return newState.filmList;
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.GET_FILMS_ASYNC]: getFilms,
    [Types.GET_FILM_ASYNC]: getFilm
});
