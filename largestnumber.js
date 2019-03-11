function largest(x,y,z){
var max=0;
  if(x>y){
    max=x;
  }else{
    max=y;
  }
  if(z>max){
    max=z;
  }
  return max;
}

document.write(largest(3,90,4));
