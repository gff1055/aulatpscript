const varEventLog = ["rew", false, 23];
function showDetails(parEvntLg) {
    console.log("Nome         : ", parEvntLg[0]);
    console.log("Status       : ", isActive(parEvntLg[1]));
    console.log("Participantes: ", parEvntLg[2]);
}
function isActive(varAux) {
    if (varAux == false)
        return "Cancelado";
    else
        return "Ativo";
}
showDetails(varEventLog);
export {};
