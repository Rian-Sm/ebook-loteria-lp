# Landing Page
 __Landing page__ com diversas caracteristicas des design.

[GITHUB PAGES](https://rian-sm.github.io/ebook-loteria-lp/) do projeto.

## Instalação

### 1. Clone do projeto e instalação de dependências

````
git clone https://github.com/Rian-Sm/ebook-loteria-lp.git

cd ebook-loteria-lp

npm install

````

### 2. Rodar o projeto

Para rodar o projeto basta executar

````
npm run dev
````

### 3.  Build e Deployment - local / github pages

Para gerar um deployment é necessário modificar o arquivo `vite.config.ts` onde determinará a base dos arquivos sendo github pages ou outro local.

após configuração de arquivo execute execute um dos dois processos abaixo:


#### 3.1. Deployment local 


```
npm run build
```

Para rodar local é necessario usar um pacote de servidor js:

```
npm install -g serve
```

assim executando o codigo com

```
serve dist
```

#### 3.2. Deployment Github Pages

Basta configurar a rota para o repositorio remoto e executar

```
npm run deploy
```

