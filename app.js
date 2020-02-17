// var num;
// var length =0;

function numInput(val){
   document.getElementById('showNum').value+=val;
   // var num = document.getElementById("showNum").value += value;
   
}

function clr() { 
   document.getElementById("showNum").innerHTML = ""
} 

function cal(){   
   let num1 = document.getElementById("showNum").innerHTML
   let num2 = eval(num1)
      document.getElementById("showNum").innerHTML = num2
}
