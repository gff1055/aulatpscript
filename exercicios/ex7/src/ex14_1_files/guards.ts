import {
    CreditCard,
    Boleto,
    Crypto,
    PaymentMethod
} from "./exports.js";


// usando type
export function isCreditCard(pMethodPayment:PaymentMethod):pMethodPayment is CreditCard{
    if(pMethodPayment.type=='card'){
        return true;
    }
    return false;
}

// usando as
export function isBoleto(pMethodPayment:PaymentMethod):pMethodPayment is Boleto{
    return (pMethodPayment as Boleto).barCode!==undefined
}

// usando in
export function isCrypto(pMethodPayment:PaymentMethod):pMethodPayment is Crypto{
    if("walletAddress" in pMethodPayment) return true;
    return false;
}
