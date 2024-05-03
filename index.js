let store_val=document.querySelector(".stock_storage")
let toggler=document.querySelector(".fa-eye")  
let header_context=document.querySelector(".header_context") 
let header_end=document.querySelector(".header_end")  
let user_name=document.querySelector(".user_name") 
let company=[
    "amazon",
    "tcs",
    "wipro",
    "tvs",
    "phenix",
    "paytm",
    "tata",
    
]
toggler.addEventListener("click",()=>{
    header_end.classList.toggle("navbar") 
    toggler.classList.toggle("eye")

   
})  
let harshad=()=>{
   let para=document.createElement("p"); 
        let span=document.createElement("div"); 
        let span_two=document.createElement("div"); 
        let random_div=document.createElement("div")
        let span_three=document.createElement("p")
        let random_one=Math.floor(Math.random()*40)+40; 
        let random_two=Math.floor(Math.random()*20) 
        let final_random=Math.floor(Math.random()*40)
        let values=["red","green"] 
        let color=Math.floor(Math.random()*2)
            para.innerHTML=val; 
            random_div.appendChild(para)
            span.innerHTML=random_one;
            random_div.appendChild(span);
            span_two.classList.add("one");
            span_two.innerHTML=random_two;
            
            random_div.appendChild(span_two)  
        
            para.style.color=values[color]
            if(para.style.color==="red")
            {
                let i_frame=document.createElement("i");
                i_frame.classList.add("fa-solid", "fa-chart-simple")
                random_div.appendChild(i_frame) 
                i_frame.style.color="red"  
                span_three.innerHTML=final_random;
                random_div.appendChild(span_three)
                store_val.appendChild(random_div)
               
            }  
           
            else 
            {
               
                    let i_frame=document.createElement("i");
                    i_frame.classList.add("fa-solid", "fa-chart-simple")
                    random_div.appendChild(i_frame) 
                    i_frame.style.color="green"
                    span_three.innerHTML=final_random;
                    random_div.appendChild(span_three)
                    store_val.appendChild(random_div)
            }
            
        
         
}  
let har=()=>{

    company.forEach(val=>{   
        let para=document.createElement("p"); 
        let span=document.createElement("div"); 
        let span_two=document.createElement("div"); 
        let random_div=document.createElement("div")
        let span_three=document.createElement("p")
        let random_one=Math.floor(Math.random()*40)+40; 
        let random_two=Math.floor(Math.random()*20) 
        let final_random=Math.floor(Math.random()*40)
        let values=["red","green"] 
        let color=Math.floor(Math.random()*2)
            para.innerHTML=val; 
            random_div.appendChild(para)
            span.innerHTML=random_one;
            random_div.appendChild(span);
            span_two.classList.add("one");
            span_two.innerHTML=random_two;
            
            random_div.appendChild(span_two)  
        
            para.style.color=values[color]
            if(para.style.color==="red")
            {
                let i_frame=document.createElement("i");
                i_frame.classList.add("fa-solid", "fa-chart-simple")
                random_div.appendChild(i_frame) 
                i_frame.style.color="red"  
                span_three.innerHTML=final_random;
                random_div.appendChild(span_three)
                store_val.appendChild(random_div)
               
            }  
           
            else 
            {
               
                    let i_frame=document.createElement("i");
                    i_frame.classList.add("fa-solid", "fa-chart-simple")
                    random_div.appendChild(i_frame) 
                    i_frame.style.color="green"
                    span_three.innerHTML=final_random;
                    random_div.appendChild(span_three)
                    store_val.appendChild(random_div)
            }
            
        
        
    })

}
har()
setInterval(()=>{ 
    store_val.innerHTML=""
    har();
    
     
},3000)

function main_bar_values()
{  
    
    document.addEventListener("change",()=>{
        let name=document.querySelector(".name")
 name.innerHTML="HI, "+user_name.value
   
    })


    let name=document.querySelector(".name")
    name.innerHTML="HI, "+user_name.value



}    
main_bar_values()
let call_mee=()=>{
    let circle_one = document.querySelector(".circle_one");
    let per_val = circle_one.getAttribute("per_val");
    let para_ini=document.querySelector(".para_ini")
    let counter = 0;
    
    let timer = setInterval(() => {
        if (Number(per_val) === counter) {
            clearInterval(timer);
        }
        counter++;
        circle_one.style.background = "conic-gradient(green calc(" +counter+ "%),  black 0deg)";  
        para_ini.innerHTML=counter
    }, 15); 
    let circl_two = document.querySelector(".circl_one_tws");
    let gems=document.querySelector(".gems")
    let counters = 0;
    let timers = setInterval(() => {
        if (79 === counters) {
            clearInterval(timers);
        }
        counters++;
        circl_two.style.background = "conic-gradient(red calc(" +counters+ "%),black 0deg)";  
        gems.innerHTML=counters;
    }, 15);
    
    let circle_on = document.querySelector(".vals");
    
    let para_in=document.querySelector(".pars")
    let counte = 0;
    
    let time = setInterval(() => {
        if (79=== counte) {
            clearInterval(time);
        }
        counte++;
        circle_on.style.background = "conic-gradient(green calc(" +counte+ "%),  black 0deg)";  
        para_in.innerHTML=counte;
    }, 15); 
    
} 
call_mee()
setInterval(()=>{ 
    
   call_mee()
    
},8000)