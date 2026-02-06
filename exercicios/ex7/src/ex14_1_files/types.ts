export interface CreditCard{
    type        :'card';
    cardNumber  :string;
    cvv         :number;
}

export interface Boleto{
    type            :'boleto';
    barCode         :string;
    expirationDate  :Date;
}

export interface Crypto{
    type            :'crypto';
    walletAddress   :string;
    network         :'eth'|'btc';
}


interface Pix{
    type            :'pix';
    key             :string;
}

export type PaymentMethod  = CreditCard | Boleto | Crypto | Pix;
