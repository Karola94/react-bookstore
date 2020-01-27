import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router } from "react-router-dom";

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.register();
