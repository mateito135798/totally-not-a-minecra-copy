var mar=new fabric.Canvas("id");
 Y=10;
 X=10;
 Z=30;
 A=30;
var B="";
var C="";


function D(){
    fabric.Image.fromURL("player.png",function(Img){
    C=Img;
    C.scaleToWidth(150);
    C.scaleToHeight(140);
    C.set({
top:Y,
left:X
    });
    mar.add(C);
    });
};

function E(Q){
    fabric.Image.fromURL(Q,function(Img){
    B=Img;
    B.scaleToWidth(Z);
    B.scaleToHeight(A);
    B.set({
top:Y,
left:X
    });
    mar.add(B);
    });
}
window.addEventListener("keydown",tecla);
function tecla(e){
var tecla_presionada=e.keyCode;
if (tecla_presionada=="38"){
    arriba();
};
if (tecla_presionada=="40"){
    abajo();
};
if (tecla_presionada=="39"){
    derecha();
};
if (tecla_presionada=="37"){
    izquierda();
};

if (tecla_presionada=="89"){
    Q("yellow_wall.png");
};

if (tecla_presionada=="87"){
    Q("wall.jpg");
};

if (tecla_presionada=="85"){
    Q("unique.png");
};

if (tecla_presionada=="84"){
    Q("trunk.jpg");
};

if (tecla_presionada=="82"){
    Q("roof.jpg");
};

if (tecla_presionada=="49"){
    Q("player.png");
};

if (tecla_presionada=="76"){
    Q("light_green.png");
};

if (tecla_presionada=="71"){
    Q("ground.png");
};

if (tecla_presionada=="70"){
    Q("dark_green.png");
};

if (tecla_presionada=="67"){
    Q("cloud.jpg");
};
if (e.shiftKey==true && tecla_presionada=="107")
{
Z=Z+10;
A=A+10;
document.getElementById("ancho_actual").innerHTML=A;
document.getElementById("alto_actual").innerHTML=Z;

}
//un espaciador simple
if (e.shiftKey==true && tecla_presionada=="109")
{
Z=Z-10;
A=A-10;

document.getElementById("ancho_actual").innerHTML=A;
document.getElementById("alto_actual").innerHTML=Z;

}
};
function arriba(){
if(Y>=0){
Y=Y-Z;
mar.remove(C);
D();
};
};

function abajo(){
if(Y<=500){
Y=Y+Z;
mar.remove(C);
D();
};
};
    
function izquierda(){
    if(X>=0){
    X=X-A;
    mar.remove(C);
    D();
    };
    };

    function derecha(){
        if(X<=700){
        X=X+A;
        mar.remove(C);
        D();
        };
        };
