function calcular() {
    if (document.getElementById("querSerBanidoParaSempre").value == "sim") {
        document.getElementById("tempoDeBanimento").innerHTML = "Tempo de banimento: BANIDO PARA SEMPRE"
    } else {
        console.log("não")
        document.getElementById("tempoDeBanimento").innerHTML = "Tempo de banimento: " + document.getElementById("tempo").value + " horas"
    }
}