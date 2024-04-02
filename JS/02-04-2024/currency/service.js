import {B_URL} from './keys.js'
import{HtmlElement} from './domElements.js'


async function getData(endPint){
    const url=B_URL+endPint;
    const data= await fetch(url);
    const result = await data.json();
    return result    
}

export async function getCurrency(code){
    const endPint=`latest/${code}`
    const res=await getData(endPint)
    const result={
        base_code:res.base_code,
        rates:res.conversion_rates
    }
   return result
}

export async function getSupported(){
    const endPint=`codes`
    const result=await getData(endPint);
    return result.supported_codes
}


export function renderOpsions(arr){
    arr.forEach(code => {
        HtmlElement.select_1.innerHTML+=`
        <option ${code[0]=="GEL" ? 'selected':''} value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `
        HtmlElement.select_2.innerHTML+=`
        <option value="${code[0]}" title="${code[1]}">${code[0]}</option>
        `
    });
}

        