function Prime(num){
count=0;
for(i=1;i<=num;i++){
if(num%i==0){
  count++;
} 
}
if(count==2){
  console.log("Prime");
}
  else{
    console.log("Not Prime");
  }
}
Prime(5);
Prime(6);
Prime(11);