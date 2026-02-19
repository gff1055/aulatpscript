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
class MemoryStorage {
    data = [];
    getAll() {
        return this.data;
    }
    add(item) {
        this.data.push(item);
    }
}
let varMemoryStorage = new MemoryStorage();
let data1 = { id: 1618, raw: "dezesseis dezoito" };
let data2 = { id: 1619, raw: 25 };
varMemoryStorage.add(data1);
varMemoryStorage.add(data2);
console.log(varMemoryStorage.getAll());
export {};
