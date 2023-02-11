console.log("emploi better Style");
if (window.location.href=="https://esprit-tn.com/ESPOnline/Etudiants/Emplois.aspx") {

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
        console.log(download,tr);
        for (let i = 1; i < download.length; i+=3) {
            download[i].classList.toggle("download");
            download[i].innerHTML="Télecharger"
        }
        for (let i = 1; i < tr.length; i++) {
            tr[i].style.background="none";
            tr[i].style.color="black";
            console.log(tr[i])
            
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
        console.log(last);
        const lastp = document.createElement("span");
        const lastnode = document.createTextNode(" LAST");
        lastp.appendChild(lastnode);
        download[last].appendChild(lastp); 
        download[last].getElementsByTagName("span")[1].classList.toggle("shine");
        //emploie new
        var date =new Date;
        if (date.getDate()<newday) {
            const newp = document.createElement("span");
            const newnode = document.createTextNode(" NEW");
            newp.appendChild(newnode);
            download[last].appendChild(newp); 
            download[last].getElementsByTagName("span")[2].classList.toggle("shine");
        }
        //apperçu
        for (let i = 2; i < download.length; i+=3) {
            download[i].innerHTML="Aperçu"
            download[i].classList.toggle("apercu");
        }
        //table shadow box
        var table = document.getElementsByTagName("table");
        table[0].classList.toggle("shadow");
}