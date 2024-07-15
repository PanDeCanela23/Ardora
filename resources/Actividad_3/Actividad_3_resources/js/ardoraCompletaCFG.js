//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=70; scoreInc=10; scoreDec=5
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFCCFF"; colorButton="#FFFF80"; colorText="#000000"; colorSele="#FFD9B3";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hecho!"; messageTime=""; messageError="Vuelve a intentarlo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p><div style=\"margin-top: 20px;\"> </p><p>         <p style=\"font-size: 18px; color: #555;\"> </p><p>             1. Las investigaciones científicas son <span style=\"font-weight: bold; color: #d9534f;\"><input aria-label="Item 1" type="text" name="item1" id="item1" class="ardoraDropInput" readonly></span> porque se apegan a los pasos del <span style=\"font-weight: bold; color: #d9534f;\"><input aria-label="Item 2" type="text" name="item2" id="item2" class="ardoraDropInput" readonly></span>. </p><p>         </p> </p><p>         </div> </p><p> </p>','<p><p style=\"font-size: 18px; color: #555;\"> </p><p>             2. Las investigaciones científicas son <span style=\"font-weight: bold; color: #d9534f;\"><input aria-label="Item 3" type="text" name="item3" id="item3" class="ardoraDropInput" readonly></span> porque se basan en <span style=\"font-weight: bold; color: #d9534f;\"><input aria-label="Item 4" type="text" name="item4" id="item4" class="ardoraDropInput" readonly></span> y no en opiniones. </p><p>         </p> </p><p>  </p><p> </p>','<p><p style=\"font-size: 18px; color: #555;\"> </p><p>             3. Los experimentos de las investigaciones científicas son <span style=\"font-weight: bold; color: #d9534f;\"><input aria-label="Item 5" type="text" name="item5" id="item5" class="ardoraDropInput" readonly></span> porque cualquier persona puede repetir el experimento. </p><p>         </p> </p><p>  </p><p> </p>','<p><p style=\"font-size: 18px; color: #555;\"> </p><p>             4. Los conocimientos científicos son <span style=\"font-weight: bold; color: #d9534f;\"><input aria-label="Item 6" type="text" name="item6" id="item6" class="ardoraDropInput" readonly></span> para crear <span style=\"font-weight: bold; color: #d9534f;\"><input aria-label="Item 7" type="text" name="item7" id="item7" class="ardoraDropInput" readonly></span> e ideas capaces de resolver problemas que enfrenta la humanidad. </p><p>         </p> </p><p>  </p><p> </p>'];
var answers=["Hechos","Aplicables","Rigurosas","Objetivas","Método científico","Replicables","Herramientas"];
var a=["NA==","Ng==","MQ==","Mw==","Mg==","NQ==","Nw=="];
var itemCorr=["0","0","0","0","0","0","0"];
var itemHelp=["","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="QWN0aXZpZGFkXzM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fHelp="Verdana, Geneva, sans-serif";
var imaW=["300","300","300","300"];
var imaH=["225","225","225","225"];
var info=["","","",""];
