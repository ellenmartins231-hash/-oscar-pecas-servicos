# Oscar Peças Serviços

## Descrição do projeto

O **Oscar Peças Serviços** é um portal de autopeças especializado em veículos da linha Chevrolet (GM).

O objetivo do projeto é apresentar a empresa e organizar informações sobre veículos, modelos, anos e categorias de peças, facilitando a consulta dos clientes e o contato para solicitar informações e orçamentos.

A primeira versão é desenvolvida com HTML5 e CSS3, priorizando a estrutura das páginas, a organização do conteúdo, a identidade visual e a responsividade. Funcionalidades mais dinâmicas poderão ser implementadas futuramente com JavaScript.

## Justificativa

A escolha do tema foi baseada em uma empresa real, a Oscar Bosch Car Service, que também atua como Oscar Peças Serviços e trabalha com peças para veículos Chevrolet.

Como o catálogo envolve diferentes veículos, modelos, anos e categorias de peças, o portal busca apresentar essas informações de maneira organizada e visual. A proposta é facilitar a navegação dos clientes e oferecer um caminho para entrar em contato com a empresa e solicitar um orçamento.

O projeto também permite aplicar os conteúdos estudados na disciplina de Desenvolvimento Web, como HTML semântico, CSS, Flexbox, responsividade, formulários e organização de páginas.

## Objetivos

- Apresentar a empresa e sua área de atuação;
- Organizar informações sobre veículos Chevrolet;
- Apresentar categorias de peças automotivas;
- Facilitar a navegação e a localização das informações;
- Disponibilizar uma página para contato e solicitação de orçamento;
- Desenvolver uma interface adaptável a computadores, tablets e smartphones.

## Público-alvo

O portal é destinado principalmente a:

- Proprietários de veículos Chevrolet;
- Pessoas que procuram peças para manutenção ou reposição;
- Clientes que já sabem qual peça estão procurando;
- Pessoas que precisam identificar peças para determinado modelo e ano;
- Clientes interessados em consultar informações ou solicitar orçamentos.

## Mapa do portal

```text
Oscar Peças Serviços
│
├── Início
│   ├── Apresentação da empresa
│   ├── Destaques
│   └── Acesso às principais áreas
│
├── Veículos
│   └── Modelos Chevrolet e respectivos anos
│
├── Peças
│   └── Categorias de peças automotivas
│
└── Contato
    └── Formulário e informações para contato
```

## Páginas do projeto

### Início — `index.html`

Apresenta a Oscar Peças Serviços, sua área de atuação e os principais caminhos de navegação pelo portal. Também oferece acesso às áreas de veículos, peças e contato.

### Veículos — `veiculos.html`

Organiza a apresentação dos veículos da linha Chevrolet. A proposta é permitir que o usuário encontre o modelo e o ano desejados e, futuramente, navegue até as categorias de peças correspondentes.

A sequência planejada para a consulta é:

**Modelo → Ano → Categoria de peça**

### Peças — `pecas.html`

Apresenta um catálogo organizado por categorias, facilitando a consulta de peças automotivas.

Entre as categorias abordadas estão:

- Motor;
- Alimentação e injeção;
- Ignição;
- Lubrificação;
- Arrefecimento;
- Freios;
- Suspensão;
- Direção;
- Transmissão e embreagem;
- Filtros e revisão;
- Sistema elétrico;
- Escapamento;
- Ar-condicionado;
- Iluminação;
- Lataria e carroceria;
- Interior e acabamento;
- Rodas e cubos;
- Limpadores e esguicho;
- Vidros, portas e fechaduras;
- Coxins e suportes;
- Fixação e acessórios.

As categorias apresentadas são uma forma de organizar visualmente o catálogo. A disponibilidade, o código e a aplicação de cada peça deverão ser confirmados com a empresa.

### Contato — `contato.html`

Disponibiliza um canal para que os clientes entrem em contato com a empresa e solicitem informações ou orçamentos. A página também poderá direcionar o cliente para o atendimento pelo WhatsApp.

## Tecnologias utilizadas

### Versão 1

- **HTML5:** estruturação e organização do conteúdo das páginas;
- **CSS3:** estilização e identidade visual;
- **Flexbox:** organização e distribuição dos elementos;
- **Media queries:** adaptação do layout a diferentes tamanhos de tela;
- **Git:** controle de versão;
- **GitHub:** hospedagem do repositório do projeto;
- **GitHub Pages:** publicação do portal na web.

### Versão 2 — planejada

- **JavaScript:** implementação de funcionalidades dinâmicas e interação com o catálogo.

## Funcionalidades planejadas para a Versão 2

### Consulta dinâmica de peças

O usuário poderá selecionar o modelo do veículo, o ano e a categoria desejada. A página deverá atualizar os resultados de acordo com as opções selecionadas, facilitando a localização das peças correspondentes.

### Solicitação de orçamento

A partir de uma peça selecionada, o portal poderá preencher automaticamente informações como nome da peça, veículo e ano no formulário de contato, tornando a solicitação de orçamento mais prática.

Essas funcionalidades fazem parte do planejamento da segunda versão e não devem ser consideradas concluídas na V1.

## Identidade visual

A identidade visual utiliza como referência as cores associadas à Oscar Peças Serviços:

- **Azul:** cor predominante da interface;
- **Branco:** utilizado para manter a leitura e a organização visual;
- **Vermelho:** aplicado em elementos de destaque e chamadas para ação.

A proposta é criar uma interface relacionada ao setor automotivo, com aparência organizada e navegação simples.

## Responsividade e acessibilidade

O portal está sendo desenvolvido para diferentes tamanhos de tela:

- Computadores;
- Tablets;
- Smartphones.

Para isso, são utilizados recursos de CSS, Flexbox e media queries.

Também são considerados aspectos de acessibilidade, como o uso de HTML semântico, textos alternativos nas imagens e estados visuais para interação com elementos clicáveis e campos de formulário.

## Estrutura do projeto

```text
oscar-pecas-servicos/
├── index.html
├── veiculos.html
├── pecas.html
├── contato.html
├── css/
│   ├── reset.css
│   └── global.css
├── js/
│   └── busca.js
├── img/
│   └── logo-oscar.png
└── README.md
```

A estrutura representa os principais arquivos utilizados no desenvolvimento. Outros arquivos de imagens, estilos ou scripts poderão ser adicionados conforme a evolução do projeto.

## Como executar o projeto

1. Clone ou baixe o repositório;
2. Abra a pasta do projeto;
3. Abra o arquivo `index.html` em um navegador;
4. Utilize o menu para navegar entre as páginas.

Como a primeira versão prioriza HTML e CSS, não é necessário configurar um servidor para visualizar as páginas estáticas localmente.

## Publicação

O código-fonte do projeto é mantido em um repositório no GitHub.

A publicação por meio do GitHub Pages poderá ser acessada pelo endereço configurado nas opções do repositório, quando estiver habilitada.

## Referências e créditos

As imagens, os textos, o logotipo e os demais materiais de terceiros utilizados no projeto deverão ter suas fontes identificadas nesta seção, conforme forem incorporados.

## Capturas de tela

As capturas de tela das páginas serão adicionadas após a conclusão e a revisão visual da primeira versão.

## Status do projeto

**Versão 1 — Em desenvolvimento.**

A primeira versão tem como foco a estruturação das páginas, a organização do catálogo e a construção da interface com HTML e CSS.

As funcionalidades dinâmicas de consulta e integração com a solicitação de orçamento estão planejadas para a Versão 2.