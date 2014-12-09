var loadingImage = 1;
var sound, bgm;


function preload(){
  sound = loadSound("./click.mp3");
	bgm = loadSound("./bgm.mp3");
}

function setup()

{
	createCanvas(1920,1080);
    bg = loadImage("bg.png");

    bgm.loop();

    bottom = loadImage("bottom.png");
    boxClick1 = loadImage("boxClick1.png");
    boxClick2 = loadImage("boxClick2.png");
    boxOver = loadImage("boxOver.png");
    crap1 = loadImage("crap1.png");
    crap2 = loadImage("crap2.png");
    crap3 = loadImage("crap3.png");
    crap4 = loadImage("crap4.png");
    crap5 = loadImage("crap5.png");
    crap6 = loadImage("crap6.png");
    crap7 = loadImage("crap7.png");
    crap8 = loadImage("crap8.png");
    crap9 = loadImage("crap9.png");
    crap10 = loadImage("crap10.png");
    crap11 = loadImage("crap11.png");
    crap12 = loadImage("crap12.png");
    crap13 = loadImage("crap13.png");
    crap14 = loadImage("crap14.png");
    crap15 = loadImage("crap15.png");
    crap16 = loadImage("crap16.png");

    fish1 = loadImage("fish1.png");
    fish2 = loadImage("fish2.png");
    fish3 = loadImage("fish3.png");
    fish4 = loadImage("fish4.png");
    fish5 = loadImage("fish5.png");
    fish6 = loadImage("fish6.png");
    fish7 = loadImage("fish7.png");
    ful1 = loadImage("ful1.png");
    ful2 = loadImage("ful2.png");
    pul1 = loadImage("pul1.png");
    pul2 = loadImage("pul2.png");
    leapL1 = loadImage("leapL1.png");
    leapL2 = loadImage("leapL2.png");
    leapR1 = loadImage("leapR1.png");
    leapR2 = loadImage("leapR2.png");
    tree = loadImage("tree.png")

}

function draw()
{
    background(bg);
    

    fill(237,112,50);
    noStroke();


    fill(237,112,50);
    noStroke();
	if(mouseX > 100 && mouseX <100+boxOver.width && mouseY > 100 && mouseY <100+boxOver.height){
		image(boxOver,1179.36,495.21);
	}



    if(loadingImage === 1){
    	image(boxClick1,1211.67,538.5);
    }else if(loadingImage === 2){
    	image(boxClick2,1211.67,538.5);
    }


    var duration = 7000;
    var timing = (new Date()%duration)/duration;


    if(timing*2 <1){
    image(leapL1,0,400.53);
    } else{
    image(leapL2,0,400.53);
    } 

    if(timing*2 <1){
    image(leapR1,1198.8,199.04);
    } else{
    image(leapR2,1198.8,199.04);
    } 


    //crap

    if(timing*16 <1){
    image(crap1, timing*1920,578.66);
    } else if(timing*16 <2){
    image(crap2, timing*1920,578.66);
    } else if(timing*16 <3){
    image(crap3, timing*1920,578.66);
    } else if(timing*16 <4){
    image(crap4, timing*1920,578.66);
    } else if(timing*16 <5){
    image(crap5, timing*1920,578.66);
    } else if(timing*16 <6){
    image(crap6, timing*1920,578.66);
    } else if(timing*16 <7){
    image(crap7, timing*1920,578.66);
    } else if(timing*16 <8){
    image(crap8, timing*1920,578.66);
    } else if(timing*16 <9){
    image(crap9, timing*1920,578.66);
    } else if(timing*16 <10){
    image(crap10, timing*1920,578.66);
    } else if(timing*16 <11){
    image(crap11, timing*1920,578.66);
    } else if(timing*16 <12){
    image(crap12, timing*1920,578.66);
    } else if(timing*16 <13){
    image(crap13, timing*1920,578.66);
    } else if(timing*16 <14){
    image(crap14, timing*1920,578.66);
    } else if(timing*16 <15){
    image(crap15, timing*1920,578.66);
    } else{
    image(crap16, timing*1920,578.66);
    }


    //




    var duration2 = 800;
    var timing2 = (new Date()%duration2)/duration2;

    if(timing2*2 <1){
    image(pul1,128.58,412.05);
    } else{
    image(pul2,128.58,412.05);
    } 


    if(timing2*2 <1){
    image(ful1,186.37,414.73);
    } else{
    image(ful2,186.37,414.73);
    } 


    if(timing2*7 <1){
    image(fish1,397.68,105.5);
    } else if(timing2*7 <2){
    image(fish2,397.68,105.5);
    } else if(timing2*7 <3){
    image(fish3,397.68,105.5);
    }else if(timing2*7 <4){
    image(fish4,397.68,105.5);
    }else if(timing2*7 <5){
    image(fish5,397.68,105.5);
    }else if(timing2*7 <6){
    image(fish6,397.68,105.5);
    }else{
    image(fish7,397.68,105.5);
    }







    image(tree,431.5,513.5);
    image(bottom,1090.8,638.64);

}


function mousePressed(){
	if(mouseX > 50 && mouseX <150 && mouseY > 50 && mouseY <150){
		if(loadingImage === 1){
			loadingImage = 2;
			sound.play();
		}else if(loadingImage ===2){
			loadingImage =1;
			sound.stop();
		}
	}
}