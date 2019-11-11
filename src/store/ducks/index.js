import { combineReducers } from "redux";

import films from "./films";
import filmList from "./filmList";

export default combineReducers({
    films,
    filmList
});
