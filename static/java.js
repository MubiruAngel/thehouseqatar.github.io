var english = document.getElementById("english")
var maths = document.getElementById("maths")
var physics = document.getElementById("physics")
var chemistry = document.getElementById("chemistry")
var para = document.getElementById("para")
var paragraph = document.getElementById("paragraph")
var contain = document.getElementById("contain")
var h1 = document.getElementById("h1")
var h2 = document.getElementById("h2")

function testingResults(){
    var added = parseInt(english.value)
    var adds = parseInt(maths.value)
    var Physics = parseInt(physics.value)
    var Chemistry = parseInt(chemistry.value)
    var result = adds+added+Physics+Chemistry

     
    paragraph.innerHTML=("ENGLISH: "+added+"<br/>"+"MATHS: "+adds+"<br/>"+"PHYSICS: "+
    Physics+"<br/>"+"CHEMISTRY: "+Chemistry)
    if(result <= 0){
        para.innerHTML="UNGRADED"
        contain.style.display="none"
        h1.style.display="none"
        h2.innerHTML="Your results were Submitted Successfully"
        h2.style.color="green"
    }
    else if(result >= 0 && result <=99){
        para.innerHTML=("TOTAL SCORES: "+result+"<br/>"+"POOR PERFOMANCE");
        contain.style.display="none"
        h1.style.display="none"
        h2.innerHTML="Your results were Submitted Successfully"
        h2.style.color="green"

    }
    else if(result >= 100 && result <= 199){
        para.innerHTML=("TOTAL SCORES: "+result+"<br/>"+"BELOW AVERAGE");
        contain.style.display="none"
        h1.style.display="none"
        h2.innerHTML="Your results were Submitted Successfully"
        h2.style.color="green"

    }
    else if(result >= 200 && result <= 299){
        para.innerHTML=("TOTAL SCORES: "+result+"<br/>"+"GOOD");
        contain.style.display="none"
        h1.style.display="none"
        h2.innerHTML="Your results were Submitted Successfully"
        h2.style.color="green"
    
    }
    else if(result >= 300 && result <= 400){
        para.innerHTML=("TOTAL SCORES: "+result+"<br/>"+"WELL PERFOMED");
        contain.style.display="none"
        h1.style.display="none"
        h2.innerHTML="Your results were Submitted Successfully"
        h2.style.color="green"
        
    }
    else{
        return true
        

    }       
}

   
   


