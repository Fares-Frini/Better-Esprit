if (window.location.href=="https://esprit-tn.com/ESPOnline/Etudiants/Resultat2021.aspx") {
    console.log("content.js");


function tableToJson(table) {
    var data = [];

    
    var headers = [];
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
    }

    
    for (var i = 1; i < table.rows.length; i++) {

        var tableRow = table.rows[i];
        var rowData = {};

        for (var j = 0; j < tableRow.cells.length; j++) {

            rowData[headers[j]] = tableRow.cells[j].innerHTML;

        }
        data.push(rowData);
    }

    data.forEach(x => {
        x.coef = parseFloat(x.coef.replace(',', '.'))
        x.note_exam = parseFloat(x.note_exam.replace(',', '.'))
        x.note_cc = parseFloat(x.note_cc.replace(',', '.'))
        x.note_tp = parseFloat(x.note_tp.replace(',', '.'))
    })
    return data;
}

var table = document.getElementById('ContentPlaceHolder1_GridView1')

var data = tableToJson(table)

var sumCoef = 0

data.forEach(e => sumCoef += e.coef)

function calculMoyenne(dataS, coefS) {
    var total = 0;
    moyMat = [];
    dataS.forEach(x => {
        if (isNaN(x.note_tp)) {
            if (isNaN(x.note_cc)) {
                x.moyenne = x.note_exam
                total += x.note_exam * x.coef
            }
            else {
                x.moyenne = (x.note_exam * 0.6 + x.note_cc * 0.4)
                moyMat.push((x.note_exam * 0.6) + (x.note_cc * 0.4));
                total += (x.note_exam * 0.6 + x.note_cc * 0.4) * x.coef
            }
        }
        else if (isNaN(x.note_cc)) {
            x.moyenne = x.note_exam * 0.8 + x.note_tp * 0.2
            moyMat.push((x.note_exam * 0.1) + (x.note_tp * 0.2));
            total += (x.note_exam * 0.8 + x.note_tp * 0.2) * x.coef
        }
        else {
            x.moyenne = (x.note_exam * 0.5 + x.note_cc * 0.3 + x.note_tp * 0.2)
            moyMat.push(x.note_exam * 0.5 + x.note_cc * 0.3 + x.note_tp * 0.2)
            total += (x.note_exam * 0.5 + x.note_cc * 0.3 + x.note_tp * 0.2) * x.coef
        }
    })
    dataS.push({
        designation : 'Moyenne',
        coef : coefS,
        nom_ens : '',
        note_cc: '',
        note_tp: '',
        note_exam: '',
        moyenne: total / coefS ,

    })
    return dataS
}

var newData = calculMoyenne(data, sumCoef)

function populateTable(data) {

    
   
    var tableContent = '<tr style="color:White;background-color:#A80000;font-weight:bold;"> <th scope="col">DESIGNATION</th><th scope="col">COEF</th><th scope="col">NOM_ENS</th><th scope="col">NOTE_CC</th><th scope="col">NOTE_TP</th><th scope="col">NOTE_EXAM</th><th scope="col">Moyenne</th></tr>';

    data.forEach(x => {
        tableContent += '<tr>';
        tableContent += '<td>' + x.designation + '</td>';
        tableContent += '<td>' + x.coef + '</td>';
        tableContent += '<td>' + x.nom_ens + '</td>';
        tableContent += isNaN(x.note_cc) ? '<td></td>' : '<td>' + x.note_cc + '</td>' ;
        tableContent += isNaN(x.note_tp) ? '<td></td>' : '<td>' +  x.note_tp + '</td>'; 
        tableContent += isNaN(x.note_exam) ? '<td></td>' : '<td>' +  x.note_exam + '</td>'; 
        tableContent += x.moyenne > 8 ? '<td style="background-color:green">' + x.moyenne.toFixed(2) + '</td>' : '<td style="background-color:red">' + x.moyenne.toFixed(2) + '</td>'; 
        tableContent += '</tr>';
    })
    table.innerHTML=tableContent;
};

populateTable(newData)
table.rows[0].cells[2].innerHTML="Nom Enseignant";
table.rows[0].cells[3].innerHTML="Note Ds/Test";
table.rows[0].cells[4].innerHTML="Note CC";
table.rows[0].cells[5].innerHTML="Note Examen";


for (var i = 1; i < table.rows.length; i++) {


    for (var j = 3; j < table.rows[i].cells.length; j++) {
        
        if (table.rows[i].cells[j].innerHTML=="")
        {
            table.rows[i].cells[j].innerHTML="—"
            
             
        }

    }
}
table.style.border="2px solid";
table.style.borderCollapse="collapse";
table.style.fontSize="1.2em";
table.style.boxShadow="0 0 20px rgba(0, 0, 0, 0.15)";
var tableligne=document.querySelectorAll('tr');
for (let i = 1; i < table.rows.length; i+=2) {
    tableligne[i].style.backgroundColor="#D3D3D3";
    
}
for (let i = 2; i < table.rows.length; i+=2) {
    tableligne[i].style.backgroundColor="#c0c0c0";
    
}

tableligne[0].style.fontSize = "1.3em";   

var Nom=document.getElementById("Label2")  ;
Nom.style.padding="10px";
Nom.style.boxShadow=" rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"; 

for (let i = 0; i < document.getElementsByTagName("br").length; i++) {

}
}


