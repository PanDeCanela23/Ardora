//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=15; scoreInc=5; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hecho!"; messageTime=""; messageError="Vuelve a intentarlo"; messageErrorG="Vuelve a intentarlo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QXZhbmNlc19jaWVudF9fZmljb3NfX0F2YW5jZXNf"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Observar estrellas y planetas</p>","<p>Examinar organismos muy pequeños</p>","<p>Escuchar el interior del cuerpo humano</p>"];
var iL=["","",""];
var order=["","",""]; orderR=["","",""];indexR=0; indexL=0;
var cR=["","",""]; ansRL=["MQ==","MA==","Mg=="];
var iR=["<div  align='center'><img alt='' src='Avances_cient__ficos__Avances__resources/media/Captura_de_pantalla_2024-06-09_101039.png'></div>","<div  align='center'><img alt='' src='Avances_cient__ficos__Avances__resources/media/Captura_de_pantalla_2024-06-09_101118.png'></div>","<div  align='center'><img alt='' src='Avances_cient__ficos__Avances__resources/media/Captura_de_pantalla_2024-06-09_101104.png'></div>"];
var auR=[2,1,3];
