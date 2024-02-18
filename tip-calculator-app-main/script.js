const billInput = document.querySelector('.billInput');
const peopleInput = document.querySelector('.peopleInput');
const tipPerPerson = document.querySelector('.amount');
const totalPerPerson = document.querySelector('.person');
const tips = document.querySelectorAll('.perBtn');
const tipCustom = document.querySelector('.tipscustom');
const resetBtn =document.querySelector('.resetBtn');
const errorCode = document.querySelector('.error');


billInput.addEventListener("input", billinputfun);
peopleInput.addEventListener("input", peopleinputfun);
tips.forEach(function(val){
    val.addEventListener('click',handleClick);
})
tipCustom.addEventListener("input",tipinputfun);
resetBtn.addEventListener('click',resetfun)




billInput.value ='0.0';
peopleInput.value ='1';
tipPerPerson.innerHTML ='$' + (0.0).toFixed(2);
totalPerPerson.innerHTML ='$' + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billinputfun(){
    billValue = parseFloat(billInput.value)
    calculateTips()
};

function peopleinputfun(){
    peopleValue = parseFloat(peopleInput.value)

    if (peopleValue < 1){
        errorCode.style.display ='flex'
        peopleInput.style.border = 'thick solid red'
    
    }else{
        errorCode.style.display ='none'
        peopleInput.style.border ='none'
        calculateTips()
    }
};

function tipinputfun(){
    tipValue =parseFloat(tipCustom.value / 100)
    tips.forEach(function(val){
        val.classList.remove('active-tip')
    })
    calculateTips()
};




function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove('active-tip')
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add('.active-tip')
            tipValue = parseFloat(val.innerHTML)/100
        }
    })
    calculateTips()

};


function calculateTips() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue
        let total = (billValue * tipAmount) / peopleValue
        tipPerPerson.innerHTML ='$' + tipAmount.toFixed(2);
        totalPerPerson.innerHTML ='$' + total.toFixed(2);
    }
};

function resetfun() {
    billInput.value ='0.0'
    billinputfun()
    peopleInput.value ='1'
    peopleinputfun()
    tipCustom.value = ''
};