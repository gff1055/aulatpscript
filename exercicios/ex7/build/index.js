/**
 * PROJETO: Sistema de Repositório Universal (The Generic Vault)
 * * OBJETIVO: Implementar um motor de gerenciamento de dados que utilize
 * TypeScript Generics para garantir reuso de código e Type Safety.
 * * CONCEITOS PRATICADOS:
 * 1. Type Variables <T>: Criação de moldes flexíveis para interfaces e classes.
 * 2. Generic Constraints (extends): Restringir tipos para garantir propriedades obrigatórias (ex: ID).
 * 3. Keyof Operator: Manipulação de propriedades de objetos de forma segura.
 * 4. Data Mapping: Simulação de persistência de dados em memória.
 * * DESAFIO: Evoluir de uma interface simples para métodos utilitários que
 * extraem dados baseados em chaves dinâmicas do tipo T.
 */
// classe para armazenar dadps
class MemoryStorage {
    data = []; // array de dados armazenados
    getAll() {
        return this.data;
    }
    save(item) {
        this.data.push(item);
    }
    update(pItem) {
        if (!pItem.id)
            return undefined;
        // percorre o array de dados para encontrar o ID
        for (const item of this.data) {
            if (pItem.id == item.id) {
                item == pItem;
                return true;
            }
        }
        return false;
    }
    // faz a busca por um dado pelo ID. Retorna o respectivo dado ou 'undefined' se nao for encontrado
    getById(pId) {
        let vlData = undefined;
        // percorre o array de dados para encontrar o ID
        for (const item of this.data) {
            if (pId == item.id) {
                vlData = item;
                return vlData;
            }
        }
        return undefined;
    }
}
// teste = adidionando um dado
let varMemoryStorage = new MemoryStorage();
let data1 = { id: 1618, raw: "dezesseis dezoito" };
let data2 = { id: 1619, raw: 25 };
varMemoryStorage.save(data1);
varMemoryStorage.save(data2);
console.log(varMemoryStorage.getAll());
// teste buscando um dado que existe
let foundData = varMemoryStorage.getById(1618);
if (!foundData)
    console.log("Não ha ocorrencias");
else {
    console.log(foundData);
    foundData.raw = 11121;
    varMemoryStorage.update(foundData);
}
console.log(varMemoryStorage.getAll());
// teste buscando um dado que nao existe
let foundData2 = varMemoryStorage.getById(9999);
if (!foundData2)
    console.log("Não ha ocorrencias");
else
    console.log(foundData);
export {};
