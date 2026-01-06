//-----------------------------------------------------------
/* EX08

Cada tarefa:
    Pendente (Pending)
    Em Andamento (InProgress)
    Concluída (Completed)

- Crie um enum para representar os possíveis estados de uma tarefa.
- Crie uma interface Tarefa que utilize esse enum.
- Implemente uma função que aceite uma lista de tarefas e um estado, e retorne apenas as tarefas que correspondem a esse estado.
- Crie uma função para marcar uma tarefa como concluída (mudar o estado para Completed).
    
*/
var estateTask;
(function (estateTask) {
    estateTask[estateTask["pending"] = 0] = "pending";
    estateTask[estateTask["inProgress"] = 1] = "inProgress";
    estateTask[estateTask["completed"] = 2] = "completed"; // concluido
})(estateTask || (estateTask = {}));
let tasks = [];
function createTask(pId, pName) {
    console.log("Tarefa nome: " + pName + " foi criada. ID: " + pId);
    return { id: pId, name: pName, estate: estateTask.pending };
}
function searchEstateTask(pListTasks, pEstate) {
    let selectTasks = [];
    for (let i = 0; i < pListTasks.length; i++) {
        if (pListTasks[i].estate == pEstate) {
            selectTasks.push(pListTasks[i]);
        }
    }
    return selectTasks;
}
function showTasksByEstate(pListTasks, pEstate) {
    let fTask = searchEstateTask(pListTasks, estateTask.pending);
    console.log("As tarefas setadas como: " + estateTask.pending + " são:");
    for (let i = 0; i < fTask.length; i++) {
        console.log("Tarefa nome: " + fTask[i].name + " ID: " + fTask[i].id);
    }
}
// criando as tarefas
tasks.push(createTask(1, "Cznhr"));
tasks.push(createTask(2, "Arrmr cm"));
tasks.push(createTask(3, "lmpr ch"));
tasks.push(createTask(4, "Trblhr"));
// exibindo as tarefas em um estado
showTasksByEstate(tasks, estateTask.pending);
export {};
