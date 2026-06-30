// ======================
// RESOLUÇÃO BASE
// ======================
const LARGURA_BASE = 800;
const ALTURA_BASE = 400;

let escala = 1;
// ======================
// ESTADOS
// ======================
let estado = "menu";
let modo = "";

// ======================
// IMAGENS (DUAS VERSÕES)
// ======================
let imgArbustoBW, imgArbustoColor;
let imgPeixeBW, imgPeixeColor;
let imgCoralBW, imgCoralColor;
let imgMacaBW, imgMacaColor;
let imgSolBW, imgSolColor;
let imgNuvemBW, imgNuvemColor;
let imgPlantaBW, imgPlantaColor;
let imgAlgaBW, imgAlgaColor;
let imgAnzolBW, imgAnzolColor;
let imgSolpraiaBW, imgSolpraiaColor;
let imgCasteloBW, imgCasteloColor;
let imgCaranguejoBW, imgCaranguejoColor;
let imgGuardasolBW, imgGuardasolColor;
let imgBaldeepaBW, imgBaldeepaColor;
let imgLuaBW, imgLuaColor;
let imgEstrelaBW, imgEstrelaColor;
let imgIgluBW1, imgIgluColor1;
let imgIgluBW2, imgIgluColor2;
let imgBengalaBW, imgBengalaColor;
let imgBonecoBW, imgBonecoColor;
let imgSolsertaoBW, imgSolsertaoColor;
let imgMorroBW, imgMorroColor;
let imgCactoBW, imgCactoColor;
let imgArbustosecoBW, imgArbustosecoColor;
let imgLagartoBW, imgLagartoColor;
let imgPedraBW, imgPedraColor;
let imgEstalagmiteBW, imgEstalagmiteColor;
let imgCristalpequenoazulBW, imgCristalpequenoazulColor;
let imgCristalpequenovermelhoBW, imgCristalpequenovermelhoColor;
let imgCristalpequenoroxoBW, imgCristalpequenoroxoColor;
let imgCristalgrandeazulBW, imgCristalgrandeazulColor;
let imgCristalgrandevermelhoBW, imgCristalgrandevermelhoColor;
let imgCristalgranderoxoBW, imgCristalgranderoxoColor;
let imgMorcegoBW, imgMorcegoColor;
let imgMorcegodormindoBW, imgMorcegodormindoColor;
let imgCarrinhoBW, imgCarrinhoColor;
let imgRosaBW, imgRosaColor;
let imgJoaninhaBW, imgJoaninhaColor;
let imgBorboletaBW, imgBorboletaColor;
let imgCogumeloBW, imgCogumeloColor;
let imgAbelhaBW, imgAbelhaColor;
let fundofinal; let fundobw;


// ======================
// CORES
// ======================
const CORES = {
 // red: [217, 41, 46],
  //orange: [254, 146, 55],
 // yellow: [246, 195, 57],
  //green: [157, 205, 75],
  ///blue: [114, 196, 225],
  //indigo: [0, 111, 178],
  //violet: [132, 56, 141]
  red:    [245, 158, 158], // Vermelho pastel
  orange: [255, 191, 143], // Laranja pastel
  yellow: [255, 255, 163], // Amarelo pastel
  green:  [173, 222, 160], // Verde pastel
  blue:   [197, 229, 255], // Azul pastel
  indigo: [114, 173, 232], // Anil pastel
  violet: [196, 144, 203]  // Roxo pastel
};

const ORDEM_CORES = ["red","orange","yellow","green","blue","indigo","violet"];
let coresDesbloqueadas = [];

// ======================
let camada2 = [];
let camada3 = [];

let fases = [];
let fasesRestantes = [];
let faseAtual;

let player;
let obstaculos = [];
let orbe;


let gravidade = 1;
let ultimoSpawn = 0;
let distanciaMin = 180;

let tempoFase = 0;
let tempoOrbe = 1800;
let orbeColetada = false;
let tempoPosOrbe = 0;
let tempoTransicao = 1300;

let mostrarMensagemCor = false;
let tempoMensagemCor = 0;
let duracaoMensagemCor = 240;

let mostrarMensagemFase = true;
let tempoMensagemFase = 0;
let duracaoMensagemFase = 300;

let mostrarTutorial = true;
let tempoTutorial = 0;
let duracaoTutorial = 600;

let tutorialJaMostrado = false;

let fonteTitulo;
let fonteTexto;
let fonteBotoes;

let somPulo;
let somOrbe;
let somBatida;


