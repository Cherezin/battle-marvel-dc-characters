# Superheroes and Villains Battle Application

![marvel-dc](https://github.com/user-attachments/assets/8a40204f-f99a-4f84-b54d-cdaa84834815)

## 📖 Descrição

Esta aplicação permite aos usuários selecionar personagens de heróis e vilões da DC e da Marvel para batalhas. Cada personagem possui informações detalhadas acessíveis por meio de modais. O usuário pode filtrar personagens por nome, universo (Marvel/DC), gênero (homens/mulheres), classificação (heróis/vilões) e palavras-chave associadas a cada personagem.

## 🎯 Motivação

Originalmente, este projeto foi criado para um desafio de estágio, mas acabei gostando da ideia e resolvi acrescentar algumas funcionalidades e estilos adicionais para praticar as tecnologias React e TypeScript.

## 🚀 Funcionalidades

- **Seleção e Deseleção de Personagens:** Selecione os personagens que irão batalhar e desfaça a seleção quando necessário.
- **Modais de Informação:** Cada personagem possui um modal com informações detalhadas.
- **Filtros:** Filtre personagens pelo campo de busca ou pelos filtros rápidos:
  - Universo: Marvel ou DC
  - Gênero: Homens ou Mulheres
  - Classificação: Heróis ou Vilões
  - Palavras-chave: Filtro baseado em tags associadas a cada personagem
- **Regras/Avisos:**
  - Aviso ao não selecionar personagens suficientes para a batalha.
  - Mensagem de "nenhum personagem encontrado" quando a busca não retorna resultados.

## 🛠️ Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Tailwind CSS**

 ## 💾 Instalação

1. Clone o repositório:
  ```bash
  git clone https://github.com/Cherezin/battle-marvel-dc-characters.git
  ```
   
2. Navegue até o diretório do projeto:
  ```bash
  cd battle-marvel-dc-characters
  ```

3. Instale as dependências:
  ```bash
  npm install
  ```

4. Inicie a aplicação:
  ```bash
  npm run dev
  ```

A aplicação estará disponível em http://localhost:5173/.

## 🕹️ Uso

1. Selecione personagens clicando em seus cartões.
2. Utilize os filtros para encontrar personagens específicos.
3. Clique nos personagens selecionados para visualizar informações detalhadas.
4. Inicie a batalha para ver o resultado baseado nos personagens escolhidos.

## 🗂️ Estrutura do Projeto

- `public/img/`: Diretório contendo as imagens dos personagens em formato `.webp`.
- `src/data/characters.json`: Arquivo JSON contendo todas as informações dos personagens.
