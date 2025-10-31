# ![Logo Dona Florinda](/src/images/Dona_Florinda.png)

## Integrantes

**Raphael Ribeiro C161262**

**Rosali Gouveia C161266**

## Site
**Dona Florinda** é uma página de restaurante com cardápio completo, modal com descrição detalhada dos itens, página exclusiva para pratos especiais, cadastro de reservas e uma seção reservada com as receitas do site.

O site foi desenvolvido utilizando **HTML**, **CSS** e **JavaScript**.

### Estrutura
📦 restaurante/  
├── 📁 pratos-especiais/    # Páginas de pratos com descrição especial  
│   ├── churros.html       
│   ├── enchiladas.html    
│   └── sucos.html         
├── 📁 src/                 
│   ├── 📁 css/             # Arquivos CSS  
│   ├── 📁 documents/       # Documentos para download  
│   ├── 📁 images/          # Imagens  
│   └── 📁 js/              # Scripts com ações especiais do site  
├── index.html              # Página principal  
├── login.html              # Página de login para pagina de receitas  
├── receitas.html           # Página de receitas  
└── README.md               # Documentação principal do projeto

## CSS
### Técnicas
Para a estilização do site foram utilizadas técnicas de **aninhamento (nesting)**, com uso de seletores (classes, IDs e tags), variáveis para padronização, um reset inicial e a função `@media` para garantir a responsividade.

### Fontes
```css
"Fredoka", sans-serif;
```
### Cores
```CSS
/* Cores */
--mexico-vermelho: #c8102e;
--mexico-verde: #006847;
--chavo-laranja: #f26a1b;
--chavo-azul: #cce5dd;
--white-shadow: #f5f5f580;
--black-shadow: #000000e6;
--light-shadow: #33333390;
/* Cores de texto */
--primary-text-color: #666666;
--secondary-text-color: #f5f5f5;
--tertiary-text-color: #b8b6b0;
```

## JavaScript
O JavaScript foi utilizado para criação de carrosséis, modais, links exclusivos e menu mobile. Um pequeno script também foi criado para validar o login da área de receitas.

## Login (Página de receitas)
**Usuário:** admin
**Senha:** admin
