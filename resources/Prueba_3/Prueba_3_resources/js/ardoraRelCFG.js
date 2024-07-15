//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=250; timeIni=250; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=80; scoreInc=20; scoreDec=5
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hecho!"; messageTime=""; messageError="Mejor para la proxima!"; messageErrorG="Mejor para la proxima!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UHJ1ZWJhXzM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Fecundacion</p>","","<p>Nacimiento</p>",""];
var iL=["","<div  align='center'><img alt='' src='Prueba_3_resources/media/Captura_de_pantalla_2024-06-23_185027.png'></div>","","<div  align='center'><img alt='' src='Prueba_3_resources/media/Captura_de_pantalla_2024-06-23_184938.png'></div>"];
var order=["","","",""]; orderR=["","","",""];indexR=0; indexL=0;
var cR=["","<p>Embarazo</p>","","<p>Lactancia</p>"]; ansRL=["MA==","MQ==","Mg==","Mw=="];
var iR=["<div  align='center'><img alt='' src='Prueba_3_resources/media/Captura_de_pantalla_2024-06-23_185008.png'></div>","","<div  align='center'><img alt='' src='Prueba_3_resources/media/Captura_de_pantalla_2024-06-23_185102.png'></div>",""];
var auR=[1,2,3,4];
