# MemeVerse

Atividade Avaliativa: Componentização com Props em Next.js 15 

Este é um projeto desenvolvido com [Next.js], que utiliza componentes React para criar uma aplicação interativa e responsiva para explorar memes, categorias, criadores e eventos relacionados.


## Instruções de Instalação e Execução

### Pré-requisitos
- Node.js
- Gerenciador de pacotes como npm

### Passos para Instalação
1. No terminal do Vscode rode o comando abaixo:

npx create-next-app@latest nome-do-projeto

Ok to proceed? Y

Select an example: 
Typescript: No
Use ESLint: Yes
Use Tailwind CSS: No
`src/` directory: Yes
use App Router: Yes
use Turbopack: Yes
import alias (`@/*` by default): No


2. Caso clonar o repositório, siga os passos abaixo:

   git clone https://github.com/JuliaMartins25/avaliativa-front.git   
             

3. Instale as dependências:

   npm install

4. Execute o projeto:

   npm run dev

   
## Descrição dos componentes

1. Header: 
    Componente responsável por exibir o cabeçalho da aplicação. Inclui o logotipo, navegação principal e ações do usuário, como login ou acesso ao perfil.


2. HeroSection: 
   Seção de destaque que exibe o "Meme do Dia". Contém título, descrição, autor e estatísticas relacionadas ao meme em destaque.


3. CategoriaSection:
   Lista de categorias de memes, cada uma representada por um ícone e um contador de memes disponíveis.

4. Feed:
    Lista de categorias de memes, cada uma representada por um ícone e um contador de memes disponíveis.

5. MemeCard:
    Card individual que exibe informações de um meme, como título, descrição, autor e botões de interação (curtir, comentar, compartilhar).

6. InteractionBar:
   Barra de interações que acompanha cada meme ou conteúdo. Inclui botões para curtir, comentar, compartilhar e salvar.

7. Sidebar:
   Barra lateral que exibe informações adicionais, como eventos próximos, recursos premium e tags populares.

8. EventCard:
    Card que exibe informações sobre eventos, como título, data, número de participantes e um botão de ação (ex.: "Participar").

9. PremiumCard:
    Componente que promove a assinatura do MemeVerse Premium. Exibe os benefícios exclusivos, como "Sem anúncios", "Uploads ilimitados", "Ferramentas de edição avançadas" e "Estatísticas detalhadas".

10. Tags:
    Componente que exibe uma lista de tags populares relacionadas aos memes. Cada tag pode ser clicada para filtrar o conteúdo exibido com base na tag selecionada.

11. Footer:
    Rodapé da aplicação que contém links de navegação, informações sobre a empresa, recursos adicionais e links para redes sociais.


## Decisões de design tomadas

- O código foi dividido em componentes reutilizáveis para facilitar a manutenção e escalabilidade do projeto.
- Cada componente foi projetado para ter uma responsabilidade clara, como o `Header`, `Footer`, `MemeCard`, entre outros.
- Componentes aninhados foram organizados de forma hierárquica para evitar confusão e melhorar a legibilidade.


## Desafios enfrentados e soluções aplicadas

Foi bem difícil encontrar uma maneira de organizar o código em componentes, pois havia muitos componentes dentro de outros componentes, o que tornou a organização bastante complicada. Além disso, utilizei toda a aula para criar esses componentes. Não foi algo sem solução, porém perdi todo o tempo neles e não consegui implementar as props durante a aula, o que foi um grande desafio. Mesmo tendo outra aula sobre props, ainda preciso da ajuda do professor para me explicar diretamente como utilizá-las, pois, com muitos componentes, o número de props aumenta ainda mais, e não consegui encontrar uma solução para finalizá-las.