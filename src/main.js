import './style.css';
import { enrutamiento } from "./router/router.js";
import {  master_page} from "../src/controller/master.controller.js";
// main.js
import { registro } from "../src/controller/registro.controller.js";



document
    .getElementById("btn_register")
    .addEventListener("click", registro);