// ======================
// PRELOAD
// ======================
function preload() {

// FONTES

  fonteTitulo = loadFont("Flavors-Regular.ttf");
  fonteTexto = loadFont("Nunito-Regular.ttf");
  fonteBotoes = loadFont("Baloo-Regular.ttf");
  fonteFases = loadFont("Nunito-ExtraBold.ttf");
  fonteGameover = loadFont("Nunito-ExtraBold.ttf");
// IMAGENS
{
  imgArbustoBW    = loadImage("arbustobw.png");
  imgArbustoColor = loadImage("arbustocolor.png");

  imgPeixeBW    = loadImage("peixebw.png");
  imgPeixeColor = loadImage("peixecolor.png");

  imgCoralBW    = loadImage("coralbw.png");
  imgCoralColor = loadImage("coralcolor.png");

  imgMacaBW     = loadImage("macabw.png")
  imgMacaColor  = loadImage("macacolor.png")

  imgSolBW = loadImage("solbw.png");
  imgSolColor = loadImage("solcolor.png");
  
  imgNuvemBW = loadImage("nuvembw.png");
  imgNuvemColor = loadImage("nuvemcolor.png");
  
  imgPlantaBW    = loadImage("plantabw.png");
  imgPlantaColor = loadImage("plantacolor.png");
  
  imgAlgaBW    = loadImage("algabw.png");
  imgAlgaColor = loadImage("algacolor.png");
  
  imgAnzolBW    = loadImage("anzolbw.png");
  imgAnzolColor = loadImage("anzolcolor.png");

  imgSolpraiaBW = loadImage("solpraiabw.png");
  imgSolpraiaColor = loadImage("solpraiacolor.png");

  imgCasteloBW = loadImage("castelobw.png");
  imgCasteloColor = loadImage("castelocolor.png");
  
  imgCaranguejoBW = loadImage("caranguejobw.png");
  imgCaranguejoColor = loadImage("caranguejocolor.png");
  
  imgGuardasolBW = loadImage("guardasolbw.png");
  imgGuardasolColor = loadImage("guardasolcolor.png");
  
  imgBaldeepaBW = loadImage("baldeepabw.png");
  imgBaldeepaColor = loadImage("baldeepacolor.png");
  
  imgLuaBW = loadImage("luabw.png");
  imgLuaColor = loadImage("luacolor.png");
  
  imgEstrelaBW = loadImage("estrelabw.png");
  imgEstrelaColor = loadImage("estrelacolor.png");
  
  imgIgluBW1 = loadImage("iglubw1.png");
  imgIgluColor1 = loadImage("iglucolor1.png");
  
  imgIgluBW2 = loadImage("iglubw2.png");
  imgIgluColor2 = loadImage("iglucolor2.png");
  
  imgBengalaBW = loadImage("bengalabw.png");
  imgBengalaColor = loadImage("bengalacolor.png");
  
  imgBonecoBW = loadImage("bonecobw.png");
  imgBonecoColor = loadImage("bonecocolor.png");
  
  imgPinguimBW = loadImage("pinguimbw.png");
  imgPinguimColor = loadImage("pinguimcolor.png");
  
  imgMorroBW = loadImage("morrobw.png");
  imgMorroColor = loadImage("morrocolor.png");
  
  imgSolsertaoBW = loadImage("solsertaobw.png");
  imgSolsertaoColor = loadImage("solsertaocolor.png");
  
  imgArbustosecoBW = loadImage("arbustosecobw.png");
  imgArbustosecoColor = loadImage("arbustosecocolor.png");
  
  imgCactoBW = loadImage("cactobw.png");
  imgCactoColor = loadImage("cactocolor.png");
  
  imgLagartoBW = loadImage("lagartobw.png");
  imgLagartoColor = loadImage("lagartocolor.png");
  
  imgPedraBW = loadImage("pedrabw.png");
  imgPedraColor = loadImage("pedracolor.png");

  imgEstalagmiteBW = loadImage("estalagmitebw.png");
  imgEstalagmiteColor = loadImage("estalagmitecolor.png");

  imgCristalpequenoazulBW = loadImage("cristalpequenoazulbw.png");
  imgCristalpequenoazulColor = loadImage("cristalpequenoazulcolor.png");

  imgCristalpequenovermelhoBW = loadImage("cristalpequenovermelhobw.png");
  imgCristalpequenovermelhoColor = loadImage("cristalpequenovermelhocolor.png");

  imgCristalpequenoroxoBW = loadImage("cristalpequenoroxobw.png");
  imgCristalpequenoroxoColor = loadImage("cristalpequenoroxocolor.png");

  imgCristalgrandeazulBW = loadImage("cristalgrandeazulbw.png");
  imgCristalgrandeazulColor = loadImage("cristalgrandeazulcolor.png");

  imgCristalgrandevermelhoBW = loadImage("cristalgrandevermelhobw.png");
  imgCristalgrandevermelhoColor = loadImage("cristalgrandevermelhocolor.png");

  imgCristalgranderoxoBW = loadImage("cristalgranderoxobw.png");
  imgCristalgranderoxoColor = loadImage("cristalgranderoxocolor.png");

  imgMorcegoBW = loadImage("morcegobw.png");
  imgMorcegoColor = loadImage("morcegocolor.png");

  imgMorcegodormindoBW = loadImage("morcegodormindobw.png");
  imgMorcegodormindoColor = loadImage("morcegodormindocolor.png");

  imgCarrinhoBW = loadImage("carrinhobw.png");
  imgCarrinhoColor = loadImage("carrinhocolor.png");

  imgRosaBW = loadImage("rosabw.png");
  imgRosaColor = loadImage("rosacolor.png");

  imgJoaninhaBW = loadImage("joaninhabw.png");
  imgJoaninhaColor = loadImage("joaninhacolor.png");

  imgBorboletaBW = loadImage("borboletabw.png");
  imgBorboletaColor = loadImage("borboletacolor.png");

  imgAbelhaBW = loadImage("abelhabw.png");
  imgAbelhaColor = loadImage("abelhacolor.png");

  imgCogumeloBW = loadImage("cogumelobw.png");
  imgCogumeloColor = loadImage("cogumelocolor.png");

  imgfundofinal = loadImage("fundofinal.png")
  imgfundobw = loadImage("fundobw.png")

//Sons
  somPulo = loadSound("pulo.mp3");
  somOrbe = loadSound("orbe.mp3");
  somBatida = loadSound("batida.mp3");

}
}
// ======================
function setup() {

  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);
  textAlign(CENTER, CENTER);

  atualizarEscala();

  iniciarFases();
}

function atualizarEscala() {

  escala = min(
    windowWidth / LARGURA_BASE,
    windowHeight / ALTURA_BASE
  );
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

  atualizarEscala();
}

function draw() {

  background(255);

  push();

  translate(
    (width - LARGURA_BASE * escala) / 2,
    (height - ALTURA_BASE * escala) / 2
  );

  scale(escala);

if (estado === "menu") {
  desenharMenu();
}

if (estado === "introducao") {
  desenharIntroducao();
}

if (estado === "jogando") {
  rodarJogo();
}

if (estado === "gameover") {
  desenharGameOver();
}

  if (estado === "final") {
  desenharFinal();
}

  pop();
}

