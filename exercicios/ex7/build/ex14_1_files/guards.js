// usando type
export function isCreditCard(pMethodPayment) {
    if (pMethodPayment.type == 'card') {
        return true;
    }
    return false;
}
// usando as
export function isBoleto(pMethodPayment) {
    return pMethodPayment.barCode !== undefined;
}
// usando in
export function isCrypto(pMethodPayment) {
    if ("walletAddress" in pMethodPayment)
        return true;
    return false;
}
