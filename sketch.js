let capaMascara;
let dibuja=false;
let galaxia;
function preload() {
  galaxia = loadImage("data/galaxia.png");
}
function setup() {
createCanvas(displayWidth, displayHeight);
//capaMascara=createGraphics(galaxia.width,galaxia.height);
capaMascara=createGraphics(1984,1314);


}

function draw() {
  background(255);

  //capaMascara=createGraphics(1984,1314);
  capaMascara.fill(255);
  capaMascara.noStroke();
  capaMascara.ellipse(mouseX,mouseY, 200, 200);
  ( masked = galaxia.get()).mask(capaMascara);
image(masked,50,50);

}