function desenharBolinha(x, y, raio, angulo, cores) {

  push();

  translate(x, y);
  rotate(angulo);

  let ang = TWO_PI / 7;

  for (let i = 0; i < 7; i++) {

    let cor = ORDEM_CORES[i];

    fill(
      cores.includes(cor)
        ? corRGB(cor)
        : color(0)
    );

    arc(
      0,
      0,
      raio * 2,
      raio * 2,
      i * ang,
      (i + 1) * ang
    );
  }

  pop();
}


function tituloColorido(texto, x, y) {

  let cores = [
    color(255, 179, 186), // vermelho pastel
    color(255, 214, 165), // laranja pastel
    color(255, 255, 173), // amarelo pastel
    color(181, 234, 170), // verde pastel
    color(207, 239, 255), // azul pastel
    color(124, 183, 232), // anil pastel
    color(196, 154, 203)  // roxo pastel
  ];

  textAlign(CENTER, CENTER);

  let larguraTotal = textWidth(texto);
  let inicio = x - larguraTotal / 2;

  let posX = inicio;

  for (let i = 0; i < texto.length; i++) {

    fill(cores[i % cores.length]);

    let letra = texto.charAt(i);
    text(letra, posX + textWidth(letra) / 2, y);

    posX += textWidth(letra);
  }
}

// ======================
// MENU
// ======================
function desenharMenu() {

background(255, 248, 235);

  image(imgfundofinal,LARGURA_BASE/2, ALTURA_BASE/2, 800, 400)
  desenharBolinha(
  LARGURA_BASE * 0.50,
  ALTURA_BASE-300,
  45,
  frameCount * 0.07,
  ORDEM_CORES
);

/*
// Elementos inferiores
image(imgArbustoColor,      LARGURA_BASE * 0.30, ALTURA_BASE - 50, 100, 100);
image(imgArbustosecoColor,  LARGURA_BASE * 0.20, ALTURA_BASE - 155, 110, 110);
image(imgPeixeColor,        LARGURA_BASE * 0.10, ALTURA_BASE - 200, 100, 100);
image(imgCaranguejoColor,   LARGURA_BASE * 0.69, ALTURA_BASE - 40, 100, 100);
image(imgCasteloColor,      LARGURA_BASE * 0.80, ALTURA_BASE - 140, 100, 100);
image(imgGuardasolColor,    LARGURA_BASE * 0.925, ALTURA_BASE - 200, 100, 100);

*/
stroke(50);
strokeWeight(0.5);  
 textFont(fonteTitulo);
textSize(75);

tituloColorido(
  "Bolinha      Colorida",
  LARGURA_BASE / 2 +18,
  80
);

  // BOTÃO COLORIDO
  fill(220);
  rect(300, 185, 200, 50, 10);

  textFont(fonteBotoes);
  fill(0);
  textSize(30);
  text("Começar", 400, 205);
  
  
}

function desenharIntroducao() {

  image(imgfundobw,LARGURA_BASE/2, ALTURA_BASE/2, 800, 400)
  // background(100);
  
  // fill(0);

// desenharBolinha(
//   LARGURA_BASE * 0.50,
//   ALTURA_BASE-300,
//   45,
//   frameCount * 0.07,
// []
// );


/*// Elementos inferiores
image(imgArbustoBW,      LARGURA_BASE * 0.30, ALTURA_BASE - 50, 100, 100);
image(imgArbustosecoBW,  LARGURA_BASE * 0.20, ALTURA_BASE - 155, 110, 110);
image(imgPeixeBW,        LARGURA_BASE * 0.10, ALTURA_BASE - 200, 100, 100);
image(imgCaranguejoBW,   LARGURA_BASE * 0.69, ALTURA_BASE - 40, 100, 100);
image(imgCasteloBW,      LARGURA_BASE * 0.80, ALTURA_BASE - 140, 100, 100);
image(imgGuardasolBW,    LARGURA_BASE * 0.925, ALTURA_BASE - 200, 100, 100); */
/*
  // Elementos inferiores
image(imgArbustoBW,      LARGURA_BASE * 0.30, ALTURA_BASE - 50, 100, 100);
image(imgArbustosecoBW,  LARGURA_BASE * 0.20, ALTURA_BASE - 67, 110, 110);
image(imgPeixeBW,        LARGURA_BASE * 0.10, ALTURA_BASE - 50, 100, 100);
image(imgCaranguejoBW,   LARGURA_BASE * 0.69, ALTURA_BASE - 40, 100, 100);
image(imgCasteloBW,      LARGURA_BASE * 0.80, ALTURA_BASE - 50, 100, 100);
image(imgGuardasolBW,    LARGURA_BASE * 0.925, ALTURA_BASE - 60, 100, 100);*/
  fill(255);
  textFont(fonteTexto);
  textSize(44);
  text(
    "O mundo perdeu as cores!",
    LARGURA_BASE / 2,
    115
  );

  textFont(fonteTexto);
  textSize(30);
  text(
    "Precisamos da sua ajuda\npara recuperá-las!",
    LARGURA_BASE / 2,
    200
  );

  // botão

  fill(220);
  rect(275, 270, 250, 60, 10);

  textFont(fonteBotoes);
  fill(0);
  textSize(29);
  text(
    "Vamos lá!",
    LARGURA_BASE / 2,
    295
  );
}

function desenharGameOver() {

  image(imgfundobw,LARGURA_BASE/2, ALTURA_BASE/2, 800, 400)

  fill(255, 179, 186);
  textSize(50);
  textFont(fonteGameover);
  text("GAME OVER", LARGURA_BASE/2, 100);

  // RECOMEÇAR
  fill(150);
  rect(250, 180, 300, 50, 10);

  fill(255);
  textSize(26);
  textFont(fonteBotoes);
  text("Recomeçar Fase", 400, 200);

  // MENU
  fill(150);
  rect(250, 250, 300, 50, 10);

  fill(255);
  textFont(fonteBotoes);
  text("Retornar ao Menu", 400, 270);
}

