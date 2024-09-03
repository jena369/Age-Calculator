const date_div = document.createElement("div")
date_div.className = "div_class";

const input_date = document.createElement("input")
input_date.setAttribute("type", "date")
// input_date.id = "dateId";
input_date.className = "date_class";

const Find_age = document.createElement("button")
Find_age.setAttribute("type", "button")
Find_age.textContent = "FIND AGE";
Find_age.className = "age_btn";

Find_age.addEventListener('click', function(){
    const currentDate = new Date()
    const birthDate = new Date(input_date.value)
    const age = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24 * 30 * 12))
    console.log(age);
});

date_div.append(input_date, Find_age);
document.body.append(date_div);