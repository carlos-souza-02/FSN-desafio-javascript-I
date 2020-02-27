// Base a ser utilizada
console.log('Escola DIGITAL HOUSE');

const alunosDaEscola =[
{nome:"Henrique",notas:[7,7,0],nomeDoCurso:['GTI'],faltas:5,dataMatricula:new Date},
{nome:"Edson",notas:[10,5,7],nomeDoCurso:['ADS'],faltas:0,dataMatricula:new Date},
{nome:"Bruno",notas:[10,9,9],nomeDoCurso:['Excel Avaçado'],faltas:5,dataMatricula:new Date},
{nome:"Guilherme",notas:[10,8,6],nomeDoCurso:["Full Stack"],faltas:0,dataMatricula:new Date},
{nome:"Carlos",notas:[0],nomeDoCurso:['Computação'],faltas:0,dataMatricula:new Date},
{nome:"Lucca",notas:[10,0,0],nomeDoCurso:["UX"],faltas:0,dataMatricula:new Date}
];

// funções----

const adicionarAluno = novoAluno => {
    let aluno = {nome:novoAluno,notas:0,nomeDoCurso:'',faltas:0,dataMatricula:new Date};
    console.log(`O aluno ${novoAluno} foi adicionado com sucesso.`);
    return alunosDaEscola.push(aluno);
    
};

const listarAlunos = () => {
    for(let aluno of alunosDaEscola){
        console.log(`---------------`);
        console.log(`${aluno.nome}`);
        
    }
};

const buscarAluno = nomeAluno => {

    let alunoEncontrados = alunosDaEscola.filter(aluno => {return aluno.nome == nomeAluno});

       if(alunoEncontrados){

        console.log(`Encontramos ${alunoEncontrados.length} aluno.`);

       } else {
        console.log(`Não encontramos nenhum aluno.`);
       }
};

const matricularAluno = (nomeAluno,curso) => {
    
    for (let aluno of alunosDaEscola){
        if(aluno.nome == nomeAluno){
            aluno.nomeDoCurso.push(curso);
            aluno.dataMatricula = new Date;
        }
    }
    console.log('Aluno matriculado com sucesso.');
};

const aplicarFalta = nomeAluno => {
    
    for (let aluno of alunosDaEscola){
        if(aluno.nome == nomeAluno){
            aluno.faltas++;
        }
    }
    return `${nomeAluno} ficou com falta.`;
};

const aplicarNota = (nomeAluno,notaAluno) => {
    
    for (let aluno of alunosDaEscola){
        if(aluno.nome == nomeAluno){
            aluno.notas.push(notaAluno);
        }
    }
    return `O aluno ${nomeAluno} recebeu nota ${notaAluno}.`;
};

const mediaAluno = nomeAluno => {
   let soma = 0;
   let qtdNotas = 0;
    for(let aluno of alunosDaEscola){
        if(aluno.nome == nomeAluno){
            for(var cont of aluno.notas){
                soma += cont;
                qtdNotas++;
            }
        }
    }
    return soma / qtdNotas;
};

const aprovarAluno = (nomeAluno) => {

    var media = mediaAluno(nomeAluno).toFixed(2);  
      
    for(let aluno of alunosDaEscola){

        if(aluno.nome == nomeAluno){   

            if(aluno.faltas <= 3 && aluno.dataMatricula && media >= 7){

                console.log(`O aluno ${aluno.nome} foi aprovado com média ${media}.`);

            } else {

                console.log(`O aluno ${aluno.nome} foi reprovado.`);
            }
        }
    }
};


console.log(adicionarAluno('Talita'));
console.log(listarAlunos());
console.log(buscarAluno('Lucca'));
console.log(matricularAluno('Carlos','Design'))
console.log(aplicarFalta('Carlos'));
console.log(aplicarNota('Carlos', 10));
console.log(aplicarNota('Carlos', 5));
console.log(aprovarAluno('Lucca'));
console.log(alunosDaEscola);
