import './style.css';
import { enrutamiento } from "./router/router.js";
import {  master_page} from "../src/controller/master.controller.js";

// Dom de los campos del login

// 1 - imput de roles
const roles = document.getElementById("Cmb_role")
// 2 - input de gmail
const email = document.getElementById("Tbx_email")
// 3 - input de pass
const pass = document.getElementById("Tbx_password")
// --------------------------------------------------

// funcion de boton de login
function login() {
    // validacion de los campos 
    if (roles.value == "" || email.value == "" || pass.value == "") {
        alert('por favor llenar los campos')
    }else{
        window.location.hash = '#/dashboard';
    }
}


