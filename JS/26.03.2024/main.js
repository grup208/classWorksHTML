const btn=document.getElementById('btn');
const tbody=document.querySelector('tbody');
const loader=document.querySelector('.loader');

getCurrencies();

    async function getCurrencies(){
        const url='https://valuto.ge/wp-json/rest-currency-list/v3/currencies'
        const data= await fetch(url);
        const result=await data.json();
        renderCurencies(result.data.currencies);
        loaderClose();
    }
    

function loaderClose(){
    setTimeout(()=>{
        loader.classList.add('close')
    },500)
}
function showAll(){
    const tableRows=Array.from(document.querySelectorAll('tbody tr'));
    tableRows.forEach(el=>{
        if(el.classList.contains('disable')){
            el.classList.remove('disable')
        }
    })
    btn.style='display:none'
}

function renderCurencies(currencies){
    tbody.innerHTML='';
    const values=Object.values(currencies);
    let count=0;
    values.forEach((curency )=> {
        if(curency.CcTo=="GEL"){
            count++;
            tbody.innerHTML+=`
                <tr ${count>3?'class=disable':''}>
                    <td>${curency.CcFrom}</td>
                    <td>${curency.buy}</td>
                    <td>${curency.sell}</td>
                </tr>
            `
        }
    });
}