// Usamos ./ porque ambos controladores están en la misma carpeta 'controller'
import Dashboard from "../controller/dashboard.controller.js";

// Creo una variable para almacenar los controladores
const master_page = {
    Dashboard,
};

// Exporto mi variable
export { master_page };