import { isCreditCard, isBoleto, isCrypto, } from "./guards.js";
export function createCreditCard(pCardNumber, pCvv) {
    return {
        type: 'card',
        cardNumber: pCardNumber,
        cvv: pCvv
    };
}
export function createBoleto(pBarCode, pExpirationDate) {
    return {
        type: 'boleto',
        barCode: pBarCode,
        expirationDate: pExpirationDate,
    };
}
export function createCrypto(pWalletAddress, pNetwork) {
    return {
        type: 'crypto',
        walletAddress: pWalletAddress,
        network: pNetwork
    };
}
export function processPayment(payment) {
    if (isCreditCard(payment)) {
        console.log("Processando cartão final " + payment.cardNumber.slice(-4));
    }
    else if (isBoleto(payment)) {
        const today = new Date();
        if (payment.expirationDate > today) {
            console.log("A data do cartao de credito é futura");
        }
        else
            console.log("ERRO: Cartão ja expirado");
    }
    else if (isCrypto(payment)) {
        if (payment.network != "eth") {
            console.log("ERRO: A rede precisa ser obrigatoriamente ETH");
        }
        else
            console.log("Transacao bitcoin aprovada");
    }
}
