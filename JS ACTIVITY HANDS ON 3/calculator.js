let nAme = prompt ('What is your name');
if(nAme == null || nAme == ""){
    txt = 'No name provided';
}else{
    document.getElementById('lOg').innerHTML = nAme;
}




function calculate(){
    let m =parseFloat(document.getElementById('number1').value);
    let s =parseFloat(document.getElementById('number2').value);
    let a =parseFloat  (document.getElementById('number3').value);
      let e =parseFloat  (document.getElementById('number4').value);
      let r = parseFloat(document.getElementById('number5').value);
      let d = parseFloat (document.getElementById('number6').value);
      let sOc =parseFloat  (document.getElementById('number7').value);
     let eCo =parseFloat (document.getElementById('number8').value);

   if (number1.value ==""){
    alert("PLEASE CHECK IF YOU ENCODED ALL GRADES!!")
   }else if(number2.value === ""){
    alert("PLEASE CHECK IF YOU ENCODED ALL GRADES!!")
   }else if(number3.value === ""){
    alert("PLEASE CHECK IF YOU ENCODED ALL GRADES!!")
   }else if(number4.value === ""){
    alert("PLEASE CHECK IF YOU ENCODED ALL GRADES!!")
   }else if(number5.value === ""){
    alert("PLEASE CHECK IF YOU ENCODED ALL GRADES!!")
   }else if(number6.value === ""){
    alert("PLEASE CHECK IF YOU ENCODED ALL GRADES!!")
   }else if(number7.value === ""){
    alert("PLEASE CHECK IF YOU ENCODED ALL GRADES!!")
   }else if(number8.value === ""){
    alert("PLEASE CHECK IF YOU ENCODED ALL GRADES!!")
   }
                    // Total Grade --------
     let result = m + s + a + e + r + d + sOc + eCo;
     document.getElementById('tOt').innerHTML = result;
                    // Average -----------
     let aVe = result / 8;
     document.getElementById('avEr').innerHTML = aVe;
                     // Grade ---------
    if(aVe > 100  ){
         alert('Your Grade is INVALID!!')
    }else if(aVe >= 90 ){
          document.getElementById('gRa').innerHTML = 'Your rating is 3.5';
          document.getElementById('greetings').innerHTML = ' "CONGRATULATIONS" ';
          alert('Passed')
    }else if(aVe >= 84 ){
           document.getElementById('gRa').innerHTML = 'Your rating is 3.0';
           document.getElementById('greetings').innerHTML = ' "CONGRATULATIONS" ';
           alert('Passed')
    }else if(aVe >= 75 ){
           document.getElementById('gRa').innerHTML = 'Your rating is 2.5 ';
           document.getElementById('greetings').innerHTML = ' "CONGRATULATIONS" ';
           alert('Passed')

    }else if(aVe >= 69 ){
        document.getElementById('gRa').innerHTML = 'Your rating is 2.0';
        document.getElementById('greetings').innerHTML = ' "PLEASE STUDY HARD" ';
        alert('Remedial');
    }else if(aVe <= 50){
        alert('Your Grade is INVALID!!')
    } else if(aVe >= 51 ){
        document.getElementById('greetings').innerHTML = ' "PLEASE STUDY HARD" ';
        alert('Failed')
    }

   

    }
function Reset(){
    document.getElementById("myForm").reset();
 
}