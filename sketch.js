function setup() {
    createCanvas(600, 400);
}
function draw() {
    background(0);
    circle(xBolinha,yBolinha , diametro);
  xBolinha+= velocidadeXBolinha;
  yBolinha+= velocidadeYBolinha;
   if (xBolinha + raio > 600 || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
} 
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
}
 
}
 let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;    
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
function draw() {
    background(0)
    rect(5, 150, 10, 90);
}
//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
function mostraRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}
function draw() {
    background(0);
    mostraRaquete();
  movimentaMinhaRaquete();
  colisaoMinhaRaqueteBiblioteca();
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
}

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}
function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento
        && yBolinha - raio < yRaquete + raqueteAltura
        && yBolinha + raio > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}
function colisaoMinhaRaqueteBiblioteca() {
    collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
}
function colisaoMinhaRaqueteBiblioteca() {
    colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
function mostraRaqueteOponente() {
    rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}
function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}