import {getCurrency,getSupported,renderOpsions} from './service.js'
import{HtmlElement} from './domElements.js'

let rate=0;
let code1='';
let code2='';

async function init(){
    const suportedCodes=await getSupported(); 
    renderOpsions(suportedCodes);
    const curencies=await getCurrency("GEL");
    code1=curencies.base_code;
    code2=HtmlElement.select_2.value; 
    rate=curencies.rates[code2];
    console.log(rate)
    HtmlElement.amount_2.value=rate*1
}

function convert(){

}

init();

HtmlElement.select_1.addEventListener('change',async (e)=>{
        const code=e.target.value;
        const data=await getCurrency(code);
        code2=HtmlElement.select_2.value;
        code1=data.base_code;
        rate=data.rates[code2];
        // HtmlElement.amount_2.value=rate*HtmlElement.amount_1.value;      
    });







 
 
