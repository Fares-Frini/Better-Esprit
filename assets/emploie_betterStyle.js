if (window.location.href=="https://esprit-tn.com/ESPOnline/Etudiants/Emplois.aspx") {
    console.log("emploi better Style");
    //Table Resize
        var tabemploie=document.getElementsByTagName("tr");
        tabemploie[0].style.fontSize="3em";
        for (let i = 1; i < tabemploie.length; i++) {
            tabemploie[i].style.fontSize="1.5em";            
        }
    //remove div 
        var ufo=document.getElementsByClassName("col-lg-3");
        ufo[0].remove();
        ufo[0].remove();
    //replace table
        var table=document.getElementsByClassName("col-lg-6");
        table[0].style.width="100%";
        table[0].style.position="relative";
        table[0].style.left="20px"
        table[0].style.top="-80px"
    //bring line back
        var tableau=document.getElementById("ContentPlaceHolder1_GridView1");
        tableau.border="1";
        var row =tableau.getElementsByTagName('td');
        for (let i = 0; i < row.length+1; i++) {
            /*row[i].style.borderColor="#CC0000";  
            row[i].style.borderWidth="3px"*/
        }
    //download
        var download=document.getElementsByTagName("td");
        var tr=document.getElementsByTagName("tr");
        var th=document.getElementsByTagName("th");
        tr[0].style.backgroundColor="#B00707";
        for (let i = 1; i < download.length; i+=3) {
            download[i].classList.toggle("download");
            
        }
        for (let i = 1; i < tr.length; i++) {
            tr[i].style.background="none";
            tr[i].style.color="black";
            
        }
    //colspan
        th[0].colSpan="3";
        th[1].remove();
        th[1].remove();
    //emploe innerhtml
        var newday=0;
        var newmonth=0;
        var newyear=0;
        var last;
        for (let i = 0; i < download.length; i+=3) {
            if (i%2==0) {
                download[i].style.backgroundColor="white";
            }else
            {
                download[i].style.backgroundColor="#D3D3D3";
            }
            var day =download[i].innerHTML.substring(24, 26);
            var month =download[i].innerHTML.substring(27, 29);
            var year =download[i].innerHTML.substring(32, 34);
            download[i].innerHTML="Emploie du Temps à partir du: ";
            const para = document.createElement("span");
            const node = document.createTextNode(day+"/"+month+"/20"+year+"  ");
            para.appendChild(node);
            download[i].appendChild(para);     
            download[i].getElementsByTagName("span")[0].style.fontWeight="bold"     
            if (year>newyear) {
                newday=day;
                newmonth=month;
                newyear=year;
                last=i;
            }else {
                if (month>newmonth && year==newyear) {
                    newday=day;
                    newmonth=month;
                    newyear=year;
                    last=i;
                } else {
                    if (day>newday && year==newyear && newmonth==month) {
                        newday=day;
                        newmonth=month;
                        newyear=year;
                        last=i;
                    }
                }
            }
        }
        //emploie last
        const lastp = document.createElement("span");
        const lastnode = document.createTextNode(" LAST");
        lastp.appendChild(lastnode);
        download[last].appendChild(lastp); 
        download[last].getElementsByTagName("span")[1].classList.toggle("shine");
        //emploie new
        var date =new Date;
        if (date.getDate()<newday) {
            const newp = document.createElement("span");
            const newnode = document.createTextNode("NEW");
            newp.appendChild(newnode);
            download[last].appendChild(newp); 
            download[last].getElementsByTagName("span")[2].classList.toggle("shine");
        }
        //apperçu
        for (let i = 2; i < download.length; i+=3) {
            download[i].getElementsByTagName("a")[0].innerHTML="Aperçu"
            download[i].classList.toggle("apercu");
        }
        //table shadow box
        var table = document.getElementsByTagName("table");
        table[0].classList.toggle("shadow");
        //emploie display
        const newf = document.createElement("iframe");
        var page=document.getElementById("Label3").innerHTML;
        var cr=["1A1","1A10","1A11","1A12","1A13","1A14","1A15","1A16","1A17","1A18","1A19","1A2","1A20","1A21","1A22","1A23","1A24","1A25","1A26","1A27","1A28","1A29","1A3","1A30","1A31","1A32","1A33","1A34","1A35","1A36","1A37","1A38","1A39","1A4","1A40","1A41","1A42","1A43","1A44","1A45","1A46","1A47","1A48","1A49","1A5","1A6","1A7","1A8","1A9","1EM1","1EM2","1EM3","1GC1",
        "2A1","2A10","2A11","2A12","2A13","2A14","2A15","2A16","2A17","2A18","2A19","2A2","2A20","2A21","2A22","2A23","2A24","2A25","2A26","2A27","2A28","2A29","2A3","2A30","2A31","2A32","2A33","2A34","2A35","2A36","2A37","2A38","2A39","2A4","2A5","2A6","2A7","2A8","2A9","2EM1","2EM2","2EM3","2EM4","2GC1","2P1","2P2","2P3","2P4",
        "3A1","3A10","3A11","3A12","3A13","3A14","3A15","3A16","3A17","3A18","3A19","3A2","3A20","3A21","3A22","3A23","3A24","3A25","3A26","3A27","3A28","3A29","3A3","3A30","3A31","3A32","3A33","3A34","3A35","3A36","3A37","3A38","3A39","3A4","3A40","3A41","3A42","3A43","3A44","3A45","3A46","3A47","3A48","3A49","3A5","3A50","3A51","3A52","3A53","3A54","3A6","3A7","3A8","3A9","3B1","3B10","3B11","3B12","3B13","3B14","3B15","3B16","3B2","3B3","3B4","3B5","3B6","3B7","3B8","3B9","3EM1","3EM2","3EM3","3EM4","3EM5","3GC1","3GC2","3IA",
        "4 ARCTIC1","4 ARCTIC2","4 ARCTIC3","4 ARCTIC4","4 ARCTIC5","4 ARCTIC6","4 ARCTIC7","4 ERP-BI1","4 ERP-BI2","4 ERP-BI3","4 ERP-BI4","4 ERP-BI5","4 ERP-BI6","4 ERP-BI7","4 ERP-BI8","4DS1","4DS2","4DS3","4DS4","4DS5","4DS6","4DS7","4DS8","4DS9","4GamiX1","4GamiX2","4GC1","4GC2","4GC3","4GC4","4IA","4INFINI1","4INFINI2","4INFINI3",
        ];                
        var j=0;
        while (page!=cr[j] && j<cr.length) {
            j++;
        }
        j++;
        newf.src="https://firebasestorage.googleapis.com/v0/b/better-esprit.appspot.com/o/emploie.pdf?alt=media&token=9173c10c-071b-4601-a34d-1004d56404e7#toolbar=0&zoom=Fit&page="+j;
        newf.width="700px";
        newf.height="500px";
        var doc =document.getElementsByClassName("col-lg-6");
        doc[0].appendChild(newf); 
        //form modify
        var form=document.getElementById("form");
        console.log(form)
    }