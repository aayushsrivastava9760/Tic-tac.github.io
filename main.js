function score1() {
    var score = Number(localStorage.getItem("score_1")) + 1;
    localStorage.setItem("score_1",score);
   }
   
   function score2() {
    var score = Number(localStorage.getItem("score_2")) + 1;
    localStorage.setItem("score_2",score);
   }
   
   function name1() {
    localStorage.setItem("player_name_1", document.getElementById("name_entered_1").innerHTML) ;
    window.open("symbol.html","_self");
   }
   
   function name__1() {
    localStorage.setItem("player_name_1", document.getElementById("name_entered_1").innerHTML) ;
    window.open("one.html","_self");
   }
   
   function p1_X() {
    localStorage.setItem("player_1_symbol", document.getElementById("player1_X").innerHTML) ;
    localStorage.setItem("player_2_symbol", document.getElementById("player1_O").innerHTML) ;
    window.open("name2.html","_self");
   }
   
   function p1_O() {
    localStorage.setItem("player_1_symbol", document.getElementById("player1_O").innerHTML) ;
    localStorage.setItem("player_2_symbol", document.getElementById("player1_X").innerHTML) ;
    window.open("name2.html","_self");
   }
   
   function p1_X_single() {
    localStorage.setItem("player_1_symbol", document.getElementById("player1_X").innerHTML) ;
    localStorage.setItem("player_2_symbol", document.getElementById("player1_O").innerHTML) ;
    window.open("one.html","_self");
   }
   
   function p1_O_single() {
    localStorage.setItem("player_1_symbol", document.getElementById("player1_O").innerHTML) ;
    localStorage.setItem("player_2_symbol", document.getElementById("player1_X").innerHTML) ;
    window.open("one.html","_self");
   }
   
   function name2() {
    localStorage.setItem("player_name_2", document.getElementById("name_entered_2").innerHTML) ;
    localStorage.setItem("score_1","0");
    localStorage.setItem("score_2","0");
    window.open("two.html","_self");
    
   }
   
   function name(){
   document.getElementById("name1").innerHTML = localStorage.getItem("player_name_1");
   document.getElementById("name2").innerHTML = localStorage.getItem("player_name_2");
   
   document.getElementById("score1").innerHTML = localStorage.getItem("score_1");
   document.getElementById("score2").innerHTML = localStorage.getItem("score_2");
   }
   
   
   
   function change(boxid) {
    if(typeof(Storage)!=="undefined") {
   
     if(document.getElementById(boxid).disabled != true){
   
     if(sessionStorage.player==1) {
      document.getElementById(boxid).innerHTML = localStorage.getItem("player_1_symbol");
      sessionStorage.player=2;
      document.getElementById("turn1").innerHTML = "";
      document.getElementById("turn2").innerHTML = "Your Turn";
       }
   
     else if(sessionStorage.player==2) {
      document.getElementById(boxid).innerHTML = localStorage.getItem("player_2_symbol");
      sessionStorage.player=1;
      document.getElementById("turn2").innerHTML = "";
      document.getElementById("turn1").innerHTML = "Your Turn";
      }
   
    else {
     document.getElementById(boxid).innerHTML = localStorage.getItem("player_1_symbol");
     sessionStorage.player=2;
     document.getElementById("turn1").innerHTML = "";
     document.getElementById("turn2").innerHTML = "Your Turn";
      }
    
    document.getElementById(boxid).disabled = true;
     }
    }
   }
    
   function reset() {
    sessionStorage.clear();
   }
   
   function check() {
    flag = 0;
    b1 = document.getElementById("box1").innerHTML;
    b2 = document.getElementById("box2").innerHTML;
    b3 = document.getElementById("box3").innerHTML;
    b4 = document.getElementById("box4").innerHTML;
    b5 = document.getElementById("box5").innerHTML;
    b6 = document.getElementById("box6").innerHTML;
    b7 = document.getElementById("box7").innerHTML;
    b8 = document.getElementById("box8").innerHTML;
    b9 = document.getElementById("box9").innerHTML;
    
    //vertical 
   
    if(b1==b4 && b1==b7) {
     if(b1==localStorage.getItem("player_1_symbol")) {
      document.getElementById("player1").innerHTML = "WINNER";
    
      }
     else if(b1==localStorage.getItem("player_2_symbol")) {
      document.getElementById("player2").innerHTML = "WINNER";
   
      }
     }
    
    else if(b2==b5 && b2==b8) {
     if(b2==localStorage.getItem("player_1_symbol")) {
      document.getElementById("player1").innerHTML = "WINNER";
    
      }
     else if(b2==localStorage.getItem("player_2_symbol")) {
      document.getElementById("player2").innerHTML = "WINNER";
      
      }
     }
   
    else if(b3==b6 && b3==b9) {
     if(b3==localStorage.getItem("player_1_symbol")) {
      document.getElementById("player1").innerHTML = "WINNER";
      
      }
     else if(b3==localStorage.getItem("player_2_symbol")) {
      document.getElementById("player2").innerHTML = "WINNER";
     
      }
     }
     
    // horizontal
    
    else if(b1==b2 && b1==b3) {
     if(b1==localStorage.getItem("player_1_symbol")) {
      document.getElementById("player1").innerHTML = "WINNER";
      
      }
     else if(b1==localStorage.getItem("player_2_symbol")) {
      document.getElementById("player2").innerHTML = "WINNER";
      
      }
     }
    
    else if(b4==b5 && b4==b6) {
     if(b4==localStorage.getItem("player_1_symbol")) {
      document.getElementById("player1").innerHTML = "WINNER";
      
      }
     else if(b4==localStorage.getItem("player_2_symbol")) {
      document.getElementById("player2").innerHTML = "WINNER";
     
      }
     }
    
    else if(b7==b8 && b7==b9) {
     if(b7==localStorage.getItem("player_1_symbol")) {
      document.getElementById("player1").innerHTML = "WINNER";
     
      }
     else if(b7==localStorage.getItem("player_2_symbol")) {
      document.getElementById("player2").innerHTML = "WINNER";
      
      }
     }
    
    //diagonal
    
    else if(b1==b5 && b1==b9) {
     if(b1==localStorage.getItem("player_1_symbol")) {
      document.getElementById("player1").innerHTML = "WINNER";
      
      }
     else if(b1==localStorage.getItem("player_2_symbol")) {
      document.getElementById("player2").innerHTML = "WINNER";
     
      }
     }
    
    else if(b3==b5 && b3==b7) {
     if(b3==localStorage.getItem("player_1_symbol")) {
      document.getElementById("player1").innerHTML = "WINNER";
      }
     else if(b3==localStorage.getItem("player_2_symbol")) {
      document.getElementById("player2").innerHTML = "WINNER";
      }
     }
    
    else if((document.getElementById("player1").innerHTML != "WINNER" || document.getElementById("player2").innerHTML != "WINNER") && (b1==localStorage.getItem("player_1_symbol") || b1==localStorage.getItem("player_2_symbol")) && (b2==localStorage.getItem("player_1_symbol") || b2==localStorage.getItem("player_2_symbol")) && (b3==localStorage.getItem("player_1_symbol") || b3==localStorage.getItem("player_2_symbol")) && (b4==localStorage.getItem("player_1_symbol") || b4==localStorage.getItem("player_2_symbol")) && (b5==localStorage.getItem("player_1_symbol") || b5==localStorage.getItem("player_2_symbol")) && (b6==localStorage.getItem("player_1_symbol") || b6==localStorage.getItem("player_2_symbol")) && (b7==localStorage.getItem("player_1_symbol") || b7==localStorage.getItem("player_2_symbol")) && (b8==localStorage.getItem("player_1_symbol") || b8==localStorage.getItem("player_2_symbol")) && (b9==localStorage.getItem("player_1_symbol") || b9==localStorage.getItem("player_2_symbol"))) {
     document.getElementById("player1").innerHTML = "TIE";
     document.getElementById("player2").innerHTML = "TIE";
     document.getElementById("turn1").innerHTML = "";
     document.getElementById("turn2").innerHTML = "";
     }
     
    if(document.getElementById("player1").innerHTML == "WINNER" || document.getElementById("player2").innerHTML == "WINNER" || document.getElementById("player2").innerHTML == "TIE") {
     document.getElementById("box1").disabled = true;
     document.getElementById("box2").disabled = true;
     document.getElementById("box3").disabled = true;
     document.getElementById("box4").disabled = true;
     document.getElementById("box5").disabled = true;
     document.getElementById("box6").disabled = true;
     document.getElementById("box7").disabled = true;
     document.getElementById("box8").disabled = true;
     document.getElementById("box9").disabled = true;
     document.getElementById("turn1").innerHTML = "";
     document.getElementById("turn2").innerHTML = "";
    }
   }
    
   function change2(boxid) {
    if(typeof(Storage)!=="undefined") {
   
     if(document.getElementById(boxid).disabled != true){
   
     if(sessionStorage.player==1) {
      document.getElementById(boxid).innerHTML = localStorage.getItem("player_1_symbol");
      sessionStorage.player=2;
      document.getElementById("turn1").innerHTML = "";
      document.getElementById("turn2").innerHTML = "Computer's Turn";
       }
   
     else if(sessionStorage.player==2) {
      document.getElementById(boxid).innerHTML = localStorage.getItem("player_2_symbol");
      sessionStorage.player=1;
      document.getElementById("turn2").innerHTML = "";
      document.getElementById("turn1").innerHTML = "Your Turn";
      }
   
    else {
     document.getElementById(boxid).innerHTML = localStorage.getItem("player_1_symbol");
     sessionStorage.player=2;
     document.getElementById("turn1").innerHTML = "";
     document.getElementById("turn2").innerHTML = "Computer's Turn";
      }
    document.getElementById(boxid).disabled = true;
    check();
    if(document.getElementById("player1").innerHTML != "WINNER") {
     comp();
      }
     }
    }
   }
   
   function comp() {
   
    b1 = document.getElementById("box1").innerHTML;
    b2 = document.getElementById("box2").innerHTML;
    b3 = document.getElementById("box3").innerHTML;
    b4 = document.getElementById("box4").innerHTML;
    b5 = document.getElementById("box5").innerHTML;
    b6 = document.getElementById("box6").innerHTML;
    b7 = document.getElementById("box7").innerHTML;
    b8 = document.getElementById("box8").innerHTML;
    b9 = document.getElementById("box9").innerHTML;
    
    var boxes = [b1,b2,b3,b4,b5,b6,b7,b8,b9];
    let next = [];
    
    for(i=0;i<9;i++) {
     if(boxes[i]!=localStorage.getItem("player_1_symbol") && boxes[i]!=localStorage.getItem("player_2_symbol")) {
      next.push(i);
      }
     }
     
    if(next.length != 0) {
     
     var move = next[Math.floor(Math.random()*next.length)];
   
   
    if(move==0) {
     change('box1');
     }
    else if(move==1) {
     change('box2');
     }
    else if(move==2) {
     change('box3');
     }
    else if(move==3) {
     change('box4');
     }
    else if(move==4) {
     change('box5');
     }
    else if(move==5) {
     change('box6');
     }
    else if(move==6) {
     change('box7');
     }
    else if(move==7) {
     change('box8');
     }
    else if(move==8) {
     change('box9');
     }
   
    }
   
   }
   
   function second() {
   
    var move = Math.floor(Math.random()*9);
    if(move==0) {
     change('box1');
     }
    else if(move==1) {
     change('box2');
     }
    else if(move==2) {
     change('box3');
     }
    else if(move==3) {
     change('box4');
     }
    else if(move==4) {
     change('box5');
     }
    else if(move==5) {
     change('box6');
     }
    else if(move==6) {
     change('box7');
     }
    else if(move==7) {
     change('box8');
     }
    else if(move==8) {
     change('box9');
     }
   
   }
   
   function restart() {
    sessionStorage.clear();
    localStorage.setItem("score_1","0");
    localStorage.setItem("score_2","0");
   }
   
   function score_board(){
    if(document.getElementById("player1").innerHTML == "WINNER"){
     score1();  
      }
    else if(document.getElementById("player2").innerHTML == "WINNER"){
    score2();
    }
   }