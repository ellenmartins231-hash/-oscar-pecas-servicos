# Oscar Peças Serviços

## Descrição do projeto

O Oscar Peças Serviços é um portal de autopeças especializado em veículos da linha Chevrolet (GM).

O projeto tem como objetivo organizar e apresentar informações sobre veículos, modelos, anos e categorias de peças, facilitando a consulta dos clientes e o contato com a empresa para solicitar informações e orçamentos.

A primeira versão do projeto será desenvolvida utilizando HTML e CSS, com foco na estrutura, organização do conteúdo, identidade visual e responsividade. Futuramente, o portal poderá receber funcionalidades desenvolvidas com JavaScript.

## Justificativa

A escolha do tema foi baseada em uma empresa real, a Oscar Bosch Car Service, que atua também como Oscar Peças Serviços e trabalha com peças para veículos da linha Chevrolet.

O catálogo da empresa possui diferentes veículos, modelos, anos e categorias de peças. Por isso, o projeto busca transformar essa organização em uma interface de consulta simples e visual, permitindo que o cliente encontre o veículo e a peça que procura e, posteriormente, entre em contato com a empresa para solicitar um orçamento.

O projeto também permite aplicar conceitos estudados na disciplina de Desenvolvimento Web, como HTML semântico, CSS, Flexbox, responsividade, formulários e organização de páginas.

## Objetivo

O objetivo do projeto é desenvolver um portal de autopeças que apresente a Oscar Peças Serviços e organize seu catálogo de peças Chevrolet de maneira clara e acessível.

Entre os principais objetivos estão:

* Apresentar a empresa e sua área de atuação;
* Organizar os veículos Chevrolet por modelo e ano;
* Organizar as peças por categorias;
* Facilitar a localização de peças;
* Disponibilizar um canal para contato e solicitação de orçamento;
* Desenvolver uma interface responsiva para diferentes tamanhos de tela.

## Público-alvo

O portal é destinado principalmente a:

* Proprietários de veículos Chevrolet;
* Pessoas que procuram peças para manutenção ou reposição;
* Clientes que já sabem qual peça precisam;
* Pessoas que precisam identificar uma peça para determinado modelo e ano;
* Clientes interessados em solicitar informações ou orçamento.

## Mapa do portal

O portal será composto inicialmente pelas seguintes páginas:

```text
Oscar Peças Serviços
│
├── Início
│   └── Apresentação, destaques e acesso às principais áreas
│
├── Veículos
│   └── Modelos Chevrolet
│       └── Anos dos veículos
│           └── Categorias de peças
│
├── Peças
│   └── Categorias e informações das peças
│
└── Contato
    └── Formulário para contato e solicitação de orçamento
```

## Páginas

### Início

A página inicial apresentará a Oscar Peças Serviços, sua especialização em veículos Chevrolet e os principais caminhos para navegação pelo portal.

Também serão apresentados destaques de categorias de peças e uma chamada para que o cliente possa solicitar um orçamento.

### Veículos

A página de veículos permitirá navegar pelos modelos da linha Chevrolet e seus respectivos anos.

A estrutura planejada será baseada na sequência:

**Modelo → Ano → Categoria de peça**

### Peças

A página de peças apresentará um catálogo organizado por categorias, facilitando a localização dos produtos.

Entre as categorias que poderão ser apresentadas estão:

* Motor;
* Freios;
* Suspensão;
* Elétrica;
* Arrefecimento;
* Transmissão.

As peças poderão apresentar informações como aplicação, modelo, ano e código, quando disponível.

### Contato

A página de contato disponibilizará um formulário para que o cliente possa enviar uma solicitação à empresa.

O formulário poderá conter informações como nome, contato, veículo, peça desejada e mensagem. Além disso, o cliente poderá entrar em contato diretamente pelo WhatsApp, caso prefira conversar com um atendente da Oscar Peças Serviços. 

## Funcionalidades planejadas para a Versão 2

### Consulta dinâmica de peças

**Página:** Veículos / Peças

**Elementos envolvidos:** modelo, ano, categoria e lista de peças.

**Ação do usuário:** selecionar o modelo do veículo, o ano e a categoria desejada.

**Comportamento esperado:** o JavaScript deverá atualizar os resultados apresentados de acordo com as opções selecionadas, mostrando as peças relacionadas ao veículo.

**Contribuição para o projeto:** facilitar a localização de peças dentro de um catálogo com diferentes modelos e anos.

### Solicitação de orçamento

**Página:** Peças / Contato

**Elementos envolvidos:** botão de solicitação de orçamento e formulário de contato.

**Ação do usuário:** selecionar uma peça e solicitar um orçamento.

**Comportamento esperado:** as informações da peça selecionada poderão ser utilizadas para preencher automaticamente parte do formulário, como nome da peça, veículo e ano.

**Contribuição para o projeto:** tornar o contato com a empresa mais rápido e facilitar a solicitação de orçamento.

## Tecnologias utilizadas

### Versão 1

* HTML5;
* CSS3;
* Flexbox;
* Git e GitHub;
* GitHub Pages.

### Versão 2

* HTML5;
* CSS3;
* JavaScript;
* Git e GitHub;
* GitHub Pages.

## Estrutura planejada do projeto

```text
oscar-pecas-servicos/
├── index.html
├── veiculos.html
├── pecas.html
├── contato.html
├── assets/
│   ├── css/
│   │   └── global.css
│   ├── js/
│   │   └── script.js
│   └── images/
├── README.md
└── LICENSE
```

## Identidade visual

A identidade visual do portal será baseada na identidade da Oscar Peças Serviços, utilizando principalmente as cores:

* Azul;
* Branco;
* Vermelho.

O azul será utilizado como cor predominante da interface, enquanto o vermelho será utilizado em elementos de destaque e chamadas para ação.

A proposta visual é criar uma interface relacionada ao setor automotivo, mantendo uma aparência profissional, organizada e fácil de utilizar.

## Responsividade

O portal será desenvolvido para funcionar em diferentes tamanhos de tela, incluindo:

* Computadores;
* Tablets;
* Smartphones.

Serão utilizados recursos de CSS, Flexbox e media queries para adaptar a disposição dos elementos de acordo com o tamanho da tela.

## Referências

As imagens, textos, logotipo e demais materiais de terceiros utilizados no projeto serão identificados nesta seção conforme forem adicionados.

Quando necessário, também serão informadas as respectivas fontes e créditos.

Publicação

GitHub: Criado

Capturas de tela

As capturas de tela do projeto serão adicionadas após a implementação da primeira versão.

Status do projeto

Versão 1 — Em desenvolvimento

A primeira versão contempla a construção da estrutura do portal utilizando HTML e CSS.
