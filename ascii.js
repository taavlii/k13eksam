/* jshint esversion:6 */

let picToArrange=document.getElementById("container").dataset.img;
let height;
let width;

var img=new Image();

img.onload=function(){
  height=this.height;
  width=this.width;
  showMeXY();
};
img.src=picToArrange;

var canvas;
var context;
var i,j;
var lightP =0;
var mediumP=0;
var darkP=0;
var k=0;
var imageData;
var picArray;
var pixelSum;
var strDisplay="";
var pixelAns=[];
var ascArray=[
              "I",0,6.71,
              "l",6.71,13.42,           
              "i",13.42,20.13,         
              "1",20.13,26.83,
              "t",26.83,33.54,
              "f",33.54,40.25,
              "j",40.25,46.96,
              "r",46.96,53.67,
              "x",53.67,60.38,
              "n",60.38,67.09,
              "u",67.09,73.8,
              "v",73.8,80.51,
              "c",80.51,87.22,
              "z",87.22,93.93,
              "X",93.93,100.64,
              "Y",100.64,107.35,
              "U",107.35,114.06,
              "J",114.06,120.77,
              "C",120.77,127.48,
              "L",127.48,134.19,
              "Q",134.19,140.9,
              "0",140.9,147.61,
              "O",147.61,154.32,
              "Z",154.32,161.03,
              "m",161.03,167.74,
              "w",167.74,174.45,
              "q",174.45,181.16,
              "p",181.16,187.87,
              "d",187.87,194.58,
              "b",194.58,201.29,
              "k",201.29,208,
              "h",208,214.71,
              "a",214.71,221.4,
              "o",221.42,228.13,
              "M",228.13,234.84,
              "W",234.84,241.55,
              "8",241.55,248.26,
              "B",248.26,256];



function showMeXY(){
  console.log(width + 'x' + height);
  document.body.innerHTML += '<canvas id="canvas" width="'+ width/4 +'" height="'+height/4+'" ></canvas>';
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  make_base();
}

function make_base(){
  base_image = new Image();
  base_image.src = picToArrange;
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0,width/4,height/4);
    imageData = context.getImageData(0, 0, width/4, height/4);
    //console.log(imageData.data);
    picArray=imageData.data;
    doArt(picArray);
  };
}

function doArt(picArray){
  //console.log(picArray);
  for(i=0;i<=picArray.length;i++){
    pixelSum=0;
    pixelSum+=picArray[i*4];
    pixelSum+=picArray[i*4+1];
    pixelSum+=picArray[i*4+2];
    pixelAns.push(pixelSum/3);
  }
  console.log(pixelAns);
  for(i=0;i<pixelAns.length;i++){
    if(k+1>=width/4){
      strDisplay=strDisplay+"<br>";
      k=0;

    }
    if(pixelAns[i]<85){
      lightP++;
    }else if(pixelAns[i]>=85 && pixelAns[i]< 170){
      mediumP++;
    }else{
      darkP++;
    }
    for(j=0;j<ascArray.length;j+=3){
      if(pixelAns[i]>= ascArray[j+1] && pixelAns[i] < ascArray[j+2]){
        strDisplay=strDisplay+ascArray[j];
        strDisplay=strDisplay+ascArray[j];
        k++;
      }
    }
  }
  //document.getElementById("display").setAttribute("style","width:"+width/4+"ch");
  document.getElementById("display").innerHTML=strDisplay;
  //document.getElementById("summary").innerHTML="meowmix";
  console.log(lightP);
  console.log(mediumP);
  console.log(darkP);
  document.getElementById("summary").innerHTML="Number of Light characters: "+lightP+"<br>"+"Number of Medium characters: "+mediumP+"<br>"+"Number of Dark characters: "+darkP;
}

//console.log(ascArray);



/**var ascArray=["`",0,4,
              "^",4,8,
              ",",8,12, 
              ":",12,16,
              ";",16,20,
              "I",20,24,
              "l",24,28,
              "!",32,36,
              "i",36,40,
              "~",40,44,
              "+",44,48,
              "_",48,52,
              "-",52,56,
              "?",56,60,
              "]",60,64,
              "[",64,68,
              "}",68,72,
              "{",72,76,
              "1",76,80,
              ")",80,84,
              "(",84,88,
              "|",88,92,
              "/",92,96,
              "t",96,100,
              "f",100,104,
              "j",104,108,
              "r",108,112,
              "x",112,116,
              "n",116,120,
              "u",120,124,
              "v",124,128,
              "c",128,132,
              "z",132,136,
              "X",136,140,
              "Y",140,144,
              "U",144,148,
              "J",148,152,
              "C",152,156,
              "L",156,160,
              "Q",160,164,
              "0",164,168,
              "O",168,172,
              "Z",172,176,
              "m",176,180,
              "w",180,184,
              "q",184,188,
              "p",188,192,
              "d",192,196,
              "b",196,200,
              "k",200,204,
              "h",204,208,
              "a",208,212,
              "o",212,216,
              "*",216,220,
              "#",220,224,
              "M",224,228,
              "W",228,232,
              "&",232,236,
              "8",236,240,
              "%",240,244,
              "B",244,248,
              "@",248,251,
              "$",251,256]; */
