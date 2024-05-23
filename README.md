# BatalhaNaval

Link da aplicação: https://antonyharo.github.io/BatalhaNaval/

### Classe Matriz: 
Responsável por controlar a formação dinâmica de elementos dentro do jogo.
#### Métodos:
- **_constructor()_**: Inicializa uma nova instância da matriz de jogo com um tamanho específico, quantidade de navios e quantidade de bombas.
- **_criarMatrizVazia()_**: Cria uma matriz vazia preenchida com zeros.
- **_criaNavio()_**: Coloca um navio na matriz de jogo, garantindo que não haja sobreposição com outros navios ou elementos.
- **_adicionarElemento()_**: Adiciona elementos aleatoriamente à matriz de jogo.
- **_adicionarElementos()_**: Adiciona navios, bombas e dois escudos à matriz de jogo usando as funções anteriormente definidas.
- **_identificarCelula()_**: Identifica o tipo de célula com base no seu valor na matriz e a converte em uma string.
- **_gerarArrayStrings()_**: Converte a matriz de jogo em uma matriz de strings representando os tipos de células utilizando a função anterior.

### Classe Tabuleiro: 
Responsável por gerar e manipular elementos HTML do tabuleiro.
#### Métodos:
- **_constructor()_**: Inicializa uma nova instância do tabuleiro de jogo com base em uma matriz de strings.
- **_criarElemento()_**: Cria um elemento HTML com uma classe específica.
- **_criarCard()_**: Cria um "cartão" (representando uma célula do jogo) com duas faces, uma virada para baixo e outra para cima.
- **_isNavioHorizontal()_**: Verifica se um navio está posicionado horizontalmente.
- **_estilizarPontasNavios()_**: Adiciona estilos visuais às extremidades dos navios.
- **_revelarCard()_**: Manipula o evento de clique em um cartão, revelando seu conteúdo.
- **_mostrarCard()_**: Mostra um cartão específico no tabuleiro.
- **_revelarTabuleiro()_**: Revela todas as células do tabuleiro.
- **_abrirCelulasProximasNavio()_**: Revela as células vizinhas de um navio derrubado.
- **_derrubouNavio()_**: Verifica se um navio foi totalmente derrubado.
- **_piscarNavioDerrubado()_**: Faz um navio derrubado piscar para indicar sua destruição.
- **_revelarBombasTemporariamente()_**: Revela temporariamente a localização das bombas no tabuleiro.
- **_adicionarIndices()_**: Adiciona números de linha e coluna ao tabuleiro para orientação do jogador.
- **_carregarJogo()_**: Carrega o jogo, criando os elementos HTML para representar o tabuleiro e seus elementos.
  
### Classe Jogador:
Responsável por controlar as ações e atributos do jogador.
#### Métodos:
- **_constructor()_**: Inicializa um novo jogador com uma quantidade específica de vidas.
- **_clicou()_**: Manipula a ação do jogador ao clicar em uma célula do jogo.
- **_clicouBomba()_**: Executa as ações necessárias quando o jogador clica em uma célula com uma bomba.
- **_clicouNavio()_**: Executa as ações necessárias quando o jogador clica em uma célula com um navio.
- **_tocarMusica()_**: Toca um efeito sonoro específico com base na ação do jogador.
- **_tocarMusicaFundo()_**: Toca a música de fundo do jogo.
  
### Classe Interface:
Responsável por manipular estruturas HTML da interface do jogador.
#### Métodos:
- **_constructor()_**: Inicializa a interface do jogo, carregando elementos como vidas e temporizador.
- **_carregarVidas()_**: Adiciona visualmente as vidas do jogador à interface.
- **_retirarVida()_**: Atualiza visualmente as vidas do jogador quando uma vida é perdida.
- **_instanciarTempo()_**: Inicia ou para o temporizador do jogo e exibe o tempo decorrido.
