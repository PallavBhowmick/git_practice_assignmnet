let str="madam"
a=Math.floor(str.length/2);
count=0;
for(j=0;j<a;j++){
  if(str[j]==str[str.length-1-j]){
    count++;
  }
}
  if(count==a){
    console.log("Palindrome");
  }
  else{
    console.log("Not Palindrome");
  }