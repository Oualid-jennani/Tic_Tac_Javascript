var User1 = document.getElementById("User1"),
    nom1 = document.getElementById("nom1"),
    User2 = document.getElementById("User2"),
    nom2 = document.getElementById("nom2"),
    Checked = document.getElementsByName("Pemiere"),
    Jeux = document.getElementById("Jeux"),
    SL1 = document.getElementById("SL1"),
    SL2 = document.getElementById("SL2"),
    Star = document.getElementById("Star"),
    Load = document.getElementById("Load"),
    Exit = document.getElementById("Exit"),
    LB1 = document.getElementById("LB1"),
    LB2 = document.getElementById("LB2"),
    GO = document.getElementById("Go"),
    D1 = document.getElementById("D1"),
    D2 = document.getElementById("D2"),
    D3 = document.getElementById("D3"),
    D4 = document.getElementById("D4"),
    D5 = document.getElementById("D5"),
    D6 = document.getElementById("D6"),
    D7 = document.getElementById("D7"),
    D8 = document.getElementById("D8"),
    D9 = document.getElementById("D9"),
    Role = document.getElementById("nameTour");
var snd = new Audio("audio/audio.mp3");
var Tour = "0",
    bool = 1,
    star = 0,
    J1 = 0,
    J2 = 0,
    Default = 0,
    stop = 0;

Exit.onclick = function(){
    "use strict";
    Clear();
    nom1.value = "";
    nom2.value = "";
    J1 = 0;J2 = 0;
    LB1.innerHTML = "----------";
    LB2.innerHTML = "----------";
    Load.style.display = "none";
    Jeux.style.display = "none";
    Star.style.display = "block";
    
    nom1.disabled = false;
    nom2.disabled = false;
};
Star.onclick = function(){
    "use strict";
    
    if( SL1.value === SL2.value ) {
            SL1.style.color = "red";
            SL2.style.color = "red";
    }
    else{
        if (nom1.value == "" || nom1.value == ""){
            nom1.value = "Par défaut";
            nom2.value = "Par défaut";
        }
        nom1.disabled = true;
        nom2.disabled = true;
        Load.style.display = "block";
        Jeux.style.display = "block";
        this.style.display = "none";
    }
};


SL1.onchange = Clear;
SL2.onchange = Clear;

function StarJeux(ID) {
    "use strict";
    if (nom1.value != "" && nom2.value != "" && nom1.value != "Par défaut" && nom2.value != "Par défaut"){
        Default = 0;
        // 2 joeurs
        var Div = document.getElementById(ID);
        if(star == 0){
            var Pemiere = document.querySelectorAll('#Pemiere:checked');
            Tour = Pemiere[0].value;
            star++;
        }

        if(Tour == "1" && Div.innerHTML == ""){Role.innerHTML = "Role de : " + nom2.value;}
        else if(Tour == "2" && Div.innerHTML == "") {Role.innerHTML = "Role de : " + nom1.value;};

        var SL1 = document.getElementById("SL1"),
            SL2 = document.getElementById("SL2");
        if (bool == 1) {
            if(Tour == "1" && Div.innerHTML == ""){
                
                Tour = "2";
                document.getElementById(ID).innerHTML = SL1.value;
            }
            else if(Tour == "2" && Div.innerHTML == ""){
                document.getElementById(ID).innerHTML = SL2.value;
                Tour = "1";
            }
            Game("D1","D2","D3");
            Game("D4","D5","D6");
            Game("D7","D8","D9");
            Game("D1","D4","D7");
            Game("D2","D5","D8");
            Game("D3","D6","D9");
            Game("D1","D5","D9");
            Game("D3","D5","D7");
        } 
        
    }else {
        Default = 1;
        // 2 joeurs
        
        if(star == 0){
            Tour = "1";
            star++;
        }
        

        var SL1 = document.getElementById("SL1"),
            SL2 = document.getElementById("SL2");
        if (bool == 1) {
            if(Tour == "1"){
                var Div = document.getElementById(ID);
                if(document.getElementById(ID).innerHTML == ""){
                    document.getElementById(ID).innerHTML = SL1.value;
                    Tour = "2";
                }
                
                StarJeux("default");
                
            }
            else if(Tour == "2"){
                JeuxDefault("D1","D2","D3","D4","D5","D6","D7","D8","D9");
                
                Tour = "1";
            }
            Game("D1","D2","D3");
            Game("D4","D5","D6");
            Game("D7","D8","D9");
            Game("D1","D4","D7");
            Game("D2","D5","D8");
            Game("D3","D6","D9");
            Game("D1","D5","D9");
            Game("D3","D5","D7");
            
        } 
    }
    


}
function Game (ID1,ID2,ID3){
    "use strict";
    var id1 = document.getElementById(ID1),
        id2 = document.getElementById(ID2),
        id3 = document.getElementById(ID3);
    if(id1.innerHTML != "" && id1.innerHTML == id2.innerHTML && id2.innerHTML == id3.innerHTML){
        id1.style.color="chartreuse";
        id2.style.color="chartreuse";
        id3.style.color="chartreuse";
        
        Role.innerHTML = "----------";
        bool = 0;
        star = 0;
        if(Default == 0) {
            if(Tour == "1"){
                J2++;
                LB1.innerHTML = "il y a gagné "+ J1 +" fois";
                LB2.innerHTML = "il y a gagné "+ J2 +" fois";
                
            }
            if(Tour == "2"){
                J1++;
                LB1.innerHTML = "il y a gagné "+ J1 +" fois";
                LB2.innerHTML = "il y a gagné "+ J2 +" fois";
  
            } 
        }
        else {
            LB1.innerHTML = "----------"
            LB2.innerHTML = "----------"
            
        }
        snd.play();
    }
    
}



