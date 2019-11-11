import { all } from "redux-saga/effects";
import { getFilmsWatcher } from "./films";

export default function* rootSaga() {
    yield all([getFilmsWatcher()]);
}
