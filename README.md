# Minicurso Introdução ao GraphQL

Este é o resultado da API GraphQL implementada durante o Minicurso Introdução ao GraphQL, ministrado por mim, no **IV Sertão Comp** do **IFPB - Campus Cajazeiras** em 06/10/2023. É uma API básica, para fins didáticos
que utilizou um array como fonte dos dados e não um banco de dados real. 

## O que é o GraphQL? ⁉️

O GraphQL, como diz a própria [documentação oficial](https://graphql.org/learn/), é uma **linguagem de consulta e especificação de dados** para APIs. Com GraphQL, podemos:

- Descrever os dados que nossa aplicação possui;
- Descrever as consultas disponíveis em nossa API;
- Consultar somente os dados necessários ("que eu quero") durante uma requisição;
- Realizar várias consultas em uma única requisição e endpoint, diferente do padrão arquitetural REST.

### Recursos do GraphQL

O GraphQL tem uma sintaxe própria e é independente de linguagem de programação e banco de dados. O GraphQL fornece recursos como:

- **Tipos de dados primitivos / Scalar Types**: Int, Float, String, Boolean e ID;
- **Tipos de dados personalizados**: os objetos descritos e implementados pelo desenvolvedor no *schema* da API;
- **Suporte a interfaces e enums**;
- **Argumentos, variáveis e diretivas**;
- **Query**: objeto especial que define consultas de leitura disponíveis na API;
- **Mutation**: objeto especial que define consultas de escrita de dados disponíveis na API;
- **Resolvers**: funções que lidam com as consultas e retornam os dados necessários;
- Dentre outros recursos (consultar a documentação oficial).

### Links úteis:

🗒️**Guia para o desenvolvimento da API utilizado durante o minicurso no Notepad online**: [clique aqui](https://www.invertexto.com/minicursographql).

