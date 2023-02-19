if (window.location.href=="https://esprit-tn.com/ESPOnline/Online/default.aspx" || window.location.href=="https://esprit-tn.com/esponline/online/default.aspx?aspxerrorpath=/ESPOnline/Online/default.aspx" || window.location.href=="https://esprit-tn.com/ESPOnline/Online/default.aspx#tabs-2") {
console.log("login Better Style");
var form = document.getElementsByTagName("form");
form[0].classList.add("form");
var body = document.getElementsByTagName("body");
var html = document.getElementsByTagName("html");
html[0].setAttribute("id","particles-js");
body[0].classList.add("body");
html[0].classList.add("html");
var inptident=document.getElementById("ContentPlaceHolder1_TextBox3");
var inptmdp=document.getElementById("ContentPlaceHolder1_TextBox7");
var spanident=document.getElementById("ContentPlaceHolder1_Label7");
var spancin=document.getElementById("ContentPlaceHolder1_RequiredFieldValidator3");
var suivant=document.getElementById("ContentPlaceHolder1_Button3");
var conx=document.getElementById("ContentPlaceHolder1_ButtonEtudiant");
var mdptitle=document.getElementById("ContentPlaceHolder1_Label8");
var formgroup= document.getElementsByClassName("form-group");
if(suivant!=null)
{
suivant.classList.add("suivant");
inptident.classList.add("inputident");
spanident.classList.add("spanident");
spancin.classList.add("spancin");
}
if(inptmdp!=null){
inptmdp.classList.add("inputmdp");
conx.classList.add("connexion");
formgroup[9].style.width="400px";
mdptitle.classList.add("mdptitle");
document.getElementById("ContentPlaceHolder1_LinkButton2").classList.add("mdpoublie");
}

var cont=document.getElementById("tabs");
console.log(cont);
cont.classList.add("ident");
cont.classList.remove("ui-widget-content");
const inptdiv=document.getElementById("ContentPlaceHolder1_Panel2");


    //DELETE
    document.getElementById("ImageButton1").remove();
    document.getElementById("Label1").remove();
    document.getElementById("ANNEEUN").remove();
    document.getElementsByClassName("row")[0].remove();
    document.getElementsByClassName("ui-tabs-nav")[0].remove();
    document.getElementsByClassName("col-sm-3")[4].remove();
    document.getElementsByClassName("form-signin-heading")[2].remove();
    document.getElementsByClassName("style1")[2].remove();
    document.getElementsByClassName("modal-footer")[0].remove();

    //integrate logo 
    const logo =document.createElement("img");
    html[0].appendChild(logo);
    logo.src="https://esprit-tn.com/ESPOnline/Contents/Img/logo.png";
    logo.classList.add("logo");

    //integrate title 
    const titlec=document.createElement("h2");
    const titlecnode = document.createTextNode("COUR DU JOUR");
    titlec.appendChild(titlecnode);
    html[0].appendChild(titlec);
    titlec.classList.add("titlec");

    //integrate year
    const year=document.createElement("h1");
    const yearnode = document.createTextNode("2022/2023");
    year.appendChild(yearnode);
    html[0].appendChild(year);
    year.classList.add("year");
    
    //integrate svg
    const svgetud=document.createElement("object");
    cont.appendChild(svgetud);
    svgetud.data="https://firebasestorage.googleapis.com/v0/b/better-esprit.appspot.com/o/espace_etud.svg?alt=media&token=d5c6ac02-96f3-4948-82d3-1b96d2225348"
    svgetud.classList.add("svgetud");
    
    //integrate title
    const title=document.createElement("h2");
    const titlenode = document.createTextNode("ESPACE ETUDIANT");
    title.appendChild(titlenode);
    inptdiv.insertBefore(title,inptdiv.firstChild);
    title.classList.add("title");
    
}



