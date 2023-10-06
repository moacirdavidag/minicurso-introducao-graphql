import { alunos } from "../data/alunos.js"

export const alunoResolver = {
    Query: {
        alunos: () => alunos,
        alunoPorMatricula: (obj, args) => {
            return alunos.find(aluno => aluno.matricula === args.matricula)
        },
        alunosPorCurso: (obj, args) => {
            return alunos.filter(aluno => aluno.curso.nome === args.curso);;
        },
    },
    Mutation: {
        adicionarAluno: (obj, args) => {
            const aluno = args.dados;
            alunos.push(aluno);
            return alunos.find(aluno => aluno.matricula === args.dados.matricula);
        }
    }
};