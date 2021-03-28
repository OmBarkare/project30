const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird, slingshot;

var ground1, ground2;
var box1 = [];
var box2 = [];
var box3 = [];
var box4 = [];
var box5 = [];
var box6 = [];

function setup(){
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(950,550,450,8);
    bird = new Hex(200, 300, 30, 30);
    slingshot = new SlingShot(bird.body, {x: 180, y: 200});

// Left pillar and Eight pillar
    var valYRLP = 500;
    for(var i = 0; i<=3; i = i + 1){
        box1[i] = new Box1(750,valYRLP,20,30);
        box2[i] = new Box1(1150,valYRLP,20,30);
        valYRLP = valYRLP - 40;
    }
// Middle building
    var valYMB = 500;
    for(var i = 0; i<=10; i = i + 1){
        box3[i] = new Box1(950,valYMB,20,30);
        valYMB = valYMB - 30;
    }

// Left and Right buildings
    var valYLRB = 500;
    for(var i = 0; i<=5; i = i + 1){
        box4[i] = new Box1(930,valYLRB,20,30);
        box5[i] = new Box1(970,valYLRB,20,30);
        valYLRB = valYLRB - 30;
    }


}



function draw(){
    background(0);

    for(var i = 0; i<=3; i = i + 1){
        box1[i].display();
        box2[i].display();
    }
    for(var i = 0; i<=10; i = i + 1){
        box3[i].display();
    }
    for(var i = 0; i<=5; i = i + 1){
        box4[i].display();
        box5[i].display();
    }

    bird.display();
    ground1.display();
    slingshot.display();

    Engine.update(engine);
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        Matter.Body.setPosition(bird.body, {x:200, y:250})
        slingshot.attach(bird.body);
    }
 }