let brushSize = 2;
let brushClr = 0;
let x = 0;
let y = 245;
let img1;
let img2;
let img3;
let bg = 255;
let yValue = 0;
let xValue = 0;
let cols, rows;
let scl = 20;

function setup() {
  createCanvas(1200, 700);
  background(bg);
  cols = 1000 / scl;
  rows = height / scl;
  img1 = loadImage("assets/eraser.png");
  img2 = loadImage("assets/download.png");
  img3 = loadImage("assets/ezy draw.png");
}

function draw() {
  //brush
  stroke(brushClr);
  strokeWeight(brushSize);
  if (mouseIsPressed && mouseX < 1000) {
    x = mouseX;
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  //palette
  strokeWeight(2);
  fill(20, 50, 70);
  rect(1000, 0, 230, height);
  fill("#FF1616");
  rect(1000, 0, 200 / 3, 50, 30);
  fill("#FA8A01");
  rect(1000 + 200 / 3, 0, 200 / 3, 50, 30);
  fill("#FFC432");
  rect(1000 + (200 / 3 + 200 / 3), 0, 200 / 3, 50, 30);
  fill("#FFFF00");
  rect(1000, 50, 200 / 3, 50, 30);
  fill("#CFE12C");
  rect(1000 + 200 / 3, 50, 200 / 3, 50, 30);
  fill("#008037");
  rect(1000 + (200 / 3 + 200 / 3), 50, 200 / 3, 50, 30);
  fill("#0101FD");
  rect(1000, 100, 200 / 3, 50, 30);
  fill("#4401A5");
  rect(1000 + 200 / 3, 100, 200 / 3, 50, 30);
  fill("#8C00B1");
  rect(1000 + (200 / 3 + 200 / 3), 100, 200 / 3, 50, 30);
  fill(255); //white
  rect(1000, 150, 200 / 3, 50, 30);
  fill(150); //gray
  rect(1000 + 200 / 3, 150, 200 / 3, 50, 30);
  fill(0); //black
  rect(1000 + (200 / 3 + 200 / 3), 150, 200 / 3, 50, 30);

  if (mouseIsPressed) {
    if (
      mouseX >= 1000 &&
      mouseX <= 1000 + 200 / 3 &&
      mouseY >= 0 &&
      mouseY <= 50
    ) {
      brushClr = "#FF1616"; //red
    } else if (
      mouseX >= 1000 + 200 / 3 &&
      mouseX <= 1000 + 200 / 3 + 200 / 3 &&
      mouseY >= 0 &&
      mouseY <= 50
    ) {
      brushClr = "#FA8A01"; //orange
    } else if (
      mouseX >= 1000 + 200 / 3 + 200 / 3 &&
      mouseX <= 1200 &&
      mouseY >= 0 &&
      mouseY <= 50
    ) {
      brushClr = "#FFC432"; //orange yellow
    } else if (
      mouseX >= 1000 &&
      mouseX <= 1000 + 200 / 3 &&
      mouseY > 50 &&
      mouseY <= 100
    ) {
      brushClr = "#FFFF00"; //yellow
    } else if (
      mouseX >= 1000 + 200 / 3 &&
      mouseX <= 1000 + 200 / 3 + 200 / 3 &&
      mouseY > 50 &&
      mouseY <= 100
    ) {
      brushClr = "#CFE12C"; //yellow green
    } else if (
      mouseX >= 1000 + 200 / 3 + 200 / 3 &&
      mouseX <= 1200 &&
      mouseY > 50 &&
      mouseY <= 100
    ) {
      brushClr = "#008037"; //green
    } else if (
      mouseX >= 1000 &&
      mouseX <= 1000 + 200 / 3 &&
      mouseY > 100 &&
      mouseY <= 150
    ) {
      brushClr = "#0101FD"; //blue
    } else if (
      mouseX >= 1000 + 200 / 3 &&
      mouseX <= 1000 + 200 / 3 + 200 / 3 &&
      mouseY > 100 &&
      mouseY <= 150
    ) {
      brushClr = "#4401A5"; //indigo
    } else if (
      mouseX >= 1000 + 200 / 3 + 200 / 3 &&
      mouseX <= 1200 &&
      mouseY > 100 &&
      mouseY <= 150
    ) {
      brushClr = "#8C00B1"; //violet
    } else if (
      mouseX >= 1000 &&
      mouseX <= 1000 + 200 / 3 &&
      mouseY > 150 &&
      mouseY <= 200
    ) {
      brushClr = 255; //white
    } else if (
      mouseX >= 1000 + 200 / 3 &&
      mouseX <= 1000 + 200 / 3 + 200 / 3 &&
      mouseY > 150 &&
      mouseY <= 200
    ) {
      brushClr = 150; //gray
    } else if (
      mouseX >= 1000 + 200 / 3 + 200 / 3 &&
      mouseX <= 1200 &&
      mouseY > 150 &&
      mouseY <= 200
    ) {
      brushClr = 0; //black
    }
  }
  //slider bar
  fill(77, 251, 255);
  stroke(255);
  rect(1010, 230, 40, 455, 15);
  let yBrush = (260, 304, 348, 392, 436, 480, 524, 568, 612, 656);
  let sBrush = (2, 5, 10, 20, 50, 80, 100, 150, 200, 250);
  for (var i = 0; i < yBrush.length; i++) {
    fill(255);
    rect(1020, yBrush[i] - 5, 20, 2);
    fill(77, 251, 255);
    textSize(20);
    text(sBrush[i], 1055, yBrush[i]);
  }

  //brush size slider
  if (mouseIsPressed == true) {
    if (mouseX >= 1010 && mouseX <= 1050 && mouseY >= 245 && mouseY <= 670) {
      y = mouseY;
    }
  }
  //thumb
  fill(0, 198, 54);
  stroke(255);
  ellipse(1030, y, 40, 40);

  if (
    mouseIsPressed &&
    mouseX > 1010 &&
    mouseX < 1050 &&
    mouseY > 245 &&
    mouseY < 274
  ) {
    brushSize = 2;
  } else if (
    mouseIsPressed &&
    mouseX > 1010 &&
    mouseX < 1050 &&
    mouseY >= 274 &&
    mouseY < 318
  ) {
    brushSize = 5;
  } else if (
    mouseIsPressed &&
    mouseX > 1010 &&
    mouseX < 1050 &&
    mouseY >= 318 &&
    mouseY < 362
  ) {
    brushSize = 10;
  } else if (
    mouseIsPressed &&
    mouseX > 1010 &&
    mouseX < 1050 &&
    mouseY >= 362 &&
    mouseY < 406
  ) {
    brushSize = 20;
  } else if (
    mouseIsPressed &&
    mouseX > 1010 &&
    mouseX < 1050 &&
    mouseY >= 406 &&
    mouseY < 450
  ) {
    brushSize = 50;
  } else if (
    mouseIsPressed &&
    mouseX > 1010 &&
    mouseX < 1050 &&
    mouseY >= 450 &&
    mouseY < 494
  ) {
    brushSize = 80;
  } else if (
    mouseIsPressed &&
    mouseX > 1010 &&
    mouseX < 1050 &&
    mouseY >= 494 &&
    mouseY < 538
  ) {
    brushSize = 100;
  } else if (
    mouseIsPressed &&
    mouseX > 1010 &&
    mouseX < 1050 &&
    mouseY >= 538 &&
    mouseY < 582
  ) {
    brushSize = 150;
  } else if (
    mouseIsPressed &&
    mouseX > 1010 &&
    mouseX < 1050 &&
    mouseY >= 582 &&
    mouseY < 626
  ) {
    brushSize = 200;
  } else if (
    mouseIsPressed &&
    mouseX > 1010 &&
    mouseX < 1050 &&
    mouseY >= 626 &&
    mouseY < 670
  ) {
    brushSize = 250;
  }

  image(img3, 1090, 250, 100, 120);

  //eraser
  if (
    mouseIsPressed &&
    mouseX >= 1100 &&
    mouseX <= 1190 &&
    mouseY >= 400 &&
    mouseY <= 465
  ) {
    fill(bg);
    rect(0, 0, 1000, height);
    fill("#FFFF00");
  } else {
    fill(255);
  }
  rect(1100, 400, 90, 95, 15);
  image(img1, 1105, 405, 80, 80);
  noStroke();
  textSize(22);
  fill(255);
  text("Erase", 1123, 405 + 115);

  //save
  if (
    mouseIsPressed &&
    mouseX >= 1100 &&
    mouseX <= 1190 &&
    mouseY >= 545 &&
    mouseY <= 615
  ) {
    fill("#FFFF00");
  } else {
    fill(255);
  }
  rect(1100, 545, 90, 95, 15);
  image(img2, 1100, 555, 90, 80);
  noStroke();
  textSize(22);
  fill(255);
  text("Save", 1125, 665);
}

function mousePressed() {
  if (mouseX >= 1100 && mouseX <= 1190 && mouseY >= 520 && mouseY <= 615) {
    saveFrames("ezydrw###.png");
  }
}
