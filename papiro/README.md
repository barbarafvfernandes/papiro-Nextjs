# Papiro

Aplicação web em Next.js para criação de blog utilizando o Higraph CMS headless. O projeto exibe listagem de postagens já realizadas e detalhes de cada uma delas.

## Funcionalidades

- Listagem de postagens na página inicial
- Página de detalhes de cada post
- exibição do nome do autor da postagem e data de publicação
- Interface com grid responsivo
- Consumo de dados via axios

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Axios
- CSS Modules

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Instalação

1. Clone o repositório
2. Entre na pasta do projeto
3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo chamado `.env.local` na raiz do projeto e adicione a sua URL do Hygraph:
   ```env
   HYGRAPH_HIGH_PERFORMANCE_URL=sua_url_da_api_aqui

## Como executar

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em https://papiro-nextjs.vercel.app/

## Scripts disponíveis

- `npm run dev` - inicia o servidor de desenvolvimento
- `npm run build` - gera a build de produção
- `npm run start` - inicia a aplicação já buildada
- `npm run lint` - executa a análise de lint do projeto

## Estrutura do projeto 

- `src/app` - páginas e rotas da aplicação
- `src/components` - componentes reutilizáveis
- `src/lib/api` - integração com o Higraph
- `src/types` - tipos TypeScript usados no projeto

## Observação

A aplicação depende da variável de ambiente `HYGRAPH_HIGH_PERFORMANCE_URL` para buscar os dados no Higraph CMS headless.

## Demonstração

Acesse a versão online da aplicação clicando no link abaixo:

https://papiro-nextjs.vercel.app/