function desenharFinal() {

  background(255, 248, 235);

  image(imgfundofinal,LARGURA_BASE/2, ALTURA_BASE/2, 800, 400)

  /* Bolinha completa girando
  desenharBolinha(
    LARGURA_BASE / 2,
    90,
    50,
    frameCount * 0.05,
    ORDEM_CORES
  );
*/
  fill(255);

  textFont(fonteTitulo);
  textSize(60);
  text("PARABÉNS!", LARGURA_BASE / 2, 140);

  fill(0);
  textFont(fonteTexto);
  textSize(30);
  text(
    "Todas as cores foram recuperadas!",
    LARGURA_BASE / 2,
    210
  );

  textSize(24);
  text(
    "Obrigado por nos ajudar a colorir o mundo!",
    LARGURA_BASE / 2,
    260
  );

  // Botão voltar ao menu
  fill(220);
  rect(300, 330, 200, 45, 10);

  fill(0);
  textFont(fonteBotoes);
  textSize(22);
  text("Voltar ao Menu", 400, 352);
}

function verificarCliqueMenu() {

  let mx = (mouseX - (width - LARGURA_BASE * escala)/2) / escala;
  let my = (mouseY - (height - ALTURA_BASE * escala)/2) / escala;

  // HISTÓRIA
  if (
     mx > 300 &&
  mx < 500 &&
  my > 185 &&
  my < 235
  ) {
    iniciarJogo("historia");
  }

  // COLORIDO
  if (
    mx > 9000 &&
    mx < 9000 &&
    my > 9000 &&
    my < 9000
  ) {
    iniciarJogo("colorido");
  }
}

function verificarCliqueIntroducao() {

  let mx =
    (mouseX - (width - LARGURA_BASE * escala) / 2) / escala;

  let my =
    (mouseY - (height - ALTURA_BASE * escala) / 2) / escala;

  if (
    mx > 275 &&
    mx < 525 &&
    my > 270 &&
    my < 330
  ) {

    proximaFase();
    estado = "jogando";

  }
}

function verificarCliqueGameOver() {

  let mx = (mouseX - (width - LARGURA_BASE * escala)/2) / escala;
  let my = (mouseY - (height - ALTURA_BASE * escala)/2) / escala;

  // RECOMEÇAR
  if (
    mx > 250 &&
    mx < 550 &&
    my > 180 &&
    my < 230
  ) {
    reiniciarFase();
  }

  // MENU
  if (
    mx > 250 &&
    mx < 550 &&
    my > 250 &&
    my < 300
  ) {
    estado = "menu";
  }
}

function iniciarJogo(tipo) {

  modo = tipo;

  player = new Player();
  obstaculos = [];
  camada2 = [];
  camada3 = [];

  orbeColetada = false;
  tempoPosOrbe = 0;
tutorialJaMostrado = false;

  coresDesbloqueadas =
    modo === "colorido"
      ? [...ORDEM_CORES]
      : [];

  fasesRestantes = shuffle([...fases]);

  // História mostra introdução
  if (modo === "historia") {

    estado = "introducao";

  } else {

    proximaFase();
    estado = "jogando";

  }
}

// ======================
// FASES
// ======================
function iniciarFases() {
  fases = [
    {
      nome: "Planícies Verdejantes",
      cor: "green",
      tipo: "planicie"
    },
    {
      nome: "Fundo do Mar",
      cor: "indigo",
      tipo: "mar"
    },
    {
      nome: "Praia Ensolarada",
      cor: "yellow",
      tipo: "praia"
    },
    {
      nome: "Terras Congeladas",
      cor: "blue",
      tipo: "gelo"
    },
    {
      nome: "Sertão Ardente",
      cor: "orange",
      tipo: "cacto"
    },
    {
      nome: "Caverna de Cristal",
      cor: "violet",
      tipo: "cristal"
    },
    {
      nome: "Campo de Rosas",
      cor: "red",
      tipo: "rosas"
    }
  ];
}

function proximaFase() {

  if (fasesRestantes.length === 0) {
    estado = "final";
    return;
  }

  faseAtual = fasesRestantes.pop();

  obstaculos = [];
 camada2 = [];
  camada3 = [];

  ultimoSpawn = 0;
  tempoFase = 0;

  // Reinicia o estado da orbe
  orbeColetada = false;
  tempoPosOrbe = 0;

  orbe = new Orbe(faseAtual.cor);

// Reinicia mensagem da fase
mostrarMensagemFase = true;
tempoMensagemFase = 0;

// Tutorial apenas na primeira fase
if (!tutorialJaMostrado) {

  mostrarTutorial = true;
  tempoTutorial = 0;

  tutorialJaMostrado = true;

} else {

  mostrarTutorial = false;

}
}

function reiniciarFase() {
  player = new Player();

  obstaculos = [];
  camada2 = [];
  camada3 = [];

  ultimoSpawn = 0;
  ultimoParallax2 = 0;
  ultimoParallax3 = 0;

 tempoFase = 0;

// Reinicia a lógica da orbe
orbeColetada = false;
tempoPosOrbe = 0;

orbe = new Orbe(faseAtual.cor);

estado = "jogando";
}

// ======================
// DISTÂNCIAS
// ======================
let ultimoParallax2 = 0;
let ultimoParallax3 = 0;

let distanciaParallax2 = 120;
let distanciaParallax3 = 180;

let distanciaObstaculo = 180;

// ======================

// SAVE DA FASE
// ======================
let indiceFaseAtual = 0;
// ======================

