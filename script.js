const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// day
const today = new Date();
const dayName = days[today.getDay()]; 
document.getElementById('day').textContent = dayName;
// date
const todate = new Date();
const date = todate.toISOString().split('T')[0];

document.getElementById('date').textContent = date;

// clicked card button
const buttons = document.querySelectorAll(".card-btn");
const taskplus = parseInt(document.getElementById('task-plas').textContent);
const taskMinus = parseInt(document.getElementById('task-minus').textContent) ;

taskplusValue = 23;
taskMinusValue = 5;
for(let button of buttons){
    button.addEventListener('click',function(){
        alert('board update succesfully');

        if(taskMinusValue > 0){
            taskplusValue += 1;
            taskMinusValue -= 1;
             document.getElementById('task-plas').textContent = taskplusValue;
            document.getElementById('task-minus').textContent = '0' + taskMinusValue;

            button.disabled = true;
            button.style.background = 'gray'
        }else{
            alert('Congrat ! You Have Complete The Current Task');
            button.disabled = true;
            button.style.background = 'gray'
        }
       

    })
}
