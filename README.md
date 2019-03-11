# javascript-odd/even
var x=prompt("enter a number");
if((isNaN(x)) || (x=" ")){
  document.write("invalid");
}else if(x%2==0){
   document.write("even");
}else{
  
  document.write("odd");
}

