window.onload = () => {
    let itens = document.querySelectorAll(".item");
    
    let troca, item1;

    itens.forEach((element,index)=>{
        element.addEventListener("dragstart",(e)=>{
            item1 = element;
            console.log(item1.innerHTML)
        })
        element.addEventListener("dragover",(e)=>{
            element.style.marginTop = "50px";
            e.preventDefault();
        })
        element.addEventListener("dragleave",(e)=>{
            element.style.marginTop = "0px"; 
        })
        element.addEventListener("drop",(e)=>{
            [item1.innerHTML, element.innerHTML] = [element.innerHTML, item1.innerHTML];
            element.style.marginTop = "0px"; 
        })
    })
}