// JOGO
// ======================
function rodarJogo() {
  tempoFase++;

  desenharFundo();

  spawnParallax();
  atualizarCamadas();

  spawnObstaculos();

  player.update();
  player.show();

  atualizarObstaculos();

  // ======================
  // ORBE
  // ======================
 // Orbe só aparece após um tempo
if (tempoFase >= tempoOrbe && !orbeColetada) {

  orbe.update();
  orbe.show();

if (orbe.coletado(player)) {

  somOrbe.play();

    orbeColetada = true;

    if (!coresDesbloqueadas.includes(faseAtual.cor)) {
      coresDesbloqueadas.push(faseAtual.cor);
    }

    // Exibe a mensagem
    mostrarMensagemCor = true;
    tempoMensagemCor = 0;
}

  // caso o jogador deixe passar
  if (orbe.x < -50) {
    orbe = new Orbe(faseAtual.cor);
  }
}

// Após pegar a orbe, continua jogando
if (orbeColetada) {

  tempoPosOrbe++;

  if (tempoPosOrbe >= tempoTransicao) {
    proximaFase();
  }

}


mostrarHUD();

mostrarNomeDaFase();
mostrarTutorialJogo();

mostrarMensagemDaCor();
mostrarContagemTransicao();
}

// ======================
// FUNDO
// ======================
function desenharFundo() {

  // PLANÍCIES VERDEJANTES
  if (faseAtual.tipo === "planicie") {

    // CÉU
    fill(condicional("blue"));
    rect(0, 0, LARGURA_BASE, ALTURA_BASE);

    // CHÃO
    fill(condicional("green"));
    rect(
      0,
      ALTURA_BASE * 2.2/5,
      LARGURA_BASE,
      ALTURA_BASE * 2.8/5
    );

  // SOL E NUVENS

    let imgSol = escolherImagem(
      imgSolBW,
      imgSolColor,
      "yellow"
    );

    image(imgSol, 720, 70, 140, 194);

    let imgNuvem = escolherImagem(
      imgNuvemBW,
      imgNuvemColor,
      "indigo"
      );

    image(imgNuvem, 180, 80, 120, 70);
    image(imgNuvem, 380, 60, 140, 80);
    image(imgNuvem, 560, 110, 110, 65);
  
  }

  // FUNDO DO MAR
  else if(faseAtual.tipo === "mar") {

    // PAREDE
    fill(condicional("blue"));
    rect(0, 0, LARGURA_BASE, ALTURA_BASE);

    // CHÃO
    fill(condicional("indigo"));
    rect(
      0,
      ALTURA_BASE * 1.5/5,
      LARGURA_BASE,
      ALTURA_BASE * 3.5/5
    );

    // ANZOL
    let imgAnzol = escolherImagem(
      imgAnzolBW,
      imgAnzolColor,
      "blue"
      );
    
    image(imgAnzol, 180,30,80,80)
    image(imgAnzol, 540,30,80,80)
  }

  // PRAIA ENSOLARADA
  else if(faseAtual.tipo === "praia") {
    
  // CÉU
    fill(condicional("blue"));
    rect(0, 0, LARGURA_BASE, ALTURA_BASE);

    // CHÃO
    fill(condicional("yellow"));
    rect(
      0,
      ALTURA_BASE * 2.2/5,
      LARGURA_BASE,
      ALTURA_BASE * 2.8/5
    ); 
    
    // SOL DA PRAIA E NUVENS

    let imgSolpraia = escolherImagem(
      imgSolpraiaBW,
      imgSolpraiaColor,
      "yellow"
    );

    image(imgSolpraia, 720, 70, 140, 194);

    let imgNuvem = escolherImagem(
      imgNuvemBW,
      imgNuvemColor,
      "blue"
      );

    image(imgNuvem, 90, 80, 120, 70);
    image(imgNuvem, 240, 60, 140, 80);
    image(imgNuvem, 560, 110, 110, 65);
  
  } 
  
  // TERRAS CONGELADAS
  else if(faseAtual.tipo === "gelo") {
    
  // CÉU
    fill(condicional("indigo"));
    rect(0, 0, LARGURA_BASE, ALTURA_BASE);

    // CHÃO
    fill(condicional("blue"));
    rect(
      0,
      ALTURA_BASE * 2.2/5,
      LARGURA_BASE,
      ALTURA_BASE * 2.8/5
    ); 
    
    // LUA
    let imgLua = escolherImagem(
      imgLuaBW,
      imgLuaColor,
      "blue"
    );

    image(imgLua, 740, 70, 85, 97);
    
    // ESTRELAS
        let imgEstrela = escolherImagem(
      imgEstrelaBW,
      imgEstrelaColor,
      "yellow"
    );
    
    image(imgEstrela, 200, 50, 20 , 20);
    image(imgEstrela, 400, 70, 20 , 20);
    image(imgEstrela, 600, 50, 20 , 20);
    image(imgEstrela, 100, 30, 40 , 40);
    image(imgEstrela, 300, 60, 40 , 40);
    image(imgEstrela, 500, 20, 30 , 30);
    image(imgEstrela, 600, 150, 30 , 30);
    image(imgEstrela, 650, 20, 35 , 35);
    image(imgEstrela, 100, 80, 30 , 30);
    
    
    // IGLU
      let imgIglu1 = escolherImagem(
      imgIgluBW1,
      imgIgluColor1,
      "blue"
      );
    
    image(imgIglu1,500, 145 , 130, 120);
    
    let imgIglu2 = escolherImagem(
      imgIgluBW2,
      imgIgluColor2,
      "blue"
      );
    
    image(imgIglu2,250, 145 , 130, 120);
  }
  // SERTÃO ARDENTE
  
   else if (faseAtual.tipo === "cacto") {
  // CÉU
    fill(condicional("orange"));
    rect(0, 0, LARGURA_BASE, ALTURA_BASE);

    // CHÃO
    fill(condicional("yellow"));
    rect(
      0,
      ALTURA_BASE * 2.2/5,
      LARGURA_BASE,
      ALTURA_BASE * 2.8/5
      );
    // SOL DO SERTÃO
    let imgSolsertao = escolherImagem(
      imgSolsertaoBW,
      imgSolsertaoColor,
      "yellow"
    );

    image(imgSolsertao, 680, 80, 140, 194);
     
     let imgMorro = escolherImagem(
     imgMorroBW,
     imgMorroColor,
     "yellow"
     );
     
     image(imgMorro, 150, 105 , 300, 150);
     image(imgMorro, 400, 105 , 300, 150);
   
   }
  else if (faseAtual.tipo === "cristal") {
  // Parede
    fill(0);
    rect(0, 0, LARGURA_BASE, ALTURA_BASE);

    // CHÃO
    fill(condicional("violet"));
    rect(
      0,
      ALTURA_BASE * 2.2/5,
      LARGURA_BASE,
      ALTURA_BASE * 2.8/5
      );

    let imgEstalagmite = escolherImagem(
      imgEstalagmiteBW,
      imgEstalagmiteColor,
      "violet"
    );

    image(imgEstalagmite, 400, 60, 800, 250);
    
  }

  if (faseAtual.tipo === "rosas") {

    // CÉU
    fill(condicional("blue"));
    rect(0, 0, LARGURA_BASE, ALTURA_BASE);

    // CHÃO
    fill(condicional("green"));
    rect(
      0,
      ALTURA_BASE * 2/5,
      LARGURA_BASE,
      ALTURA_BASE * 3/5
    );

    let imgSol = escolherImagem(
      imgSolBW,
      imgSolColor,
      "yellow"
    );

    image(imgSol, 720, 70, 140, 194);

    let imgRosa = escolherImagem(
      imgRosaBW,
      imgRosaColor,
      "red"
      );

    image(imgRosa, 500, 150, 30, 30);
    image(imgRosa, 100, 150, 30, 30);
    image(imgRosa, 350, 150, 30, 30);
    image(imgRosa, 700, 150, 30, 30);
    image(imgRosa, 450, 150, 30, 30);
    image(imgRosa, 300, 150, 30, 30);
    image(imgRosa, 240, 190, 30, 30);
    image(imgRosa, 650, 190, 30, 30);
    image(imgRosa, 550, 190, 30, 30);
    image(imgRosa, 140, 190, 30, 30);
    image(imgRosa, 50, 190, 30, 30);
    image(imgRosa, 350, 190, 30, 30);
  
  }

}     
// ======================
// ESCOLHER IMAGEM
// ======================
function escolherImagem(bw, color, cor) {
  return coresDesbloqueadas.includes(cor) ? color : bw;
}

