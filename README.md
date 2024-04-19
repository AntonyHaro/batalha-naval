# Batalha-Naval

### Classe Matriz: 
Responsável por controlar a formação dinâmica de elementos dentro do jogo.
- constructor: Inicializa uma nova instância da matriz de jogo com um tamanho específico, quantidade de navios e quantidade de bombas.
- criarMatrizVazia: Cria uma matriz vazia preenchida com zeros.
- criaNavio: Coloca um navio na matriz de jogo, garantindo que não haja sobreposição com outros navios.
- adicionarElemento: Adiciona elementos (navios ou bombas) aleatoriamente à matriz de jogo.
- adicionarElementos: Adiciona navios e bombas à matriz de jogo usando as funções anteriormente definidas.
- identificarCelula: Identifica o tipo de célula com base no seu valor na matriz.
- gerarArrayStrings: Converte a matriz de jogo em uma matriz de strings representando os tipos de células.

Classe Tabuleiro: Responsável por gerar e manipular elementos HTML do tabuleiro.
- constructor: Inicializa uma nova instância do tabuleiro de jogo com base em uma matriz de strings.
- criarElemento: Cria um elemento HTML com uma classe específica.
- criarCard: Cria um "cartão" (representando uma célula do jogo) com duas faces, uma virada para baixo e outra para cima.
- isNavioHorizontal: Verifica se um navio está posicionado horizontalmente.
- estilizarPontasNavios: Adiciona estilos visuais às extremidades dos navios.
- revelarCard: Manipula o evento de clique em um cartão, revelando seu conteúdo.
- mostrarCard: Mostra um cartão específico no tabuleiro.
- revelarTabuleiro: Revela todas as células do tabuleiro.
- abrirCelulasProximasNavio: Revela as células vizinhas de um navio derrubado.
- derrubouNavio: Verifica se um navio foi totalmente derrubado.
- piscarNavioDerrubado: Faz um navio derrubado piscar para indicar sua destruição.
- revelarBombasTemporariamente: Revela temporariamente a localização das bombas no tabuleiro.
- adicionarIndices: Adiciona números de linha e coluna ao tabuleiro para orientação do jogador.
- carregarJogo: Carrega o jogo, criando os elementos HTML para representar o tabuleiro e seus elementos.
  
Classe Jogador: Responsável por controlar as ações e atributos do jogador.
- constructor: Inicializa um novo jogador com uma quantidade específica de vidas.
- clicou: Manipula a ação do jogador ao clicar em uma célula do jogo.
- clicouBomba: Executa as ações necessárias quando o jogador clica em uma célula com uma bomba.
- clicouNavio: Executa as ações necessárias quando o jogador clica em uma célula com um navio.
- tocarMusica: Toca um efeito sonoro específico com base na ação do jogador.
- tocarMusicaFundo: Toca a música de fundo do jogo.
  
Interface: Responsável por manipular estruturas HTML da interface do jogador.
- constructor: Inicializa a interface do jogo, carregando elementos como vidas e temporizador.
- carregarVidas: Adiciona visualmente as vidas do jogador à interface.
- retirarVida: Atualiza visualmente as vidas do jogador quando uma vida é perdida.
- instanciarTempo: Inicia ou para o temporizador do jogo e exibe o tempo decorrido.
