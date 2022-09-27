fetch("coro.json")
.then(function(response){
return response.json();
})
.then(function(coro){
    let placeholder=document.getElementById("data-out")
    let out="";
    for(let corona of coro){
    out+=`
     <tr>
        <td>${corona.country_name}</td>
        <td>${corona.cases}</td>
        <td>${corona.deaths}</td>
     </tr>
     `;
    }
    
placeholder.innerHTML=out;    
} )