// ======================
// PARALLAX
// ======================
function spawnParallax() {
  // CAMADA 2
  if (
    frameCount - ultimoParallax2 > distanciaParallax2
  ) {
    if (random() < 0.4) {
      camada2.push(new ParallaxObj(2));
      ultimoParallax2 = frameCount;
      distanciaParallax2 = random(80, 180);
    }
  }
  // CAMADA 3
  if (
    frameCount - ultimoParallax3 > distanciaParallax3
  ) {
    if (random() < 0.4) {
      camada3.push(new ParallaxObj(3));
      ultimoParallax3 = frameCount;
      distanciaParallax3 = random(140, 260);
    }
  }
}

function atualizarCamadas() {
  for (let c of camada2) {
    c.update();
    c.show();
  }

  for (let c of camada3) {
    c.update();
    c.show();
  }
}

class ParallaxObj {
  constructor(camada) {
    let sorteio = random();

    this.camada = camada;
    this.x = LARGURA_BASE + random(50, 150);

  this.y = camada === 2
  ? random(ALTURA_BASE*0.45, ALTURA_BASE*0.55)
  : random(ALTURA_BASE*0.55, ALTURA_BASE*0.70);

    this.size = camada === 2 ? 40 : 80;
    this.vel = camada === 2 ? 1 : 2;
    if (faseAtual.tipo === "planicie") {

  // Escolhe aleatoriamente entre arbusto e planta
  if (sorteio < 0.5) {

    this.imgBW = imgArbustoBW;
    this.imgColor = imgArbustoColor;
    this.cor = "green";

  } else {

    this.imgBW = imgPlantaBW;
    this.imgColor = imgPlantaColor;
    this.cor = "green";

  }

} else if (faseAtual.tipo === "mar") {

  
  if (sorteio < 0.50) {
  this.imgBW = imgPeixeBW;
  this.imgColor = imgPeixeColor;
  this.cor = "blue";
  
} else if (sorteio < 0.75) {
   this.imgBW = imgAlgaBW;
  this.imgColor = imgAlgaColor;
  this.cor = "green";
  
} else {
  this.imgBW = imgCoralBW;
  this.imgColor = imgCoralColor;
  this.cor = "red";
}
}
    else if (faseAtual.tipo === "praia") {
      
  if (sorteio < 0.30) {
  this.imgBW = imgCasteloBW;
  this.imgColor = imgCasteloColor;
  this.cor = "yellow";
    
  } else if (sorteio < 0.40) {
    this.imgBW = imgCaranguejoBW;
    this.imgColor = imgCaranguejoColor;
    this.cor = "red";
  
  } else if (sorteio < 0.75) {
    this.imgBW = imgGuardasolBW;
    this.imgColor = imgGuardasolColor;
    this.cor = "violet";
 
  } else {
    this.imgBW = imgBaldeepaBW;
    this.imgColor = imgBaldeepaColor;
    this.cor = "indigo"
    
  }
    }
    else if (faseAtual.tipo === "gelo") {
      
  if (sorteio < 0.44) {
    this.imgBW = imgBengalaBW;
    this.imgColor = imgBengalaColor;
    this.cor = "blue";
  
  } else if (sorteio < 0.87) {
    this.imgBW = imgBonecoBW;
    this.imgColor = imgBonecoColor;
    this.cor = "orange"
  
  } else {
    this.imgBW = imgPinguimBW;
    this.imgColor = imgPinguimColor;
    this.cor = "orange"
  }
    }
    else if (faseAtual.tipo === "cacto") {
      if (sorteio < 0.05) {

    this.imgBW = imgLagartoBW;
    this.imgColor = imgLagartoColor;
    this.cor = "green";

  } else  if (sorteio < 0.20){

    this.imgBW = imgPedraBW;
    this.imgColor = imgPedraColor;
    this.cor = "blue";

  } else  if (sorteio < 0.65){

    this.imgBW = imgCactoBW;
    this.imgColor = imgCactoColor;
    this.cor = "green";
  } else {
    
    this.imgBW = imgArbustosecoBW;
    this.imgColor = imgArbustosecoColor;
    this.cor = "orange";
  }
    }

else if (faseAtual.tipo === "cristal") {
   if (sorteio < 0.05) {

    this.imgBW = imgMorcegoBW;
    this.imgColor = imgMorcegoColor;
    this.cor = "blue";  
  
   }else if (sorteio < 0.40) {

    this.imgBW = imgCristalpequenoazulBW;
    this.imgColor = imgCristalpequenoazulColor;
    this.cor = "blue";

  }  else if (sorteio < 0.80) {
    
    this.imgBW = imgCristalpequenovermelhoBW;
    this.imgColor = imgCristalpequenovermelhoColor;
    this.cor = "red";
      } else if (sorteio < 0.90) {
        
    this.imgBW = imgCristalgrandeazulBW;
    this.imgColor = imgCristalgrandeazulColor;
    this.cor = "blue";
      } else {

    this.imgBW = imgCristalgrandevermelhoBW;
    this.imgColor = imgCristalgrandevermelhoColor;
    this.cor = "red";
      } 
  }

else {

  if (sorteio < 0.80) {

    this.imgBW = imgRosaBW;
    this.imgColor = imgRosaColor;
    this.cor = "red";

  } else if (sorteio < 0.90) {

    this.imgBW = imgBorboletaBW;
    this.imgColor = imgBorboletaColor;
    this.cor = "red";

  }

    else if (sorteio < 0.95) {

    this.imgBW = imgJoaninhaBW;
    this.imgColor = imgJoaninhaColor;
    this.cor = "red";
  
}  

  else {
    this.imgBW = imgAbelhaBW;
    this.imgColor = imgAbelhaColor;
    this.cor = "yellow";
  }
}
  }
      update() {
    this.x -= this.vel;
  }

