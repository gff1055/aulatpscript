
type eventLog = [eventName: string, eventStatus: boolean, maxPartCamp: number];


const varEventLog: eventLog = ["rew", false, 23]


function showDetails(parEvntLg:eventLog){
    console.log("Nome         : ", parEvntLg[0])
    console.log("Status       : ", isActive(parEvntLg[1]))
    console.log("Participantes: ", parEvntLg[2])


}

function isActive(varAux:boolean){
    if(varAux == false) return "Cancelado"
    else return "Ativo"
}

showDetails(varEventLog);




