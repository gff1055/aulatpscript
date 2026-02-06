

// tupla
type Delivery = [
    orderId:        number,                             // numero do pedido
    statusOrder:    "pending"|"shipping"|"delivered",   // status do pedido
    destination:    string|[number, number]             // endereco ou latitude/longitude
]



// funcao de rastreamento
//  - recebe os dados da entrega 
//  - retorna mensagem de status da localizacao
function updateLogistics(pDelivery: Delivery){
    
    //desestruturando
    const [orderId,statusOrder,destination] = pDelivery

    // testa se o destino passado é uma string
    if(typeof destination == "string"){
        return "Roteirizando até o endereço: "+destination
    }

    // senao o destino são cordenadas (latitude, longitude)
    else{
        const [latitude,longitude] = destination
        return "Calculando rota para latitude: " + latitude + "longitude: " + longitude;
    }
}


function checkStatus(pDelivery:Delivery){
    //desestruturando
    const [orderId,statusOrder,destination] = pDelivery

    // checa se o pedido esta pendente
    if(statusOrder=="pending")
        return "Status pendente"

}


const delivery1:Delivery = [0, "pending", "Bairro 8"];

console.log(checkStatus(delivery1));
console.log(updateLogistics(delivery1));



const delivery2:Delivery = [0, "pending", [160,320]];

console.log(checkStatus(delivery2));
console.log(updateLogistics(delivery2));
