import { master_page } from "../controller/master.controller";

const enrutamiento = async (rout) => {
    // Buscamos el contenedor real del HTML
    const masterContainer = document.getElementById("Views"); 

    if (masterContainer) {
        masterContainer.innerHTML = ''; // Limpiamos la pantalla
    }

    // Evaluamos la ruta que llega (que ahora será '#/login')
    switch (rout) {
            
        case '#/dashboard':
        case '/dashboard':
            masterContainer.appendChild(master_page.Dashboard());
            break;
            
        default:
            break;
    }
};

export {enrutamiento}