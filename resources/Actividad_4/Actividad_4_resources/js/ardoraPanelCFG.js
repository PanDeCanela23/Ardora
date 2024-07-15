//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=40; scoreInc=10; scoreDec=5
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFCEFF"; colorButton="#D6DA89"; colorText="#000000"; colorSele="#FFB062";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hecho"; messageTime=""; messageError="Vuelve a intentarlo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0"];
var posX=[473,464,141,149]; var posY=[58,170,204,146];
var coorx=["NDY4", "NDU5", "MTM2", "MTQ0"]; var coory=["NTg=", "MTcw", "MjA0", "MTQ2"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["Cerebelo", "Cerebro", "Cerebro", "Cerebro"]; var al2=["Tronco encefálico", "Cerebelo", "Cerebelo", "Tronco encefálico"]; var al3=["Médula espinal", "Medula espinal", "Tronco encefálico", "Médula espinal"]; var al4=["", "", "", ""]; answers=["Cerebro", "Tronco encefálico", "Médula espinal", "Cerebelo"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="QWN0aXZpZGFkXzQ="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
