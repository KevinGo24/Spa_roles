// importamos desde la carpeta views = login.html
import login from "../views/login.html"
// -------------------------------------------------

export default () => {
    const Viewslogin= document.createElement('div');
    Viewslogin.innerHTML= login
    return Viewslogin
}