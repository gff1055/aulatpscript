/**

Criar um Type Alias chamado FormaPagamento que seja uma união de três strings literais: "credito", "pix" e "boleto".

Criar uma função chamada processarPagamento que aceite dois parâmetros:
    valor: um número.
    tipo: o union type FormaPagamento que você criou.

Dentro da função, usa uma estrutura de controle (como switch ou if/else) para retornar uma mensagem específica para cada tipo:

credito: "Pagamento de R$ [valor] processado. Parcelamento disponível."

pix: "Pagamento de R$ [valor] processado. Desconto de 5% aplicado!"

boleto: "Boleto de R$ [valor] gerado. Aguardando compensação."
 */
function processPayment(pValue, pType) {
    if (pType == "credito") {
        return "Pagamento de R$" + pValue + " processado. Parcelamento disponível.";
    }
    else if (pType == "pix") {
        return "Pagamento de R$" + pValue + " processado. Desconto de 5% aplicado.";
    }
    else
        return "Boleto de R$" + pValue + " gerado. Aguardando compensação.";
}
console.log(processPayment(15, "credito"));
console.log(processPayment(40, "pix"));
console.log(processPayment(55, "boleto"));
export {};
