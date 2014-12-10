var loadingImage = 1;
var sound, bgm;
var bgCount = 0;
var bubbleY = 1850;
var bubbleX = 100;
var bubbleY1 = 1800;
var bubbleX1 = 600;
var bubbleY2 = 1800;
var bubbleX2 = 180;


function preload(){
  sound = loadSound("./click.mp3");
	bgm = loadSound("./bgm.mp3");
}

function setup()

{

	createCanvas(1920,1080);
    bg = loadImage("bg.png");
    addBg2 = loadImage("addBg2.png");

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
	if(mouseX > 1638 && mouseX <1904+boxOver.width && mouseY > 690 && mouseY <880+boxOver.height){
		image(boxOver,1638.43,687.97);
	}



    if(loadingImage === 1){
    	image(boxClick1,1683.31,748.11);
    }else if(loadingImage === 2){
    	image(boxClick2,1683.31,748.11);
    }




    var duration = 7000;
    var timing = (new Date()%duration)/duration;


    if(timing*7 <1){
    image(fish1,552.47,146.56);
    } else if(timing*7 <2){
    image(fish2,552.47,146.56);
    } else if(timing*7 <3){
    image(fish3,552.47,146.56);
    }else if(timing*7 <4){
    image(fish4,552.47,146.56);
    }else if(timing*7 <5){
    image(fish5,552.47,146.56);
    }else if(timing*7 <6){
    image(fish6,552.47,146.56);
    }else{
    image(fish7,552.47,146.56);
    }



    //




    var duration2 = 800;
    var timing2 = (new Date()%duration2)/duration2;



    if(timing2*2 <1){
    image(pul1,178.63,572.44);
    } else{
    image(pul2,178.63,572.44);
    } 


    if(timing2*2 <1){
    image(ful1,258.92,576.16);
    } else{
    image(ful2,258.92,576.16);
    } 



    if(timing2*2 <1){
    image(leapR1,1665.44,276.52);
    } else{
    image(leapR2,1665.44,276.52);
    } 




    var duration3 = 15000;
    var timing3 = (new Date()%duration3)/duration3;


    if(timing3*16 <1){
    image(crap1, timing3*1920,803.9);
    } else if(timing*16 <2){
    image(crap2, timing3*1920,803.9);
    } else if(timing3*16 <3){
    image(crap3, timing3*1920,803.9);
    } else if(timing3*16 <4){
    image(crap4, timing3*1920,803.9);
    } else if(timing3*16 <5){
    image(crap5, timing3*1920,803.9);
    } else if(timing3*16 <6){
    image(crap6, timing3*1920,803.9);
    } else if(timing3*16 <7){
    image(crap7, timing3*1920,803.9);
    } else if(timing3*16 <8){
    image(crap8, timing3*1920,803.9);
    } else if(timing3*16 <9){
    image(crap9, timing3*1920,803.9);
    } else if(timing3*16 <10){
    image(crap10, timing3*1920,803.9);
    } else if(timing3*16 <11){
    image(crap11, timing3*1920,803.9);
    } else if(timing3*16 <12){
    image(crap12, timing3*1920,803.9);
    } else if(timing3*16 <13){
    image(crap13, timing3*1920,803.9);
    } else if(timing3*16 <14){
    image(crap14, timing3*1920,803.9);
    } else if(timing3*16 <15){
    image(crap15, timing3*1920,803.9);
    } else{
    image(crap16, timing3*1920,803.9);
    }



    if(timing2*2 <1){
    image(leapL1,0,556.44);
    } else{
    image(leapL2,0,556.44);
    } 


    //

    var time = (new Date())%1000/1000;
    fill(173,216,230,50);
    ellipse(sin(time*2*PI)*100+bubbleX, bubbleY,bubbleY/3,bubbleY/3);
    bubbleY = bubbleY - 8;
    if(bubbleY < 0){
        bubbleY = 800;
    }

    fill(255,255,255,70);
    ellipse(sin(time*2*PI)*50+bubbleX2, bubbleY2,bubbleY2/5,bubbleY2/5);
    bubbleY2 = bubbleY2 - 5;
    if(bubbleY < 0){
        bubbleY = 800;
    }

    fill(255,255,255,150);
    ellipse(sin(time*2*PI)*50+bubbleX1, bubbleY1,bubbleY1/7,bubbleY1/7);
    bubbleY1 = bubbleY1 - 5;
    if(bubbleY1 < 0){
        bubbleY1 = 500;
    }

    //

    image(tree,599.47,713.38);
    image(bottom,1515.39,887.23);

    image(addBg2,0+bgCount,0);
    image(addBg2,-addBg2.width+bgCount,0);
    bgCount = bgCount + 10;
    if(bgCount > addBg2.width){
        bgCount =0;
    }


}


function mousePressed(){
	if(mouseX > 1638 && mouseX <1904 && mouseY > 690 && mouseY <880){
		if(loadingImage === 1){
			loadingImage = 2;
			sound.play();
		}else if(loadingImage ===2){
			loadingImage =1;
			sound.stop();
		}
	}
}