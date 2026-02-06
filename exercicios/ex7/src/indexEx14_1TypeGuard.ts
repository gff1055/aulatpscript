
import {
    CreditCard,
    Boleto,
    Crypto,
    PaymentMethod
} from "./ex14_1_files/exports.js";



import {
    isCreditCard,
    isBoleto,
    isCrypto,
} from "./ex14_1_files/guards.js";


import{
    createCreditCard,
    createBoleto,
    createCrypto,
    processPayment
} from "./ex14_1_files/processor.js"


const pagamento1:PaymentMethod = createCreditCard("202601272039",930);
const pagamento2:PaymentMethod = createBoleto("202601272049",new Date(2025,6,6));
const pagamento3:PaymentMethod = createCrypto("202601272039",'eth');
const pagamento1n:PaymentMethod = createCreditCard("202601291012",312);
const pagamento2n:PaymentMethod = createBoleto("202601272049",new Date(2026,6,6));
const pagamento3n:PaymentMethod = createCrypto("202601272039","btc");


processPayment(pagamento1);
processPayment(pagamento2);
processPayment(pagamento3);
processPayment(pagamento1n);
processPayment(pagamento2n);
processPayment(pagamento3n);

