export function registro() {
    const response = await fetch("/src/views/registro.html");
    const html = await response.text();

    document.getElementById("app").innerHTML = html;
}