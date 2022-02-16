# Executando a aplicação

## Antes de começar...

Garanta que os seguintes softwares e serviços estejam instalados em seu computador:

- [Node.js](https://nodejs.org/en/)

Recomendamos também que leia a documentação do [React](https://pt-br.reactjs.org/) e a do [TypeScript](https://www.typescriptlang.org/) caso esse seja seu primeiro contato com as tecnologias.

****

## 1 - Instalando as dependências

O gerenciador de pacotes utilizado no projeto é o *yarn*, portanto, será necessário instalá-lo primeiro. Para instalar o *yarn* execute o seguinte comando no terminal:

```
npm install --global yarn
```

Agora que o *yarn* está instalado, abra um terminal na raiz do projeto e execute o comando baixo para instalar as dependências do projeto:

```
yarn install
```

**O comando falhou?**

Caso o comando falhe, exclua o arquivo *yarn.lock* da raiz do projeto e execute o comando ```yarn install``` novamente.

## 2 - Iniciando a aplicação

Antes de iniciar a aplicação, garanta que a *API* da aplicação esteja rodando corretamente. **Caso não tenha clonado a API ainda** acesse o repositório clicando [aqui](https://github.com/FlavioLucasFer/perseus-monicare-api-server) e leia o README.md para ter o passo-a-passo de como rodar corretamente a *API*. 

Para clonar a *API*, execute o seguinte comando:

```
git clone https://github.com/FlavioLucasFer/perseus-monicare-web.git
```

Com a API rodando, abra um terminal na raiz do projeto e execute o seguinte comando para inciar a aplicação:

```
yarn start
```

E pronto, a aplicação está inciada e rodando. 

## Rodando os testes

Para rodar os testes automatizados basta executar o seguinte comando:

```
yarn test --watchAll
```

## Não conseguiu iniciar a aplicação?

Caso tenha seguido o passo a passo corretamente e mesmo assim não tenha conseguido iniciar a aplicação, abra um *issue* no repositório que iremos ajudá-lo. 
