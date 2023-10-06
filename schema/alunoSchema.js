export const typeDefs = `
  type Query {
    alunos: [Aluno]
    alunoPorMatricula(matricula: String!): Aluno
    alunosPorCurso(curso: String!): [Aluno]
  }

  type Mutation {
    adicionarAluno(dados: AdicionarAlunoInput!): Aluno
  }

  input AdicionarAlunoInput {
    nome: String!
    matricula: String!
    idade: Int!
    curso: CursoInput!
    campus: String!
  }

  input CursoInput {
    nome: String!
    notaEnade: Int!
    tipo: String!
  }

  type Aluno {
    nome: String
    matricula: String
    idade: Int
    curso: Curso
    campus: String
  }

  type Curso {
    nome: String
    notaEnade: Int
    tipo: String
  }
`;
