let number = document.getElementById("num");
let Button = document.getElementById("verify");
let result = document.getElementById('res');
let msg = document.getElementById('m');
let msg1 = document.getElementById('m1')
//User validations

 number.addEventListener('input',($event)=>{
    //$event.preventDefault();
    if($event.target.value.length === 0){
     Button.setAttribute('disabled','true');
     msg.textContent='You have to provide a number';
     msg.classList.remove('green-color');
     msg.classList.add('red-color');
    }
    
    else if ($event.target.value.length!=3) {
     Button.setAttribute('disabled','true');
     msg.textContent='Button disabled, please enter 3 digit to unable';
     msg.classList.remove('green-color');
     msg.classList.add('red-color');
    }
    
    else{ 
      Button.removeAttribute('disabled'); 
        foo();
      
        msg.textContent="Ok, verify";
        msg.classList.remove('red-color');
        msg.classList.add('green-color');
        
     
     }

  });
//Button event. 
let foo=()=>{ //function foo
  Button.addEventListener('click',($event)=>{
    $event.preventDefault();
    
   let sum=0;
   if($event.target.disabled='true'){
     msg1.textContent = ""
   }
    //Armstrong number computation.
    for (i = 0; i < number.value.length; i++) {
      sum += Math.pow((number.value).charAt(i),number.value.length);
    }
    //condition if is Armstrong number or not.
   result.textContent = (sum==number.value) ? `the number ${number.value} is an Armstrong number` : `the number ${number.value} is not Armstrong number`;
   
  
   });
}

