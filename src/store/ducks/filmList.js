import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
    addFilm: ["film"],
    removeFilm: ["film"],
    cleanFilms: []
});

//Reducer Handlers
const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [...state, action.film];

const remove = (state = INITIAL_STATE, action) => {
    return state.filter(
        filteredFilm =>
            JSON.stringify(filteredFilm) !== JSON.stringify(action.film)
    );
};

const clean = (state = INITIAL_STATE, action) => {
    return INITIAL_STATE;
};

//Criando Reducer
export default createReducer(INITIAL_STATE, {
    [Types.ADD_FILM]: add,
    [Types.REMOVE_FILM]: remove,
    [Types.CLEAN_FILMS]: clean
});
