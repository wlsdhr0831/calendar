class CalendarObject {
    constructor(){
        const today = new Date();

        this.year = today.getFullYear();
        this.month = today.getMonth() + 1;
        this.date = today.getDate();
        this.day = today.getDay();

        this.prevMonth = this.getMonthEnd(this.year, this.month-1);
        this.currMonth = this.getMonthEnd(this.year, this.month);
        this.nextMonth = this.getMonthEnd(this.year, this.month+1);

        console.log(this);
    }

    setCalendar(year, month, date, day){
        this.year = year;
        this.month = month + 1;
        this.date = date;
        this.day = day;

        this.prevMonth = this.getMonthEnd(this.year, this.month-1);
        this.currMonth = this.getMonthEnd(this.year, this.month);
        this.nextMonth = this.getMonthEnd(this.year, this.month+1);
    }

    getMonthEnd( year, month ){
        const newDate = new Date(year, month, 0);
        const date = newDate.getDate();
        const day = newDate.getDay();

        return { date, day };
    }
}

const dayList = ['일', '월', '화', '수', '목', '금', '토'];

const calendar = new CalendarObject();

const currentBox = document.getElementById('currentBox');
currentBox.innerText = `${calendar.year}-${calendar.month}-${calendar.date}(${dayList[calendar.day]})`;

const calendarBox = document.querySelectorAll('table');

const yearAndMonth = document.getElementById('yearAndMonth');
yearAndMonth.innerHTML = `<td colspan="7">${calendar.year}-${calendar.month}</td>`;

const calendarBody = document.querySelectorAll('tbody');

let day = 1;

let trList = '<tr>';
for(let i = 0; i <= calendar.prevMonth.day; i++){
    trList += `<td></td>`;
}

for(let i = calendar.prevMonth.day+1; i < 7; i++){
    trList += `<td>${day++}</td>`;
}
trList += '</tr>';

let date = 0;
while(day <= calendar.currMonth.date){
    if(date % 7 === 0) trList += '<tr>';
    trList += `<td>${day++}</td>`;
    if(date % 7 === 6) trList += '</tr>';
    date++;
}
trList += '</tr>';

calendarBody[0].innerHTML = trList;