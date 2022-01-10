let inp = document.querySelector('input');
let btn = document.querySelector('button');
btn.addEventListener('click',() =>{
    if(inp.value >= 2 && inp.value <= 8){
        alert(`the selected number is ${inp.value} and its a valid number`);
    } else {
        alert('number invalid');
    }
});