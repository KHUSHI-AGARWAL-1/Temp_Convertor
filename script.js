const fah=document.getElementById('fah');
const cel=document.getElementById('cel');
const kev=document.getElementById('kev');
cel.addEventListener('input',()=>{
    let ctemp=parseFloat(cel.value);
    let ftemp= parseFloat( (ctemp*(9/5)+32).toFixed(2));       ;
    let ktemp=   parseFloat((ctemp+273.15).toFixed(2));                  
    fah.value=ftemp;
    kev.value=ktemp;
})

fah.addEventListener('input',()=>{
    let ftemp=parseFloat(fah.value);
    let ctemp= parseFloat(((ftemp-32)*(5/9)).toFixed(2));       ;
    let ktemp=   parseFloat(((ftemp-32)*(5/9)+273.15).toFixed(2));                  
    cel.value=ctemp;
    kev.value=ktemp;
})

kev.addEventListener('input',()=>{
    let ktemp=parseFloat(kev.value);
    let ftemp= parseFloat( ((ktemp-273.15)*(9/5)+32).toFixed(2));       ;
    let ctemp=   parseFloat((ktemp-273.15).toFixed(2));                  
    fah.value=ftemp;
    cel.value=ctemp;
})
document.querySelector('button').addEventListener('click',()=>{
    fah.value="";
    cel.value="";
    kev.value="";
})