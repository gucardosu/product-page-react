# 🛒 Kelltech Informática - Product Page

Uma página de produtos construída com **React**, focada em componentização, reutilização de código e estilização dinâmica. Este projeto simula a vitrine de um e-commerce de tecnologia, exibindo periféricos e monitores de forma responsiva.

## ✨ Funcionalidades

* **Listagem Dinâmica:** Os produtos são renderizados dinamicamente a partir de um array de dados usando o método `.map()`.
* **Componente de Botão Customizável:** Um componente `<Button />` altamente flexível, que aceita propriedades (props) para cor de fundo, cor do texto e tamanho, com fallback para estilos customizados.
* **Cards de Produto Inteligentes:** O componente `<ProductCard />` exibe informações do produto e inclui lógicas de renderização condicional:
    * **Badges de Categoria:** A cor da etiqueta muda dinamicamente com base na categoria do produto (ex: Periféricos, Monitor, Promoção).
    * **Destaque Automático:** Um ícone de fogo (🔥) aparece automaticamente em produtos que custam R$ 500 ou mais, ou que estão na categoria "Promoção".
* **Layout Responsivo:** Utilização de CSS Flexbox para organizar os cards lado a lado em um grid que se adapta ao tamanho da tela.

## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção da interface de usuário.
* **CSS3:** Estilização pura, utilizando Flexbox para o layout e variáveis de escopo local para os componentes.
* **JavaScript (ES6+):** Lógica de componentes, props, desestruturação e arrow functions.

## 📂 Estrutura de Componentes

O projeto foi organizado para manter o código limpo e escalável:

* `ProductsPage`: Página principal (container) que armazena os dados dos produtos e renderiza a grade.
* `Header`: Cabeçalho simples da loja.
* `ProductCard`: Estrutura individual de cada item da vitrine.
* `Button`: Botão reutilizável em toda a aplicação.