  show() {
    let img = escolherImagem(this.imgBW, this.imgColor, this.cor);
    image(img, this.x, this.y, this.size, this.size);
  }
}

// ======================
// OBSTÁCULOS
// ======================
function spawnObstaculos() {

  if (frameCount - ultimoSpawn > distanciaObstaculo) {
    obstaculos.push(
  new Obstaculo()
    );
    ultimoSpawn = frameCount;
    // NOVA DISTÂNCIA ALEATÓRIA
    distanciaObstaculo = random(140, 280);
  }
}

function atualizarObstaculos() {
  for (let i = obstaculos.length - 1; i >= 0; i--) {
    let o = obstaculos[i];

    o.update();
    o.show();

    if (o.colide(player)) {

      somBatida.play();
  estado = "gameover";
}

    if (o.x < -50) obstaculos.splice(i, 1);
  }
}

class Obstaculo {
  constructor() {
    let sorteio = random();

    this.x = LARGURA_BASE + random(50, 150);
    this.y = ALTURA_BASE - 10;
    this.w = 50;
    this.h = 50;
    this.vel = 5;

    if (faseAtual.tipo === "planicie") {

      if (sorteio < 0.5) {

        this.imgBW = imgArbustoBW;
        this.imgColor = imgArbustoColor;
        this.cor = "green";

      } else {

        this.imgBW = imgMacaBW;
        this.imgColor = imgMacaColor;
        this.cor = "red";

      }

    } else if (faseAtual.tipo === "mar") {

      if (sorteio < 0.5) {
      
      this.imgBW = imgCoralBW;
      this.imgColor = imgCoralColor;
      this.cor = "red";

    } else {
      
      this.imgBW = imgAlgaBW;
      this.imgColor = imgAlgaColor;
      this.cor = "green";
    }
      
  } else if (faseAtual.tipo === "praia") {
    
    if (sorteio < 0.5) {

        this.imgBW = imgCasteloBW;
        this.imgColor = imgCasteloColor;
        this.cor = "yellow";

      } else {

        this.imgBW = imgCaranguejoBW;
        this.imgColor = imgCaranguejoColor;
        this.cor = "red";
  }
  } else if (faseAtual.tipo === "gelo") {
    
    if (sorteio < 0.5) {

        this.imgBW = imgBonecoBW;
        this.imgColor = imgBonecoColor;
        this.cor = "orange";

      } else {

        this.imgBW = imgBengalaBW;
        this.imgColor = imgBengalaColor;
        this.cor = "blue";
  }
  } else if (faseAtual.tipo === "cacto") {
  if (sorteio < 0.40){

    this.imgBW = imgPedraBW;
    this.imgColor = imgPedraColor;
    this.cor = "blue";

  } else {

    this.imgBW = imgCactoBW;
    this.imgColor = imgCactoColor;
    this.cor = "green";
  }
  }

else if (faseAtual.tipo === "cristal") {
  if (sorteio < 0.60){

    this.imgBW = imgPedraBW;
    this.imgColor = imgPedraColor;
    this.cor = "blue";

  } else {

    this.imgBW = imgCarrinhoBW;
    this.imgColor = imgCarrinhoColor;
    this.cor = "yellow";
  }
}

  else {
    if (sorteio < 0.60){

    this.imgBW = imgPedraBW;
    this.imgColor = imgPedraColor;
    this.cor = "blue";

  } else if (sorteio < 0.80) {

    this.imgBW = imgCogumeloBW;
    this.imgColor = imgCogumeloColor;
    this.cor = "red";
  }
    else {
     this.imgBW = imgArbustoBW;
    this.imgColor = imgArbustoColor;
    this.cor = "green"; 
    }
  }
  }
  
