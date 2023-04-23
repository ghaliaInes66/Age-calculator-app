const day=document.querySelector('#day');
const month=document.querySelector('#month');
const year=document.querySelector('#year');
const button=document.querySelector("#btn");
const outputdays=document.querySelector('.days');
const outputmonths=document.querySelector('.months');
const outputyears=document.querySelector('.years');
const error1=document.querySelector('.error1');
const error2=document.querySelector('.error2');
const error3=document.querySelector('.error3');
const red1=document.querySelector('.red1');
const red2=document.querySelector('.red2');
const red3=document.querySelector('.red3');

function errorEmpty(){
    error1.textContent="This field is required";
    error2.textContent="This field is required";
    error3.textContent="This field is required";
    red1.style.color='red';
    red2.style.color='red';
    red3.style.color='red';
    day.style.borderColor='red';
    month.style.borderColor='red';
    year.style.borderColor='red';
    outputdays.textContent="--";
  outputmonths.textContent="--";
  outputyears.textContent="--";
}

function errorInvalid(){
  error1.textContent="Must be a valid day";
  error2.textContent="Must be a valid month";
  error3.textContent="Must be in the past";
  red1.style.color='red';
  red2.style.color='red';
  red3.style.color='red';
  day.style.borderColor='red';
  month.style.borderColor='red';
  year.style.borderColor='red';
  outputdays.textContent="--";
  outputmonths.textContent="--";
  outputyears.textContent="--";
}

function errorWholeform(){
    error1.textContent="Must be a valid date";
    red1.style.color='red';
    day.style.borderColor='red';
    outputdays.textContent="--";
  outputmonths.textContent="--";
  outputyears.textContent="--";
}

function startCase(){
  error1.textContent="";
  error2.textContent="";
  error3.textContent="";
  error1.textContent="";
  error2.textContent="";
  error3.textContent="";
  red1.style.color='hsl(0, 1%, 44%)';
  red2.style.color='hsl(0, 1%, 44%)';
  red3.style.color='hsl(0, 1%, 44%)';
  day.style.borderColor='hsl(0, 1%, 44%)';
  month.style.borderColor='hsl(0, 1%, 44%)';
  year.style.borderColor='hsl(0, 1%, 44%)';
}

function calculAge(){

let currentyear = new Date().toJSON().slice(0, 4);
let currentmonth= new Date().toJSON().slice(5, 7);
let currentday = new Date().toJSON().slice(8, 10);

  if(day.value===''||month.value===''||year.value===''){
  errorEmpty();
  return;
  }

  if(day.value>31||month.value>12||year.value>currentyear){
  errorInvalid();
   return;
  }

  if((day.value==31 && (month.value==2||month.value==4||month.value==6||month.value==9||month.value==11))||(day.value==30 && month.value==2) ){
  errorWholeform();
  return;
  }

startCase();

output1=currentyear-1-Number(year.value);
output2=currentmonth-1+12-Number(month.value);
output3=Number(currentday)+30-Number(day.value);

if(output3>=30){
  output2++;
  output3=output3-30;
}
if(output2>=12){
  output1++;
  output2=output2-12;
}

outputdays.textContent=output3;
outputmonths.textContent=output2;
outputyears.textContent=output1;
}
button.addEventListener('click',calculAge);