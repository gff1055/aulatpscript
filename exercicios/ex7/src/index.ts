/*O Desafio: O Sistema de Personagens
Imagine que você está criando um jogo onde os personagens podem ter diferentes "camadas" de propriedades. Em vez de criar uma única interface gigante, vamos compor o personagem usando Intersections.

Passo 1: As Definições Base
Crie as seguintes interfaces:

DadosPessoais: Deve conter nome (string) e raca (string).

Estatisticas: Deve conter nivel (number) e hp (number).

Habilidades: Deve conter tipoMagia (string) e dano (number).

Passo 2: A Interseção
Crie um novo tipo chamado PersonagemCompleto que seja a interseção de DadosPessoais, Estatisticas e Habilidades.

Passo 3: Implementação
Crie uma função chamada gerarRelatorio que:

Receba um parâmetro do tipo PersonagemCompleto.

Retorne uma string formatada exibindo o nome, o nível e o dano da magia do personagem.

Passo 4: O Teste
Tente instanciar um objeto que satisfaça o tipo PersonagemCompleto e passe-o para a função.*/


interface PersonalData{
    name:string,
    race:string
}



interface Statistics{
    level:  number,
    hp:     number
}


interface Skills{
    magicType:  string,
    damage:     number
}


type fullCharacter = PersonalData & Statistics & Skills;    // intersection


// retorna os dados do personagem
function getCharacterSummary(pCharacter: fullCharacter){
    let summary:string = "Nome: "+pCharacter.name+" || nivel: "+pCharacter.level+" || damage: "+pCharacter.damage
    return summary;
}


const prota:string = getCharacterSummary({
    name: "John",
    race: "WolfMan",
    hp: 200000,
    level: 150,
    magicType: "attack",
    damage: 150000,
})


console.log(prota);