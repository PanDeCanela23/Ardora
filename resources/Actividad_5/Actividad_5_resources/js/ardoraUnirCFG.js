//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=3;
var score=0; scoreMax=10; scoreInc=10; scoreDec=5
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFCEFF"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hecho"; messageTime=""; messageError="Vuelve a intentarlo"; messageErrorG="Vuelve a intentarlo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWN0aXZpZGFkXzU="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["QWx6aGVpbWVy", "VGlwbyBkZSBkZW1lbmNpYQ=="],["RGVwcmVzacOzbg==", "RXN0YWRvIGRlIGFuaW1vLHRyaXN0ZXph"],["RXBpbGVwc2lh", "QWx0ZXJhY2lvbiBjZXJlYnJhbA=="],["QW5zaWVkYWQ=", "UGFuaWNvLG1pZWRvIGV4Y2VzaXZvcw=="]];
var c=[[9,16],[9,24],[9,19],[8,22]];
var con1=["Epilepsia","Alzheimer","Depresión","Ansiedad"];
var con2=["Panico,miedo excesivos","Estado de animo,tristeza","Alteracion cerebral","Tipo de demencia"];
var sel1=""; join1=[]; join2=[];
