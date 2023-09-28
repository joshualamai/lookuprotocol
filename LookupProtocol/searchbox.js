/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


           var y;
           var i;
           var temp = 0;
           var x;

           
           const id_arr = new Array(100);
           const id_arr1 = new Array(100);
           const final_array = new Array(100);
           
           function checkInput(){
               if(document.getElementById("cat").innerHTML === ""){
                   alert("Sorry Invaild product code. Please try again");
                   document.getElementById("table1").style.visibility = "hidden";
                   
                   
               }
            }
           
            function loadXMLDoc() {
            document.getElementById("cat").innerHTML = "";
            document.getElementById("table1").style.visibility = "hidden";
            var xmlhttp = new XMLHttpRequest();
            var xmlhttp1 = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
  
                // Request finished and response 
                // is ready and Status is "OK"
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                    searchBox(this);
                    
                }
            };
            
            xmlhttp1.onreadystatechange = function () {
  
                // Request finished and response 
                // is ready and Status is "OK"
                if (xmlhttp1.readyState === 4 && xmlhttp1.status === 200) {
                    searchBox(this);

                }
            };
            
            xmlhttp.open("GET", "gameShop.xml", true);
            xmlhttp1.open("GET","gameShop2.xml",true);
            xmlhttp.send();
            xmlhttp1.send();

           
        }
        

            function searchBox(xml) {
            
            var i;
            var xmlDoc = xml.responseXML;
            
            var x = xmlDoc.getElementsByTagName("game");
            
            

                for (i = 0; i < x.length;i++) 
                {
                    
                 id_arr[i]= x[i].getAttribute("id");
                 
                }
                    
                    check(x);
                }

            
                     function check(x)
                {
                    var i = 0;
                    var input = document.getElementById("data").value;
                    
                 for(i=0;i<id_arr.length;i++)
                 {
                     if(input === id_arr[i])
                     {
                        
                         document.getElementById("cat").innerHTML = x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue;
                         
                        document.getElementById("gname").innerHTML = x[i].getElementsByTagName("gamename")[0].childNodes[0].nodeValue;
                        document.getElementById("desc").innerHTML = x[i].getElementsByTagName("desc")[0].childNodes[0].nodeValue;                   
                        document.getElementById("stock").innerHTML = x[i].getElementsByTagName("count")[0].childNodes[0].nodeValue;
                        document.getElementById("price").innerHTML = x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +" $";
                        if(x[i].getElementsByTagName("platformpc")[0].childNodes[0].nodeValue === "Yes"){
                            document.getElementById("pc").innerHTML = "✓";
                        }
                        else{
                            document.getElementById("pc").innerHTML = "❌";
                        }
                        
                        if(x[i].getElementsByTagName("platformxbox")[0].childNodes[0].nodeValue === "Yes"){
                            document.getElementById("xbox").innerHTML = "✓";
                        }
                        else{
                            document.getElementById("xbox").innerHTML = "❌";
                        }
                        
                        if(x[i].getElementsByTagName("platformps")[0].childNodes[0].nodeValue === "Yes"){
                            document.getElementById("ps").innerHTML = "✓";
                        }
                        else{
                            document.getElementById("ps").innerHTML = "❌";
                        }
                        
                        
                        document.getElementById("table1").style.visibility = "visible";
                        
                        
                        
                        break;
                        
                        }
     
                    }
                    temp++;
                    if(temp % 2 === 0){
                        
                        checkInput();
                    }
                    
                }