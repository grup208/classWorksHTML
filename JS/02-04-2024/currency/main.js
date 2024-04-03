import {getCurrency,getSupported,renderOpsions} from './service.js'
import{HtmlElement} from './domElements.js'

let rate=null;
let currency1='GEL';
let currency2='USD';
let amount_1=1;
let amount_2=null;
let curencies=null;
const suportedCodes=await getSupported(); 

HtmlElement.amount_1.addEventListener('input',e=>amount_1=e.target.value);
HtmlElement.btn.addEventListener('click',(e)=>{
    e.preventDefault();
    amount_2=rate*amount_1;
    HtmlElement.amount_2.value=amount_2; 
});

async function init(){
    renderOpsions(suportedCodes,currency1,currency2);
    curencies=await getCurrency(currency1);
    rate=curencies.rates[currency2];  
    amount_2=rate*amount_1;
    HtmlElement.amount_2.value=amount_2;   
}

await init();
// console.log('rate:' ,rate);
// console.log('currency1: ' ,currency1);
// console.log('currency2: ',currency2);
// console.log('amount_1: ',amount_1);
// console.log('amount_2: ',amount_2);








 
 
