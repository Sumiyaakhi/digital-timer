let num = 0;
let numberField = document.getElementById('time');

document.getElementById('start').addEventListener('click',function(){
    timer()
})
document.getElementById('stop').addEventListener('click',function(){
    clearInterval(intervalId);
})
document.getElementById('reset').addEventListener('click',function(){
    numberField.innerText = 0;
})
function timer (){
    intervalId = setInterval(()=> {
        num++
        numberField.innerText = num;
        console.log(++num);
    },1000);
}
