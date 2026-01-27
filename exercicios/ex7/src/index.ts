
interface CreditCard{
    type        :'card';
    cardNumber  :string;
    cvv         :number;
}

interface Boleto{
    type            :'boleto';
    barCode         :string;
    expirationDate  :Date;
}

interface Crypto{
    type            :'crypto';
    walletAddress   :string;
    network         :'eth'|'btc';
}


interface Pix{
    type            :'pix';
    key             :string;
}

type PaymentMethod  = CreditCard | Boleto | Crypto | Pix;


// usando type
function isCreditCard(pMethodPayment:PaymentMethod):pMethodPayment is CreditCard{
    if(pMethodPayment.type=='card'){
        return true;
    }
    return false;
}

// usando IS
function isBoleto(pMethodPayment:PaymentMethod):pMethodPayment is Boleto{
    return (pMethodPayment as Boleto).barCode!==undefined
}

// usando in
function isCrypto(pMethodPayment:PaymentMethod):pMethodPayment is Crypto{
    if("walletAddress" in pMethodPayment) return true;
    return false;
}


function processPayment(payment: PaymentMethod){
    
    if(isCreditCard(payment)){
        console.log("Processando cartão final "+payment.cardNumber.slice(-5))
    }
    else if(isBoleto(payment)){
        
    }
    else if(isCrypto(payment)){
        
        console.log("Processando cartão final");
    }
    
}

