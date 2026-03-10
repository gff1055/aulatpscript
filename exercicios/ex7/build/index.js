/**
 * EXERCÍCIO: Sistema de Gestão de Oficina Estelar
 * * OBJETIVO:
 * Praticar a tipagem avançada em TypeScript utilizando estruturas que
 * garantem a consistência dos dados e facilitam a manutenção do código.
 * * TÓPICOS ABRANGIDOS:
 * 1. Interface: Para definir o contrato e a estrutura dos objetos "Nave".
 * 2. Enum: Para padronizar os estados de reparo, evitando erros de string literal.
 * 3. Record: Para criar um dicionário de naves indexado por ID (registro),
 * demonstrando como mapear chaves dinâmicas a tipos específicos.
 * * CENÁRIO:
 * Gerenciar uma frota de naves espaciais onde cada nave possui um registro
 * único, modelo e um status de manutenção que pode ser atualizado.
 */
// estados de reparo
var RepairStatus;
(function (RepairStatus) {
    RepairStatus[RepairStatus["Pending"] = 0] = "Pending";
    RepairStatus[RepairStatus["Inprogress"] = 1] = "Inprogress";
    RepairStatus[RepairStatus["Completed"] = 2] = "Completed";
    RepairStatus[RepairStatus["Canceled"] = 3] = "Canceled";
})(RepairStatus || (RepairStatus = {}));
/** Criando record e populando com alguns dados de naves */
let fleet = {
    "1111": {
        name: "nave1",
        model: "1111",
        status: RepairStatus.Pending
    },
    "2222": {
        name: "nave2",
        model: "2222",
        status: RepairStatus.Pending
    },
    "3333": {
        name: "nave3",
        model: "3333",
        status: RepairStatus.Pending
    },
};
/** funcao para atualizar o status das naves
 * - recebe o codigo da nave e o novo status
 * - retorna TRUE se tiver achado, e UNDEFINED eno caso de nao achar ou se der erro.
 * */
function updateShipStatus(pId, newStatus) {
    if (fleet[pId]) {
        fleet[pId].status = newStatus;
        return true;
    }
    return undefined;
}
/** testando as funcoes */
let status;
status = updateShipStatus("1111", RepairStatus.Canceled); // recebe o resultado da atualizacao da nave
/**
 * Se a atualizacao for concluida, uma mensagem é enviada para a tela
 * senao o aviso de erro interno é exibido
 */
if (status) {
    console.log("Status atualizado");
    console.log(fleet["1111"]);
}
else
    console.log("Erro interno");
/** teste usando uma nave que nao existe */
status = updateShipStatus("123456", RepairStatus.Canceled);
if (status) {
    console.log("Status atualizado");
    console.log(fleet["1111"]);
}
else
    console.log("Erro interno");
export {};