function JeuxDefault(ID1,ID2,ID3,ID4,ID5,ID6,ID7,ID8,ID9) {
    "use strict";
    var id1 = document.getElementById(ID1),
        id2 = document.getElementById(ID2),
        id3 = document.getElementById(ID3),
        id4 = document.getElementById(ID4),
        id5 = document.getElementById(ID5),
        id6 = document.getElementById(ID6),
        id7 = document.getElementById(ID7),
        id8 = document.getElementById(ID8),
        id9 = document.getElementById(ID9),
        S1 = SL1.value.toString(),
        S2 = SL2.value.toString();
    
    
    //*****************************************************************************************************************************
    //*****************************************************************************************************************************

    if(stop == 0){
        
        if(id1.innerHTML == S2 && id2.innerHTML == S2 && id.innerHTML == ""){id3.innerHTML = S2;stop = 1;}
        else if(id1.innerHTML == S2 && id3.innerHTML == S2 && id2.innerHTML == ""){id2.innerHTML = S2;stop = 1;}
        else if(id2.innerHTML == S2 && id3.innerHTML == S2 && id1.innerHTML == ""){id1.innerHTML = S2;stop = 1;}

        else if(id4.innerHTML == S2 && id5.innerHTML == S2 && id6.innerHTML == ""){id6.innerHTML = S2;stop = 1;}
        else if(id4.innerHTML == S2 && id6.innerHTML == S2 && id5.innerHTML == ""){id5.innerHTML = S2;stop = 1;}
        else if(id5.innerHTML == S2 && id6.innerHTML == S2 && id4.innerHTML == ""){id4.innerHTML = S2;stop = 1;}

        else if(id7.innerHTML == S2 && id8.innerHTML == S2 && id9.innerHTML == ""){id9.innerHTML = S2;stop = 1;}
        else if(id7.innerHTML == S2 && id9.innerHTML == S2 && id8.innerHTML == ""){id8.innerHTML = S2;stop = 1;}
        else if(id8.innerHTML == S2 && id9.innerHTML == S2 && id7.innerHTML == ""){id7.innerHTML = S2;stop = 1;}
        //---------------------------------------------------------------------------------
        else if(id1.innerHTML == S2 && id4.innerHTML == S2 && id7.innerHTML == ""){id7.innerHTML = S2;stop = 1;}
        else if(id1.innerHTML == S2 && id7.innerHTML == S2 && id4.innerHTML == ""){id4.innerHTML = S2;stop = 1;}
        else if(id4.innerHTML == S2 && id7.innerHTML == S2 && id1.innerHTML == ""){id1.innerHTML = S2;stop = 1;}

        else if(id2.innerHTML == S2 && id5.innerHTML == S2 && id8.innerHTML == ""){id8.innerHTML = S2;stop = 1;}
        else if(id2.innerHTML == S2 && id8.innerHTML == S2 && id5.innerHTML == ""){id5.innerHTML = S2;stop = 1;}
        else if(id5.innerHTML == S2 && id8.innerHTML == S2 && id2.innerHTML == ""){id2.innerHTML = S2;stop = 1;}

        else if(id3.innerHTML == S2 && id6.innerHTML == S2 && id9.innerHTML == ""){id9.innerHTML = S2;stop = 1;}
        else if(id3.innerHTML == S2 && id9.innerHTML == S2 && id6.innerHTML == ""){id6.innerHTML = S2;stop = 1;}
        else if(id6.innerHTML == S2 && id9.innerHTML == S2 && id3.innerHTML == ""){id3.innerHTML = S2;stop = 1;}
        //---------------------------------------------------------------------------------
        else if(id1.innerHTML == S2 && id5.innerHTML == S2 && id9.innerHTML == ""){id9.innerHTML = S2;stop = 1;}
        else if(id1.innerHTML == S2 && id9.innerHTML == S2 && id5.innerHTML == ""){id5.innerHTML = S2;stop = 1;}
        else if(id5.innerHTML == S2 && id9.innerHTML == S2 && id1.innerHTML == ""){id1.innerHTML = S2;stop = 1;}

        else if(id3.innerHTML == S2 && id5.innerHTML == S2 && id7.innerHTML == ""){id7.innerHTML = S2;stop = 1;}
        else if(id3.innerHTML == S2 && id7.innerHTML == S2 && id5.innerHTML == ""){id5.innerHTML = S2;stop = 1;}
        else if(id5.innerHTML == S2 && id7.innerHTML == S2 && id3.innerHTML == ""){id3.innerHTML = S2;stop = 1;}
        //*****************************************************************************************************************************
        //*****************************************************************************************************************************
        else if(id1.innerHTML == S1 && id2.innerHTML == S1 && id3.innerHTML == ""){id3.innerHTML = S2;stop = 1;}
        else if(id1.innerHTML == S1 && id3.innerHTML == S1 && id2.innerHTML == ""){id2.innerHTML = S2;stop = 1;}
        else if(id2.innerHTML == S1 && id3.innerHTML == S1 && id1.innerHTML == ""){id1.innerHTML = S2;stop = 1;}

        else if(id4.innerHTML == S1 && id5.innerHTML == S1 && id6.innerHTML == ""){id6.innerHTML = S2;stop = 1;}
        else if(id4.innerHTML == S1 && id6.innerHTML == S1 && id5.innerHTML == ""){id5.innerHTML = S2;stop = 1;}
        else if(id5.innerHTML == S1 && id6.innerHTML == S1 && id2.innerHTML == ""){id4.innerHTML = S2;stop = 1;}

        else if(id7.innerHTML == S1 && id8.innerHTML == S1 && id9.innerHTML == ""){id9.innerHTML = S2;stop = 1;}
        else if(id7.innerHTML == S1 && id9.innerHTML == S1 && id8.innerHTML == ""){id8.innerHTML = S2;stop = 1;}
        else if(id8.innerHTML == S1 && id9.innerHTML == S1 && id7.innerHTML == ""){id7.innerHTML = S2;stop = 1;}
        //---------------------------------------------------------------------------------
        else if(id1.innerHTML == S1 && id4.innerHTML == S1 && id7.innerHTML == ""){id7.innerHTML = S2;stop = 1;}
        else if(id1.innerHTML == S1 && id7.innerHTML == S1 && id4.innerHTML == ""){id4.innerHTML = S2;stop = 1;}
        else if(id4.innerHTML == S1 && id7.innerHTML == S1 && id1.innerHTML == ""){id1.innerHTML = S2;stop = 1;}

        else if(id2.innerHTML == S1 && id5.innerHTML == S1 && id8.innerHTML == ""){id8.innerHTML = S2;stop = 1;}
        else if(id2.innerHTML == S1 && id8.innerHTML == S1 && id5.innerHTML == ""){id5.innerHTML = S2;stop = 1;}
        else if(id5.innerHTML == S1 && id8.innerHTML == S1 && id2.innerHTML == ""){id2.innerHTML = S2;stop = 1;}

        else if(id3.innerHTML == S1 && id6.innerHTML == S1 && id9.innerHTML == ""){id9.innerHTML = S2;stop = 1;}
        else if(id3.innerHTML == S1 && id9.innerHTML == S1 && id6.innerHTML == ""){id6.innerHTML = S2;stop = 1;}
        else if(id6.innerHTML == S1 && id9.innerHTML == S1 && id3.innerHTML == ""){id3.innerHTML = S2;stop = 1;}
        //---------------------------------------------------------------------------------
        else if(id1.innerHTML == S1 && id5.innerHTML == S1 && id9.innerHTML == ""){id9.innerHTML = S2;stop = 1;}
        else if(id1.innerHTML == S1 && id9.innerHTML == S1 && id5.innerHTML == ""){id5.innerHTML = S2;stop = 1;}
        else if(id5.innerHTML == S1 && id9.innerHTML == S1 && id1.innerHTML == ""){id1.innerHTML = S2;stop = 1;}

        else if(id3.innerHTML == S1 && id5.innerHTML == S1 && id7.innerHTML == ""){id7.innerHTML = S2;stop = 1;}
        else if(id3.innerHTML == S1 && id7.innerHTML == S1 && id5.innerHTML == ""){id5.innerHTML = S2;stop = 1;}
        else if(id5.innerHTML == S1 && id7.innerHTML == S1 && id3.innerHTML == ""){id3.innerHTML = S2;stop = 1;}
        else if(stop == 0){
            Add("D1","D2","D3");
            Add("D4","D5","D6");
            Add("D7","D8","D9");
            Add("D1","D4","D7");
            Add("D2","D5","D8");
            Add("D3","D6","D9");
            Add("D1","D5","D9");
            Add("D3","D5","D7");
            
        }
        if(stop == 0){
            Add2("D1","D2","D3");
            Add2("D4","D5","D6");
            Add2("D7","D8","D9");
            Add2("D1","D4","D7");
            Add2("D2","D5","D8");
            Add2("D3","D6","D9");
            Add2("D1","D5","D9");
            Add2("D3","D5","D7");
            
        }
        
        //*****************************************************************************************************************************
        //*****************************************************************************************************************************

    }
    stop = 0;   
}

