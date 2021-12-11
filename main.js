const input=document.querySelector('#input');
const submit= document.getElementById("submit");
const clear= document.querySelector('#clear');
const output= document.getElementById('output');

console.log(input, submit, output)


function inserted(){
    const inputValue = input.value;
    console.log(inputValue)
    output.innerHTML= inputValue;

}

function del(){
    output.innerHTML='';
    input.value='';
}

submit.addEventListener('click', inserted);
// clear.addEventListener('click', function(){
//     input.value='';
//     output.innerHTML='';
// });