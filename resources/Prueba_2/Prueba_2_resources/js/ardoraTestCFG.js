//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=260; timeIni=260; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=50; scoreInc=10; scoreDec=10
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
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
var timeOnMessage=5; messageOk="Bien Hecho"; messageTime=""; messageError="Mejor para la Proxima!"; messageErrorG="Mejor para la Proxima!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UHJ1ZWJhXzI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. El sistema nervioso está conformado por el sistema nervioso central y el sistema nervioso","2. La agrupación de ramificaciones al final del axón, en la neurona, se llama","3. . ¿Cómo se denomina la región de acercamiento entre una terminal del axón y una<br>célula receptora?","4. ¿Qué estructuras constituyen el encéfalo?","5. Lee la siguiente definición<br>Sistema constituido por nervios que salen de la médula espinal<br>hacia todos los tejidos y sistemas del organismo."];
var answers1=["MXBlcmlmw6lyaWNvLg==","MHNvbcOhdGljbw==","MGF1dMOzbm9tbw==","MGVuY2Vmw6FsaWNvLg=="];
var answers2=["MXRlcm1pbmFsIGRlbCBheMOzbi4=","MGF4w7NuLg==","MGN1ZXJwbyBjZWx1bGFyLg==","MHZhaW5hIGRlIG1pZWxpbmEu"];
var answers3=["MVNpbmFwc2lzLg==","ME1pZWxpbmEu","MERlbmRyaXRh","ME5ldXJvdHJhbnNtaXNvcg=="];
var answers4=["MUNlcmVicm8sIGNlcmViZWxvIHkgdHJvbmNvIGVuY2Vmw6FsaWNv","MENlcmVicm8sIGNlcmViZWxvIHkgbcOpZHVsYSBlc3BpbmFsLg==","MENlcmVicm8sIG3DqWR1bGEgZXNwaW5hbCB5IHRyb25jbyBlbmNlZsOhbGljby4=","ME3DqWR1bGEgZXNwaW5hbCwgY2VyZWJlbG8geSB0cm9uY28gZW5jZWbDoWxpY28u"];
var answers5=["MU5lcnZpb3NvIHBlcmlmw6lyaWNvLg==","ME5lcnZpb3NvIGNlbnRyYWwu","ME5lcnZpb3NvIHNvbcOhdGljby4=","ME5lcnZpb3NvIGF1dMOzbm9tby4="];
var ans=[answers1,answers2,answers3,answers4,answers5];
var err=["","","","",""];
var ima=["","","","",""];
var mp4=["","","","",""];
var ogv=["","","","",""];
var alt=["","","","",""];
var info=["","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Prueba_2_resources/media/";
var tiRandOrder=true;
var iT=0;var r_order=[];
