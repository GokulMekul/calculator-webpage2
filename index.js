var in1 =document.getElementById("input1");
var in2=document.getElementById("input2");
var output=document.getElementById("output");



var square = document.getElementById("sqrtb");
square.addEventListener("click",()=>{
    var m=parseInt(in1.value);
     var sq=m*m;
     output.value=sq;  
});



var add=document.getElementById("add");
add.addEventListener("click",()=>{
    var m=parseInt(in1.value);
var n=parseInt(in2.value);
output.value=m+n;   

});

var sum=document.getElementById("sub");
sum.addEventListener("click",()=>{
var m=parseInt(in1.value);
var n=parseInt(in2.value);
output.value=m-n;   

});
var mul=document.getElementById("mul");
mul.addEventListener("click",()=>{
    var m=parseInt(in1.value);
    var n=parseInt(in2.value);
    output.value=m*n;   
    });

    var div=document.getElementById("db");
div.addEventListener("click",()=>{
    var m=parseInt(in1.value);
    var n=parseInt(in2.value);
    output.value=m/n;   
    });

var factorial = document.getElementById("fb");
factorial.addEventListener("click",()=>{

var i;
var f=1;
var m=in1.value;
for(i=1;i<=m;i++){
    f=f*i;
}
document.getElementById("output").value = f;

});
 var amstron=document.getElementById("amb");

 amstron.addEventListener("click", amstrong)
function amstrong() {
    
    let m=in1.value;
    let temp=m;
    let sum=0;
    while(temp>0){
        let remainder= temp%10;
        sum=sum+(remainder*remainder*remainder);
        temp=parseInt(temp/10);
    }
 
    
if(sum==m){
    document.getElementById("output").value = "amstrong";
}else{
    document.getElementById("output").value = "no amstrong";
}

}

var prime=document.getElementById("pb");
prime.addEventListener("click",()=>{

var m=output.value;
var flag=0;
for(var i=2;i<m;i++){
if(m%i==0){
flag=1;
}
}
if(flag==0){
document.getElementById("output").value = "prime";
}
else{
    document.getElementById("output").value = " not prime";   
}
});
 var palindrom =document.getElementById("pab")
palindrom.addEventListener("click",()=>{
    let m=in1.value;
    let temp=m;
   let sum =0;
   while(temp>0){
    let remainder = temp%10;
    sum =sum*10+(remainder);
    temp = parseInt(temp/10);
   }   

 if(sum==m){
   document.getElementById("output").value = "palindrom";
   }
 else{
    document.getElementById("output").value = "not a palindrom";
 }  


});

var cube = document.getElementById("cubeb");
cube.addEventListener("click",()=>{
var m=in1.value;
var cube=m*m*m;
output.value=cube;
});

function alertinput(){
    
    const para =document.createElement("p");
    const node=document.createTextNode("Enter one input Please");
    
    para.appendChild(node);
    const elementh =document.getElementById("alert");
    elementh.appendChild(para);
    para.className="inputalert";
    setTimeout(nameq,3000);
    function nameq() {
        para.style.display="none"; 
    }
    
    
    }
    
    
    cube.addEventListener("click",alertinput);
    square.addEventListener("click",alertinput);
    prime.addEventListener("click",alertinput);
    palindrom.addEventListener("click",alertinput);
    amstron.addEventListener("click",alertinput);