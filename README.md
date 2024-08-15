# A Batalha dos Sete Mares

Este é um jogo de Batalha Naval implementado em JavaScript, onde o objetivo é encontrar e destruir todos os navios inimigos antes que suas vidas acabem.

---
## Funcionalidades

- **Matriz de Jogo**: Gera uma matriz onde os navios e bombas são posicionados aleatoriamente.
- **Tabuleiro Interativo**: Permite ao jogador clicar nas células para revelar seu conteúdo (água, navio, etc).
- **Sistema de Vidas e Pontuação**: O jogador perde vidas ao clicar em bombas e ganha pontos ao revelar navios. O jogo termina quando todas as vidas são perdidas ou todos os navios são destruídos.
- **Efeitos Sonoros**: Sons são tocados em eventos específicos como revelar água, bomba ou navio.
- **Temporizador de Jogo**: Conta o tempo de jogo e impacata na pontuação final do jogador.
- **Interface Dinâmica**: Atualiza em tempo real as vidas restantes, pontuação e estados de vitória/derrota.

---
## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES6+

---
## Como Jogar

1. Abra o seguinte link no seu navegador: https://antonyharo.github.io/batalha-naval/
   
2. Insira seu nome de jogador quando solicitado.

3. Clique nas células do tabuleiro para revelar o conteúdo e tentar encontrar todos os navios.

---
## Regras do Jogo

- **Navios**: São posicionados aleatoriamente e podem ocupar várias células consecutivas, na horizontal ou vertical.
- **Bombas**: Se clicadas, reduzem o número de vidas do jogador.
- **Escudos**: Revelam temporariamente todas as bombas no tabuleiro.
- **Água**: Não afeta a pontuação ou as vidas do jogador.
- **Vencer**: O jogo é vencido ao revelar todas as partes dos navios.
- **Perder**: O jogo é perdido ao acabar todas as vidas.

---
## Estrutura do Código

### Matriz
Classe responsável por criar e gerenciar a matriz do jogo, posicionar navios, bombas e escudos.

### Tabuleiro
Classe que controla a interface do jogo, renderiza o tabuleiro e lida com as interações do jogador.

### Jogador
Classe que gerencia o estado do jogador, incluindo vidas, pontuação e ações ao clicar nas células.

### Interface
Classe responsável pela atualização da interface do jogo, incluindo o painel de vidas, temporizador e pontuação final.

---
## Personalização

- **Alterar Tamanho da Matriz**: Modifique o parâmetro `tamanho` na instância da classe `Matriz` no arquivo principal.
- **Ajustar Quantidade de Navios e Bombas**: Modifique os parâmetros `quantidadeNavios` e `quantidadeBombas` na instância da classe `Matriz`.

---
## Agradecimentos

Obrigado por jogar Batalha Naval! Sinta-se à vontade para contribuir e melhorar o jogo.

---
**Divirta-se e boa sorte na batalha! ☠️🏴‍☠️**
