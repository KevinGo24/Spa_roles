import Dashboard from "../controller/dashboard.controller.js";
import { login } from "../controller/login.controller.js";
import { registro } from "./registro.controller.js";
const master_page = {
    Dashboard,
    login,
    registro
};
export async function Dashboard_views() {
    const response = await fetch("/views/dashboard.html");
    const html = await response.text();

    document.getElementById("app").innerHTML = html;
}
export { master_page };