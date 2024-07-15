//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
let isListen=false;let speech=new SpeechSynthesisUtterance();
var i_1_ali="none";
var i_2_ali="right";
var i_3_ali="none";
var fr_ali=new Array();
$(document).ready(function() {
jQuery.event.special.touchstart = {setup: function(_,ns,handle) {this.addEventListener("touchstart", handle, {passive: !ns.includes("noPreventDefault")});}};
jQuery.event.special.touchmove = {setup: function(_,ns,handle) {this.addEventListener("touchmove", handle, {passive: !ns.includes("noPreventDefault")});}};
$(".audioPlay").keydown(function(e){if (e.which != 9){$(this).click()};})
$("#buttonUp").keydown(function(e) {if (e.which == 27) {$("#nav li ul").css("margin-left","-999em");}if (e.which!=9 && e.which!=13 && e.which!=40 && e.which!=38) {
$("#nav li ul").css("margin-left","0");$("#sub li:first a").focus();$("#sub li:last a").blur(function(){$("#nav li ul").css("margin-left","-999em");})}});
$(".submenu").keydown(function(e) {var actual=$(this).find("a").attr("id");var num=parseInt(actual.substring(2,500).trim());if (e.which!=9 && e.which!=40 && e.which!=38) {$("#nav li ul").css("margin-left","-999em");}
if (e.which==40) {num++;if ($("#s_"+num.toString()).length){setTimeout(function(){$("#s_"+num.toString()).get(0).focus()},1);}}
if (e.which==38) {num--;if ($("#s_"+num.toString()).length){setTimeout(function(){$("#s_"+num.toString()).get(0).focus()},1);}}});
var bWords = document.getElementsByTagName("b");if (bWords.length){for (x=0;x<bWords.length;x++){bWords[x].className="hideB";}}$("#boldBut").click(function() {hideBold();});$("#boldBut").keydown(function(e) {if (e.which!=9) {hideBold();}});
$("#ardoraBody").keydown(function(e){if (e.which==27){var canvas = document.getElementById("ardoraActCanvas");if($("#ardoraActCanvas").is(":visible")){document.getElementById("ardoraActCanvas").style.zIndex=0;document.getElementById("ardoraActCanvas").style["visibility"]="hidden";canvas.width = canvas.width;$("body").css("overflow", "visible");$("#ardoraActCanvas").attr({"width": 2,"height": 2});}}});
$("#i_1").keydown(function(e) {
if (e.which!=9){e.preventDefault();e.stopPropagation();imaUp('Parametro_1_resources/media/imaNormal/ti_Captura_de_pantalla_2024-06-19_171155.png','');}});
$("#i_2").keydown(function(e) {
if (e.which!=9){e.preventDefault();e.stopPropagation();imaUp('Parametro_1_resources/media/imaNormal/ti_Captura_de_pantalla_2024-06-23_185008.png','');}});
$("#i_3").keydown(function(e) {
if (e.which!=9){e.preventDefault();e.stopPropagation();imaUp('Parametro_1_resources/media/imaNormal/ti_ciencias-naturales-cielo-min-e1518721143864-800x408.jpg','');}});
$("iframe").each(function() {fr_ali.push($(this).css("float"));});
do_responsive();$(window).on("resize",function(){do_responsive();});
});
function do_responsive(){$(".imaCenter img").each(function() {var cont = $(this).parent(".imaCenter");var hIma = $(this).height();cont.css("height",hIma);});
$("video").each(function() {$(this).removeClass("videores");});$("video").each(function() {if ($(this).width() > $(window).width() - 50) {$(this).addClass("videores");}});
$('[id^="ardoraEmbed"]').each(function() {$(this).css("width", "auto");});$('[id^="ardoraEmbed"]').each(function() {if ($(this).width() > $(window).width() -10) {$(this).css("width", "100%");}});
var c_i=0;$("iframe").each(function() {$(this).css("margin","10px");$(this).css("transform-origin", "0 0");$(this).css("transform", "scale(1)");$(this).css("float",fr_ali[c_i]);c_i++;});
$("iframe").each(function() {if ($(this).width() > $(window).width()-10) {var sc = 1;while ($(this).width() * sc > $(window).width()-10) {sc = sc - 0.001;};$(this).css("float","none");$(this).css("transform-origin", "0 0");$(this).css("transform", "scale(" + sc.toString() + ")");$(this).css("margin",0);}});
$("img").each(function() {$(this).css("transform-origin", "0 0");$(this).css("transform", "scale(1)");$(this).attr("align",window[$(this).attr("id")+"_ali"]);});
$("img").each(function() {if ($(this).width()>$(window).width()-50){var sc=1;while ($(this).width()*sc>$(window).width()-10){
sc=sc-0.001;};$(this).attr("align","none");$(this).css("transform-origin", "0 0");$(this).css("transform", "scale(" + sc.toString() + ")");if ($(this).parent().hasClass("imaCenter")){$(this).parent().css("height",$(this).height()*sc)}}});}
function hideBold(){var bWords=document.getElementsByTagName("b");if (bWords.length){if ((bWords[0].className=="") || (bWords[0].className=="showB")){
for (x=0;x<bWords.length;x++){bWords[x].className="hideB";}}else{for (x=0;x<bWords.length;x++){bWords[x].className="showB";}}}}
function imaUp(ima, overlayText) {if (document.getElementById("miOverlayDiv")) {document.body.removeChild(document.getElementById("miOverlayDiv"));}else{var scale=1;var maxWidth=790* scale;var maxHeight=450* scale;while (maxWidth > window.innerWidth || maxHeight > window.innerHeight) {scale -= 0.1;maxWidth=790* scale;maxHeight =450* scale;}
var overlayDiv=document.createElement("div");overlayDiv.id = "miOverlayDiv";overlayDiv.style.cssText=`position:fixed;top:0;left:0; width: 100%; height: 100%;background-color: rgba(0, 0, 0, 0.5); display: flex;justify-content: center; align-items: center; z-index: 1000;`;
var imageBackgroundDiv = document.createElement("div");imageBackgroundDiv.style.cssText = `width: ${maxWidth}px; height: ${maxHeight}px; display: flex;padding: 5px; justify-content: center; align-items: center;background-color: #fff; margin: 5px; position: relative;`;var image=new Image();image.src=ima;image.style.cssText=`max-width: 100%; max-height: 100%; object-fit: contain;`;imageBackgroundDiv.appendChild(image);overlayDiv.appendChild(imageBackgroundDiv);
if (overlayText.trim().length > 0) {var infoButton = document.createElement("button");infoButton.textContent = "🛈";infoButton.style.cssText = `position: absolute; bottom: 5px; right: 5px; background: transparent;border: none; color: black; font-size:40px; cursor: pointer;`;var textDiv = document.createElement("div");textDiv.textContent = overlayText;textDiv.classList.add("infoText");textDiv.style.display = "none";
infoButton.onclick = function() {if (textDiv.style.display==="none") {textDiv.style.display ="block";infoButton.style.bottom = 'calc(5px + ' + textDiv.offsetHeight + 'px)';} else {textDiv.style.display="none";infoButton.style.bottom = "5px";}};imageBackgroundDiv.appendChild(infoButton);imageBackgroundDiv.appendChild(textDiv);}
overlayDiv.addEventListener("click", function(event) {if (event.target === overlayDiv) {document.body.removeChild(overlayDiv);}});document.body.appendChild(overlayDiv);}}
window.requestAnimationFrame=(function(){return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    || function( callback ){window.setTimeout(callback, 10000 / 60);};})();
function playIt(sound){var file=document.getElementById(sound);file.load();file.play();}
