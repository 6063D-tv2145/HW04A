function setup() {
  createCanvas(1080, 1080);

}

function draw() {
  //frame
  background(255, 104,1);

  //wall
  fill(255, 173, 162);
  strokeWeight(0);
  rect(40, 40, 1000, 1000, 30);

  //desk
  fill(244, 240, 228);
  strokeWeight(0);
  rect(40, 690, 1000, 350, 30);

//clock
  //clock button
  fill(12, 19, 140);
  strokeWeight(0);
  rect(418, 520, 250, 250, 30);

  //clock base
  fill(47, 55, 202);
  strokeWeight(0);
  rect(180, 565, 725, 250, 30);

  //clock hour section
  fill(12, 19, 140);
  strokeWeight(0);
  rect(200, 590, 225, 200, 20);

  //clock minute section
  fill(71, 79, 227);
  strokeWeight(0);
  rect(430, 590, 225, 200, 20);

  //clock second section
  fill(88, 96, 243);
  strokeWeight(0);
  rect(660, 590, 225, 200, 20);

//calendar
  //calendar sheet

  fill(244, 240, 228);
  strokeWeight(0);
  rect(415, 210, 250, 200, 20);

  //calendar holder
  fill(255, 104,1);
  strokeWeight(0);
  rect(415, 190, 250, 35, 20);

//Calendar Text
  textSize(100);
  fill(0);
  textFont('Montserrat');
  text(day() + '/' + month(), 445, 350);

  //Hour display
  textSize(80);
  fill(244, 240, 228);
  textFont('Montserrat');
  text(hour() + 'h', 240, 715);

  //Minute display
  text(minute() + 'm', 450, 715);

  //Second display
  text(second() + 's', 700, 715);
}