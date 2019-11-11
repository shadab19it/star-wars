import { createActions, createReducer } from "reduxsauce";

//Action types e Creators
export const { Types, Creators } = createActions({
    cleanFilms: []
});

//Reducer Handlers
const INITIAL_STATE = [];

const clean = (state = INITIAL_STATE, action) => {
    return INITIAL_STATE;
};

//Criando Reducer
export default createReducer(INITIAL_STATE, {
    [Types.CLEAN_FILMS]: clean
});
