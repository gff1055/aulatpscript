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
//    getById(id: number):T|undefined
//    save(item: T):void
}



// classe para armazenar dadps
class MemoryStorage<T extends {id: number}> implements Repository<T>{
    
    private data:T[] = [];  // array de dados

    getAll(): T[] {         // retorna todos os daods
        return this.data
    }


    add(item: T){           // adiciona um dado nos repositorios
        this.data.push(item);
    }


/*    update(pId:number,item:T){
        let foundedItem:T|undefined 
        foundedItem = this.getById(pId)
    }*/

/*    getById(pId:number):T|undefined{
        let vlData:T|undefined = undefined;
        for(const item of this.data){
            if(pId == item.id){
                vlData = item;
                return vlData;
            }
        }
        return undefined;
    }*/
    
/*    save(pItem: T){
        this.data.push(pItem)
    }
*/
}

type Data = {   // Type Alias para armazenar os dados
    id:number;              // id do dado
    raw: number|string      // dado propriamente dito
}

// teste

let varMemoryStorage:MemoryStorage<Data> = new MemoryStorage<Data>()

let data1:Data = {id:1618, raw:"dezesseis dezoito"}
let data2:Data = {id:1619, raw:25}

varMemoryStorage.add(data1);
varMemoryStorage.add(data2);


console.log(varMemoryStorage.getAll())