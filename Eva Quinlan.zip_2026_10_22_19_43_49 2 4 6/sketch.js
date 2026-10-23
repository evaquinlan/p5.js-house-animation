//Eva Quinlan
//18th October 2026
// Assigntment 1

let x = 0;
let y = 80;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0, 34, 102);

  fill(2255, 255, 179);
  noStroke();
  ellipse(x, y, 120, 120);

  x = x +1;

  if (x > 650) {
    x = 0;
  }

//ground
  fill(0, 77, 26)
  rect(0,450,800,400)
  
  // roof
  stroke(0);
  fill(77,0,0);
  triangle(47, 250, 357, 252, 200, 120);

  //house
  fill(255,166,77)
  rect(75,250,250,250)

  //house details
    fill(128,0, 0)
  rect(75,300,250,4)
  fill(128,0, 0)
  rect(215,250,4,50)
  fill(128,0, 0)
  rect(165,250,4,50)
  fill(128,0, 0)
  rect(115,250,4,50)
    fill(128,0, 0)
  rect(270,250,4,50)

      //door
  fill(77,0,0)
  rect(209,350,87,150)

  //door
  fill(128,0,0)
  rect(215,360,75,140)

  //door knob
  fill(51,0,0)
  noStroke()
  ellipse(227,440,10,10)

      //window details
  fill(77,0,0)
  rect (98,350,78,110)

      //window
  fill(255,255,128)
  rect (107,355,60,100)

        //window details
 fill(77,0,0)
  rect (135,355,5,105)

          //window details
 fill(77,0,0)
  rect (107,405,60,5)

  //car body
  fill(204,0,0)
  rect(450,410,175,55)

  //car body
 fill(204,0,0)
  rect(490,360,100,50)

  //car details
  fill(128, 0, 0)
  rect(490,405,100,5)

  //car details
  fill(128, 0, 0)
  rect(535,405,5,50)

  //car details
  fill(128, 0, 0)
  rect(585,405,5,50)

  //car details
  fill(128, 0, 0)
  rect(490,405,5,50)

  //window
  fill(255, 221, 153)
  rect(490,380,50,15)

  //car details
  fill(64,64,64)
  rect(450,450,175,15)

  //wheels
  fill(0,0,0)
  ellipse(500,470,50,50)

   //wheels
  fill(0,0,0)
  ellipse(580,470,50,50)

  //spacecraft details
      fill(36, 143, 36)
  ellipse(470,175,138,101)

  //spacecraft window
    fill(71, 209, 71)
  ellipse(470,175,130,95)

    //spacecraft details
  fill(89, 89, 89)
  ellipse(470,200,170,60)

  //spacecraft body
  fill(115, 115, 115)
  ellipse(470,200,160,50)

      //spacecraft details
  fill(89, 89, 89)
  ellipse(420,200,15,15)

        //spacecraft details
  fill(89, 89, 89)
  ellipse(470,200,15,15)

        //spacecraft details
  fill(89, 89, 89)
  ellipse(520,200,15,15)

  //laser beams
  fill(random(255, 255, 102),random(255, 153, 255), random(153, 102, 255));
  rect(430,230,7,100)

    //laser beams
  fill(random(255, 255, 102),random(255, 153, 255), random(153, 102, 255));
  rect(467,233,7,100)

    //laser beams
  fill(random(255, 255, 102),random(255, 153, 255), random(153, 102, 255));
  rect(507,230,7,100)
}