  update() {
    this.x -= this.vel;
  }

  show() {
    let img = escolherImagem(
      this.imgBW,
      this.imgColor,
      this.cor
    );

    image(img, this.x, this.y - this.h / 2, this.w, this.h);
  }

  colide(p) {
    return (
      p.x + p.r > this.x - this.w / 2 &&
      p.x - p.r < this.x + this.w / 2 &&
      p.y + p.r > this.y - this.h
    );
  }
}

// ======================
// PLAYER
// ======================
class Player {
  constructor() {
    this.x = 80;
    this.y = ALTURA_BASE - 30;
    this.r = 30;
    this.velY = 0;
    this.angulo = 0;
  }

  update() {
    this.velY += gravidade;
    this.y += this.velY;

    if (this.y > ALTURA_BASE - 40) {
      this.y = ALTURA_BASE - 40;
      this.velY = 0;
    }

    this.angulo += 0.1;
  }

  pular() {
    if (this.y >= ALTURA_BASE - 40) {
      this.velY = -20;
      somPulo.play();
    }
  }

  show() {
    desenharBolinha(
    this.x,
    this.y,
    this.r,
    this.angulo,
    coresDesbloqueadas
  );
  }
}

// ======================
// ORBE
// ======================
class Orbe {
  constructor(cor) {

    this.x = LARGURA_BASE + 100;

    // ALTURA ALEATÓRIA
    // dentro do alcance do pulo
    this.y = random(ALTURA_BASE - 220, ALTURA_BASE - 100);

    this.r = 15;
    this.cor = cor;

    // MAIS RÁPIDA
    this.vel = 6;
  }

  update() {
    this.x -= this.vel;
  }

  show() {
    fill(corRGB(this.cor));
    ellipse(this.x, this.y, this.r*2);
  }

  coletado(p) {
    return dist(this.x, this.y, p.x, p.y) < this.r + p.r;
  }
}

// ======================
function corRGB(nome) {
  let c = CORES[nome];
  return color(c[0], c[1], c[2]);
}

function condicional(nome) {
  return coresDesbloqueadas.includes(nome)
    ? corRGB(nome)
    : color(255);
}

function mostrarHUD() {
}

function mostrarNomeDaFase() {

  if (!mostrarMensagemFase) return;

  tempoMensagemFase++;

  
  textFont(fonteFases);
  stroke(0);
  strokeWeight(2);
  fill(255);
  textSize(44);

  text(
    faseAtual.nome,
    LARGURA_BASE / 2,
    40
  );

  if (tempoMensagemFase >= duracaoMensagemFase) {
    mostrarMensagemFase = false;
  }

}

function mostrarTutorialJogo() {

  if (!mostrarTutorial) return;

  tempoTutorial++;

  fill(0, 160);
  rect(110, 75, 580, 70, 12);

  fill(255);
  textFont(fonteTexto);
  textSize(20);

  text(
    "Pressione na tela para pular e desviar de obstáculos\nColete orbes de cor para colorir o mundo!",
    LARGURA_BASE / 2,
    105
  );

  if (tempoTutorial >= duracaoTutorial) {
    mostrarTutorial = false;
  }

}

function mostrarMensagemDaCor() {

  if (!mostrarMensagemCor) return;

  tempoMensagemCor++;

  fill(0, 180);
  rect(180, 120, 440, 60, 12);

  fill(255);
  textFont(fonteTexto);
  textSize(24);

  text(
    "Você conseguiu a cor " +
    nomeBonitoDaCor(faseAtual.cor) + "!",
    LARGURA_BASE / 2,
    150
  );

  if (tempoMensagemCor >= duracaoMensagemCor) {
    mostrarMensagemCor = false;
  }
}

function nomeBonitoDaCor(cor) {

  switch(cor){

    case "red":
      return "VERMELHA";

    case "orange":
      return "LARANJA";

    case "yellow":
      return "AMARELA";

    case "green":
      return "VERDE";

    case "blue":
      return "AZUL";

    case "indigo":
      return "ANIL";

    case "violet":
      return "VIOLETA";
  }

  return cor;
}

function mostrarContagemTransicao() {

  if (!orbeColetada) return;

  let segundos = ceil((tempoTransicao - tempoPosOrbe) / 60);

  if (segundos > 5) return;

  fill(0, 180);
  rect(260, 45, 280, 90, 12);

  fill(255);

  textSize(22);
  textFont(fonteTexto);
  text(
    "Próxima fase em",
    LARGURA_BASE / 2,
    70
  );

  textSize(42);
  text(
    segundos,
    LARGURA_BASE / 2,
    105
  );
}

function keyPressed() {

  // MENU
  if (estado === "menu") {
    if (key === '1') iniciarJogo("historia");
    if (key === '2') iniciarJogo("colorido");
  }
  // JOGO
  else if (estado === "jogando") {
    if (keyCode === 32) {
      player.pular();
    }
  }

  // GAME OVER
  else if (estado === "gameover") {

    if (key === '1') {
      reiniciarFase();
    }
    if (key === '2') {
      estado = "menu";
    }
  }
  return false;
}

function touchStarted() {

  if (estado === "menu") {

    verificarCliqueMenu();

  }

  else if (estado === "introducao") {

    verificarCliqueIntroducao();

  }

  else if (estado === "jogando") {

    player.pular();

  }

  else if (estado === "gameover") {

    verificarCliqueGameOver();

  }

  else if (estado === "final") {

  verificarCliqueFinal();

}
  
  return false;
}

function verificarCliqueFinal() {

  let mx =
    (mouseX - (width - LARGURA_BASE * escala) / 2) / escala;

  let my =
    (mouseY - (height - ALTURA_BASE * escala) / 2) / escala;

  if (
    mx > 300 &&
    mx < 500 &&
    my > 330 &&
    my < 375
  ) {
    estado = "menu";
  }
}
