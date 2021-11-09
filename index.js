let incre=document.getElementById('inc');
let decre=document.getElementById('dec');
let num=document.getElementById('number');
let integer= 0;
incre.addEventListener('click',function(){
        integer+=1;
        num.innerHTML=integer
    
})
decre.addEventListener('click',function(){
        integer-=1;
        num.innerHTML=integer
    
})

    