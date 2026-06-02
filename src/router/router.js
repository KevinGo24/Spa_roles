// importo el controlador maestro
import { master_page } from "../controller/master.controller";
//-------------------------------------------------------------

// creo una variable para bucar en el doc el id donde se cragara la vista 
// sera una funcion sincronica
const enrrutamiento = async (rout) =>{
    rout.innerHTML = '';

    switch (rout) {
        case "/login":
            {rout.appendChild(master_page.Login)}
            break;
        case "/dashboard":
            {rout.appendChild(master_page.Dashboard)}
            break;
        default:
            break;
    }
}