function Add(ID1,ID2,ID3){
    "use strict";
    var id1 = document.getElementById(ID1),
        id2 = document.getElementById(ID2),
        id3 = document.getElementById(ID3);
    if(stop == 0 && id1.innerHTML == "" && id2.innerHTML == "" && id3.innerHTML == ""){
        id2.innerHTML = SL2.value.toString();
        stop = 1;
    }
}
function Add2(ID1,ID2,ID3){
    "use strict";
    
    var id1 = document.getElementById(ID1),
        id2 = document.getElementById(ID2),
        id3 = document.getElementById(ID3);
    if(stop == 0 && id1.innerHTML == "" && id2.innerHTML == ""){
        id2.innerHTML = SL2.value.toString();
        stop = 1;
    }
    else if(stop == 0 && id2.innerHTML == "" && id3.innerHTML == ""){
        id2.innerHTML = SL2.value.toString();
        stop = 1;
    }
    else if(stop == 0 && id1.innerHTML == "" && id3.innerHTML == ""){
        id3.innerHTML = SL2.value.toString();
        stop = 1;
    }
}




function Clear() {
    "use strict";
    bool = 1;
    star = 0;
    Role.innerHTML = "----------";
    SL1.style.color = "black";
    SL2.style.color = "black";
    D1.innerHTML = "";D2.innerHTML = "";D3.innerHTML = "";D4.innerHTML = "";D5.innerHTML = "";D6.innerHTML = "";D7.innerHTML = "";D8.innerHTML = "";D9.innerHTML = "";
    D1.style.color = "white";D2.style.color = "white";D3.style.color = "white";D4.style.color = "white";D5.style.color = "white";D6.style.color = "white";D7.style.color = "white";D8.style.color = "white";D9.style.color = "white";
}
    
