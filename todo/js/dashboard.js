const userData = null;

function fecthApi(url, method, options){
    let baseUrl = "http://localhost:4000"
    return new Promise( async (next)=>{
        let res = await fetch(baseUrl + url, {
            method,
            ...options,
        } )
        console.log(res);
        res = await res.json();
        next(res); 

    })
}

window.addEventListener("DOMContentLoaded", async()=>{
    let req = await fecthApi(`/getUser/${localStorage.getItem("session")}`, "GET");
    let input = document.querySelector("input");
    let bouton = document.querySelector("button");  
})