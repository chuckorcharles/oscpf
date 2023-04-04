let osc;
function setup() {
  createCanvas(400, 400);

  osc = new OSC();
  osc.open({ host: 'localhost', port: 19230 });

  let button = createButton('Send Bundle');
  button.mousePressed(sendBundle);
}

function draw() {
  background(220);
}

function sendBundle() {
  let bundle = new OSC.Bundle();
  bundle.add('/button', 'clicked');
  osc.sendBundle(bundle);
}
