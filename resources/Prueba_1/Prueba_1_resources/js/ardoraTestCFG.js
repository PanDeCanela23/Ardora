//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=250; timeIni=250; timeBon=5;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=40; scoreInc=10; scoreDec=10
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFCEFF"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hecho"; messageTime=""; messageError="Mejor para la proxima!"; messageErrorG="Mejor para la proxima!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UHJ1ZWJhXzE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. El tercer paso del método científico se conoce como","2. ¿Cuál característica de las investigaciones científicas ha permitido diseñar teléfonos<br>cada vez más sofisticados?","3. El conjunto de instrumentos y procedimientos usados para resolver problemas en<br>distintas áreas se conoce como","4. . La terapia génica es un avance científico y tecnológico aplicado en el campo de la"];
var answers1=["MWZvcm11bGFjacOzbiBkZSBoaXDDs3Rlc2lzLg==","MG9ic2VydmFjacOzbg==","MGV4cGVyaW1lbnRhY2nDs24u","MHBsYW50ZWFtaWVudG8gZGUgcHJlZ3VudGEu"];
var answers2=["MUFwbGljYWJpbGlkYWQgZGUgY29ub2NpbWllbnRvcy4=","ME9iamV0aXZpZGFkIGRlIHJlc3VsdGFkb3Mu","MFJpZ3Vyb3NpZGFkIGRlIG1ldG9kb2xvZ8OtYS4=","MFJlcGxpY2FiaWxpZGFkIGRlIGV4cGVyaW1lbnRvcy4="];
var answers3=["MXRlY25vbG9nw61hLg==","MGNpZW5jaWE=","MGludmVzdGlnYWNpw7NuLg==","MGNvbm9jaW1pZW50bw=="];
var answers4=["MW1lZGljaW5hLg==","MGFzdHJvbm9tw61hLg==","MGluZm9ybWFjacOzbg==","MGNvbXVuaWNhY2nDs24u"];
var ans=[answers1,answers2,answers3,answers4];
var err=["","","",""];
var ima=["","","",""];
var mp4=["","","",""];
var ogv=["","","",""];
var alt=["","","",""];
var info=["","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Prueba_1_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
