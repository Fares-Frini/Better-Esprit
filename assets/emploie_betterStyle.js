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
        var cr=["1A1","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1A","1EM1","1EM2","1EM3","1GC1",
        "2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2A","2EM1","2EM2","2EM3","2EM4","2GC1","2P1","2P2","2P3","2P4",
        "3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3A","3B1","3B10","3B11","3B12","3B13","3B14","3B15","3B16","3B2","3B3","3B4","3B5","3B","3B","3B","3B",
        ];                
        var j=0;
        while (page!=cr[j] && j<cr.length) {
            page=j;
            j++;
        }
        page=167;
        newf.src="https://firebasestorage.googleapis.com/v0/b/better-esprit.appspot.com/o/emploie.pdf?alt=media&token=9173c10c-071b-4601-a34d-1004d56404e7#toolbar=0&zoom=Fit&page="+page;
        newf.width="700px";
        newf.height="500px";
        var doc =document.getElementsByClassName("col-lg-6");
        doc[0].appendChild(newf); 
        //form modify
        var form=document.getElementById("form");
        console.log(form)
    }