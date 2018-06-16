 function start(){
	document.getElementById("start").disabled=true;
	setTimeout(step1,0000); // Vertical rotation
	setTimeout(step2,1250); // Horizontal rotation
	setTimeout(function(){step3("hidden");},3000); // Disappear
	setTimeout(step4,3000); // Set real numbers
	setTimeout(function(){step3("visible");},3000); // Reappear
	setTimeout(step5,3700); // Complete sequence
	setTimeout(step6,5200); // Vertical rotation
	setTimeout(step7,6700); // Horizontal rotation
	setTimeout(step8,8200); // Set original numbers
	setTimeout(step9,8700); // Highlight answer
	setTimeout(function() {window.location.reload(false);},11500); // Reload
		// Reload page because rotation does not reset properly to begin again
 }
 
 function step1() {
	 var numbers = document.querySelectorAll(".number");
	 
	 numbers.forEach(function(num){num.style.transform="rotateX(180deg)";});
 }
 
 function step2(){
	 var numbers = document.querySelectorAll(".number");
	 
	 numbers.forEach(function(num){num.style.transform="rotateZ(180deg)";});
 }
 
 function step3(visStatus){
	 var numbers = document.querySelectorAll(".number");
	 
	 numbers.forEach(function(num){num.style.transition="all 0";});
	 
	 numbers.forEach(function(num){num.style.visibility=visStatus;});
	 document.getElementById("question").style.visibility=visStatus;
 }
 
 function step4(){
	 var numbers = document.querySelectorAll(".number");
	 
	 numbers.forEach(function(num){num.style.transition="all 0s";});
	 document.getElementById("question").style.transition="all 0s";
	 
	 numbers.forEach(function(num){num.style.transform="none";});
	 
	 document.getElementById("first").innerHTML="9l";
	 document.getElementById("second").innerHTML="90";
	 document.getElementById("third").innerHTML="89";
	 document.getElementById("fourth").innerHTML="88";
	 document.getElementById("question").innerHTML="87";
	 document.getElementById("sixth").innerHTML="86";
	 
	 document.getElementById("question").style.opacity=0;
 }
 
 function step5(){
	 document.getElementById("question").style.transition="all 1.5s";
	 
	 document.getElementById("question").style.opacity=1;
 }
 
 function step6(){
	 var numbers = document.querySelectorAll(".number");
	 
	 numbers.forEach(function(num){num.style.transition="all 1.5s";});
	 
	 numbers.forEach(function(num){num.style.transform="rotateX(180deg)";});
	 document.getElementById("question").style.transform="rotateX(180deg)";
 }
 
 function step7(){
	 var numbers = document.querySelectorAll(".number");
	 
	 numbers.forEach(function(num){num.style.transform="rotateZ(180deg)";});
	 document.getElementById("question").style.transform="rotateZ(180deg)";
 }
 
 function step8(){
	 var numbers = document.querySelectorAll(".number");
	 
	 numbers.forEach(function(num){num.style.transition="all 0s";});
	 document.getElementById("question").style.transition="all 0s";
	 
	 numbers.forEach(function(num){num.style.transform="none";});
	 document.getElementById("question").style.transform="none";
	 
	 document.getElementById("first").innerHTML="l6";
	 document.getElementById("second").innerHTML="06";
	 document.getElementById("third").innerHTML="68";
	 document.getElementById("fourth").innerHTML="88";
	 document.getElementById("question").innerHTML="L8";
	 document.getElementById("sixth").innerHTML="98";
 }
 
 function step9() {
	 document.getElementById("question").style.transition="all 1.5s";
	 
	 document.getElementById("question").style.color="gold";
 }