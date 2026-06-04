export async function login() {
    const rol = document.getElementById("Cmb_role").value;
    const correo = document.getElementById("Tbx_email").value;
    const pass = document.getElementById("Tbx_password").value;

    try {
        const response = await fetch(
            `http://localhost:3000/users?correo=${correo}`
        );

        const users = await response.json();

        const user = users.find(
            u => u.pass == pass && u.rol === rol
        );

        if (user) {
            console.log("Login correcto");
            console.log(user);
        } else {
            console.log("Credenciales incorrectas");
        }

    } catch (error) {
        console.error(error);
    }
}