function updateLogistics(pDelivery) {
    //desestruturando
    const [orderId, statusOrder, destination] = pDelivery;
    if (typeof destination == "string") {
        return "Roteirizando até o endereço: " + destination;
    }
    else {
        const [latitude, longitude] = destination;
        return "Calculando rota para latitude: " + latitude + "longitude: " + longitude;
    }
}
function checkStatus(pDelivery) {
    //desestruturando
    const [orderId, statusOrder, destination] = pDelivery;
    if (statusOrder == "pending")
        return "Status pendente";
}
const delivery1 = [0, "pending", "Bairro 8"];
console.log(checkStatus(delivery1));
console.log(updateLogistics(delivery1));
const delivery2 = [0, "pending", [160, 320]];
console.log(checkStatus(delivery2));
console.log(updateLogistics(delivery2));
export {};
