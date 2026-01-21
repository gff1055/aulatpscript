
class PaymentProcessor{

    subscriptionPayment(value: number, cardNumber: number):void
    subscriptionPayment(value: number, pix: string):void
    subscriptionPayment(value: number, boleto: string, discountRate: number):void
    subscriptionPayment(value: number, methodPayment: number|string, discountRate?: number ):void{
        if(typeof(methodPayment)=='number')
            console.log("O usuario escolheu pagar a assinatura de "+value+" com cartao de credito")
        else if(typeof(methodPayment)=='string'){
            if(!discountRate)
                console.log("O usuario escolheu pagar a assinatura de "+value+" por PIX")
            else{
                let discount = 1-(discountRate/100)
                let discountedValue = value * discount;
                console.log("O usuario escolheu pagar a assinatura de "+value+" reais com boleto. Houve um desconto de "+discountRate+"%. Então o valor final a ser pago será: "+discountedValue+" reais")
            }
        }
    }
}

let paymentProcessor = new PaymentProcessor;

paymentProcessor.subscriptionPayment(10, 123456789);
paymentProcessor.subscriptionPayment(20, '1011121');
paymentProcessor.subscriptionPayment(10, '1415161',20);