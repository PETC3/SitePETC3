# Site PET C3

Site institucional do PET Ciências Computacionais da FURG, criado para apresentar o grupo, seus projetos, membros e materiais didáticos.

O projeto é um site estático feito com HTML, CSS e JavaScript puro. A página inicial usa um carrossel interativo de projetos, enquanto as páginas internas organizam membros e apostilas para acesso rápido da comunidade.

## Em um minuto

| | |
| --- | --- |
| Problema | Informações do PET C3, projetos, membros e materiais precisavam ficar reunidos em um espaço público e fácil de acessar. |
| Solução | Site institucional com apresentação do grupo, navegação por projetos, página de membros e área de apostilas. |
| Minha participação | Desenvolvimento da interface, estrutura das páginas e interações em JavaScript. |
| Código | [Página inicial](index.html) · [Páginas internas](paginas/) · [Estilos](css/) · [Scripts](js/) |

## Interface e experiência

- A página inicial apresenta o PET C3 e permite navegar pelos projetos do grupo em um carrossel.
- A seção de projetos atualiza texto, imagem e conteúdo de forma dinâmica com JavaScript.
- A página de membros exibe integrantes em grade visual, com informações e links sociais quando disponíveis.
- A página de apostilas centraliza materiais de estudo em PDF para download.
- O layout possui menu responsivo para navegação em telas menores.

## Capturas sugeridas

Quando for adicionar prints ao README, uma boa seleção seria:

- `docs/print_home.png`: página inicial com o carrossel de projetos.
- `docs/print_projeto.png`: detalhe de um projeto selecionado.
- `docs/print_membros.png`: grade de membros.
- `docs/print_apostilas.png`: página de materiais didáticos.

## Páginas

- `index.html`: apresentação do PET C3 e projetos.
- `paginas/membros.html`: membros do grupo.
- `paginas/apostilas.html`: apostilas e materiais para download.

## Funcionalidades

- Carrossel de projetos com Swiper.
- Troca dinâmica de conteúdo dos projetos.
- Menu responsivo.
- Página de membros com cards e overlays.
- Página de apostilas com links de download.
- Assets organizados por contexto: página inicial, membros e conteúdo institucional.

## Stack

- HTML
- CSS
- JavaScript
- Swiper
- Font Awesome
- ScrollReveal

## Como rodar localmente

Por ser um site estático, é possível abrir o arquivo diretamente no navegador:

```text
index.html
```

Para evitar diferenças de caminho ou comportamento entre navegadores, também é possível servir a pasta localmente:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Estrutura

```text
Apostilas/
  Apostila Arduino.pdf
  Apostila C.pdf
  Apostila HTML CSS.pdf
  Apostila Linux.pdf
  Apostila Python.pdf
  Apostila Redes.pdf

css/
  apostilas.css
  global.css
  main.css
  membros.css
  variaveis.css

imagens/
  main/
  membros/
  sobre/

js/
  main.js
  membros.js
  projetos.js

paginas/
  apostilas.html
  membros.html

index.html
```

## Manutenção

Conteúdo e textos da página inicial ficam em `index.html` e `js/projetos.js`.

Estilos globais ficam em `css/global.css` e `css/variaveis.css`.

Estilos específicos ficam em `css/main.css`, `css/membros.css` e `css/apostilas.css`.

Imagens usadas na página inicial ficam em `imagens/main/`.

Fotos dos membros ficam em `imagens/membros/`.

Apostilas em PDF ficam em `Apostilas/`.

## Observações

- O site carrega algumas bibliotecas por CDN, então a experiência completa depende de conexão com a internet.
- Os arquivos em `Apostilas/` podem aumentar bastante o tamanho do repositório.
- Antes de publicar alterações em membros, revise nomes, fotos, links sociais e textos pessoais.

Última revisão: 25/09/2026
