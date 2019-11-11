import { takeEvery, put, call } from "redux-saga/effects";
import axios from "../../utils/axios";

function getFilmsFromApi() {
    return axios
        .get("/films", {})
        .then(result => {
            return result;
        })
        .catch(error => {
            console.log("getFilmsFromApi error", error);
        });
}

function getFilmFromApi(arg) {
    return axios
        .get("/films/" + arg.id, {})
        .then(result => {
            return result;
        })
        .catch(error => {
            //console.log("getFilmFromApi error", error);
        });
}

//generators
function* getFilmsAsync() {
    try {
        let { data } = yield call(getFilmsFromApi);

        yield put({ type: "GET_FILMS_ASYNC", payload: data });
    } catch (error) {
        yield put({ type: "GET_FILMS_ASYNC", payload: ["error"] });
        // console.log(error);
    }
}

function* getFilmAsync(arg) {
    try {
        let { data } = yield call(getFilmFromApi, arg);

        yield put({ type: "GET_FILMS_ASYNC", payload: data });
    } catch (error) {
        yield put({ type: "GET_FILMS_ASYNC", payload: ["error"] });
        // console.log(error);
    }
}

// //Generator function
export function* getFilmsWatcher(arg) {
    yield takeEvery("GET_FILMS", getFilmsAsync);
    yield takeEvery("GET_FILM", getFilmAsync);
}
