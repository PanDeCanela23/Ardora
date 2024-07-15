//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=2;
var score=0; scoreMax=100; scoreInc=100; scoreDec=15
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
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hecho!"; messageTime=""; messageError="Vuelve a intentarlo"; messageErrorG="Vuelve a intentarlo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RXZhbHVhY2lfX25fc3VtYXRpdmEy"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Cuál característica de las investigaciones científicas ha permitido diseñar teléfonos <br>cada vez más sofisticados?"];
var answers1=["MUFwbGljYWJpbGlkYWQgZGUgY29ub2NpbWllbnRvcy4=","ME9iamV0aXZpZGFkIGRlIHJlc3VsdGFkb3Mu","MFJpZ3Vyb3NpZGFkIGRlIG1ldG9kb2xvZ8OtYS4=","MFJlcGxpY2FiaWxpZGFkIGRlIGV4cGVyaW1lbnRvcy4="];
var ans=[answers1];
var err=[""];
var ima=["Captura_de_pantalla_2024-06-09_103535.png"];
var mp4=[""];
var ogv=[""];
var alt=[""];
var info=[""];
var indexTag=0; actualAnswers=[]; dirMedia="Evaluaci__n_sumativa2_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
