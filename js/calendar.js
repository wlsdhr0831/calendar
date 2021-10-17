export default class CalendarObject {
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