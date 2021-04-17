const get = id => document.getElementById(id)
const out = str => get("tempoDeBanimento").innerHTML = str

function calcular() {
    const nome = get("nome").value
    if (get("querSerBanidoParaSempre").value == "sim" || nome.toLowerCase().indexOf("arthur") != -1) {
        out(`${nome} está BANIDO PARA SEMPRE`)
    } else {
        console.log("não")
        out(`${nome} está banido por: ${get("tempo").value} horas`)
    }
}