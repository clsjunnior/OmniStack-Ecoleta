![Ecoleta Logo](/cover-md.png)


### :on: Servidor
---
Para iniciar o projeto node executar os seguintes comandos:

**Baixar as dependências**
```cmd 
npm install 
```

**Execute a migrate do knex para criar o banco de dados:**
```cmd 
npm run knex:migrate
```

**Execute o Seeds para prencher a tabela de itens e suas imagens:**
```cmd 
npm run knex:seed
```

**Inicie a API**
```cmd 
npm run dev
```

- **Estrutura de banco de dados - SQLlite**
  - Points
    - Image
    - name
    - email
    - whatsapp
    - latitude
    - longitude
    - city
    - uf
  - Items
    - Image
    - title
  - Points_Items
    - point_id
    - item_id
  

- **Funcionalidades da API**
  - Cadastro de ponto de coleta com upload de imagem.
  - Listar os itens cadastrados.
  - Listar pontos - filtro por cidade/estado/itens.
  - Listar um ponto de coleta específico.

### :on: Frontend

**Baixar as dependências**
```cmd 
npm install 
```

**Informe a URL da sua API no arquivo .ENV**
```cmd 
API_URL = 
```

**Inicie o Projeto**
```cmd 
npm start
```
---
**Ainda serão implementadas novas funcionalidades para deixar o app mais completo!**
