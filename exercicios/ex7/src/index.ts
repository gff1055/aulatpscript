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

interface Repository<T>{    // interface para o repositorio de dados
    getAll():T[]
    getById(id: number):T|undefined
    save(item: T):void
}



// classe para armazenar dadps
class MemoryStorage<T extends {id: number}> implements Repository<T>{
    
    private data:T[] = [];  // array de dados armazenados

    getAll(): T[] {         // retorna todos os dados armazenados
        return this.data
    }


    save(item: T){           // adiciona um dado nos repositorios
        this.data.push(item);
    }


/*    update(pId:number,item:T){
        let foundedItem:T|undefined 
        foundedItem = this.getById(pId)
    }*/



    // faz a busca por um dado pelo ID. Retorna o respectivo dado ou 'undefined' se nao for encontrado
    getById(pId:number):T|undefined{ 
        let vlData:T|undefined = undefined;

        // percorre o array de dados para encontrar o ID
        for(const item of this.data){
            if(pId == item.id){
                vlData = item;
                return vlData;
            }
        }
        return undefined;
    }
    
}

type Data = {   // Type Alias para armazenar os dados
    id:number;              // id do dado
    raw: number|string      // dado propriamente dito
}

// teste = adidionando um dado

let varMemoryStorage:MemoryStorage<Data> = new MemoryStorage<Data>()

let data1:Data = {id:1618, raw:"dezesseis dezoito"}
let data2:Data = {id:1619, raw:25}

varMemoryStorage.save(data1);
varMemoryStorage.save(data2);


console.log(varMemoryStorage.getAll())


// teste buscando um dado que existe

let foundData = varMemoryStorage.getById(1618)

if(!foundData) console.log("Não ha ocorrencias")
else console.log(foundData)


// teste buscando um dado que nao existe

let foundData2 = varMemoryStorage.getById(9999)

if(!foundData2) console.log("Não ha ocorrencias")
else console.log(foundData)