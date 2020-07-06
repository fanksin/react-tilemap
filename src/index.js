import { createStore } from "redux";
import { reducer } from "./reducers";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TileMap from "./components/TileMap";

const store = createStore(
	reducer /* Initial state */,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<TileMap />
	</Provider>,
	document.querySelector("#root")
);
