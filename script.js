var div = document.createElement("div");
div.className = "main";
div.style.textAlign="center";
div.style.margin="80px";
div.style.display="grid";
div.style.placeItems="center";


var input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("id", "kuralname");
input.setAttribute("placeholder", "kuralnumber");
input.classList.add("form-control");
input.style.margin="10px";
input.style.width="50%";
input.style.textAlign="center";


var button = document.createElement("button");
button.innerHTML = "search";
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.addEventListener("click",getdata);
  
var div2=document.createElement("div");
div2.classname="result";
div2.style.margin="10px";



div2.style.display="flex";
div2.style.justifyContent="center";
div2.style.alignItems="center";
div2.style.padding="20px";






 div.append(input,button,div2);

async function getdata(){

    try{
    var res = document.getElementById("kuralname").value;
      
    if( res>=1&&res<=1330){
    var url=`https://api-thirukkural.vercel.app/api?num=${res}`;
    var thirukkural= await fetch(url);
    var kural = await thirukkural.json();
     
    
    var result1=kural.number;
    var result2=kural.sect_tam;
    var result3=kural.chapgrp_tam;
    var result4=kural.chap_tam ;
    var result5=kural.line1;
    var result6=kural.line2;
    var result7=kural.sect_eng ;
    var result8=kural.chapgrp_eng ;
    var result9=kural.chap_eng ;
    var result10=kural.eng  ;
    var result11=kural.eng_exp  ;
    


    
    console.log(kural);

    
 div2.innerHTML=(` <div class="card text-center" style="width: 18rem; background-image: linear-gradient(to  bottom right, #FF9E68 , #FF68DE); ">
 <div class="card-body " style="color:black">
   <h5 class="card-title">Number: ${result1}</h5><hr/>
   <h6 class="card-subtitle mb-2 "> Section Tamil: ${result2}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">Chapter Group Tamil: ${result3}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">Chapter Tamil: ${result4}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">Kural.Line1: ${result5}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">Kural.Line2: ${result6}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">Section English: ${result7}</h6><hr/>
 
   <h6 class="card-text" style="fontsize:bolder">Chapter Group English: ${result8}</h6><hr/>
 
   <h6 class="card-text" style="fontsize:bolder">Chapter_English: ${result9}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">English: ${result10}</h6><hr/>
   <h6 class="card-text" style="fontsize:bolder">English_Explanation : ${result11}</h6>
 
 

 </div>
</div>`)

}
else{
    div2.innerHTML=(` <h5 style="fontsize:bolder">This is not the valid Thirukural Number</h5>`);
}
}catch (error){console.log(error)}
}


document.body.append(div);

