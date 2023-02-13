if (window.location.href=="https://esprit-tn.com/ESPOnline/Etudiants/absenceetud.aspx") {
    
    console.log("absence")
    var absence=document.getElementById("ContentPlaceHolder1_Label6");
    var a=absence.innerHTML;
    if (!isNaN(a)) {
    absence.innerHTML="";
    absence.classList.toggle("total");
    absence.classList.toggle("text-success");       
    const h2 = document.createElement("h2");
    const h2txt = document.createTextNode("Vous avez un Total de ");
    h2.appendChild(h2txt);
    absence.appendChild(h2); 
    const ap = document.createElement("span");
    const anode = document.createTextNode(a);
    ap.appendChild(anode);
    h2.appendChild(ap);
    const newp = document.createElement("span");
    const newnode = document.createTextNode(" absences");
    newp.appendChild(newnode);
    h2.appendChild(newp);
    ap.style.color="red";
    document.getElementById("ContentPlaceHolder1_GridView2").border="1";
    }
}