# Github Blog

Este projeto é uma aplicação desenvolvida com React e TypeScript que utiliza a API do GitHub para exibir informações sobre um perfil e listar issues de um repositório como posts de blog. O objetivo deste desafio foi praticar o consumo de APIs externas, gerenciamento de rotas com React Router DOM e renderização de conteúdo dinâmico.

🧩 **Principais Tecnologias e Funcionalidades**
- **React com TypeScript**: Utilizado para construção do frontend.
- **React Router DOM**: Gerenciamento de rotas, incluindo rotas dinâmicas para visualizar os posts (issues).
- **Axios**: Para consumo da API do GitHub.
- **react-markdown**: Utilizado para renderizar o conteúdo de issues, que estão no formato Markdown, para HTML.
- **GitHub API**: Buscando dados do perfil do GitHub e issues de um repositório.
- **react-hook-form**: Gerenciamento de formulários de busca.
- **Styled-Components**: Utilizado para estilização.

## 🚀 Link para visualizar o projeto
[Confira a versão online do projeto aqui](https://vercel)

## 📖 Funcionalidades

- **Exibição do perfil do GitHub**: A aplicação exibe informações do seu perfil, como nome, imagem, número de seguidores, entre outros dados.
- **Listagem de Issues**: As issues de um repositório são listadas, com um pequeno resumo.
- **Exibição do Post Completo**: Ao clicar em uma issue, o post completo é exibido, com formatação Markdown convertida para HTML.

## 🤝 Contribuições

Se você deseja contribuir para o projeto, fique à vontade para abrir um **Pull Request** ou relatar problemas.

## ⚠️ Limitações de Requisições

A API do GitHub tem um limite de requisições, que pode ser de 10 por minuto sem autenticação e até 30 por minuto com autenticação. Caso seja necessário realizar mais requisições, crie um token de acesso pessoal no GitHub.

---

