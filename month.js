var wca = {};

wca.today = new Date();
wca.currentYear = wca.today.getFullYear();
wca.currentMonth = wca.today.getMonth();

function Calendar(year, month){
    this.year = wca.currentYear;
    this.month = wca.currentMonth;
}

Calendar.prototype.createCalendar = function(){
    wca.currentDayOfWeek = wca.today.getDay();
    wca.firstDay = new Date(wca.currentYear, wca.currentMonth, 1); //first day of current month
    wca.firstDayOfWeek = daysLabel[wca.firstDay.getDay() - 1]; // first dayOfTheWeek of current month
    wca.firstDayOfWeekNumber = wca.firstDay.getDay(); 
    wca.showMonth = monthNamesArray[wca.currentMonth]; //current month string
    wca.showWeekDay = daysLabel[wca.currentDayOfWeek - 1]; //current day of the week
    wca.totDayInMonth = daysPerMonth[wca.currentMonth]; //how many days are in the current month

    //Leap years
    if (wca.currentMonth == 1) {
        if((wca.currentYear % 4 == 0 && wca.currentYear % 100 != 0) || wca.currentYear % 400 == 0){
          wca.totDayInMonth = 29;
        }
    }

    var Htmltable = document.getElementById('table');
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var daysOfWeek = document.getElementById('days-of-week'); 

    year.innerHTML = '<td>'+ wca.currentYear +'</td>';
    month.innerHTML =  '<td>'+ wca.showMonth +'</td>';
    for(i = 0; i < daysLabel.length; i++)
        daysOfWeek.innerHTML = daysOfWeek.innerHTML + '<td>'+ daysLabel[i] +'</td>';
    
    var html = '';
    var day = 1;
    for(i = 1; i <= 6; i++){ //6 rows
        html += '<tr id="days-row">';
        for(j = 1; j <= 7; j++){ //7 coloumns
            html += '<td>'; 
            if(day <= wca.totDayInMonth && (i > 1 || j >= wca.firstDayOfWeekNumber )){
                html += day;
                day++;
            } else {
                html += '&nbsp;';
            }
            html += '</td>';
        }
        if(day >= wca.totDayInMonth){
            break;
        }
        html += '</tr>'; 
    }  
    Htmltable.innerHTML += html + '</tr>';

    // *** DEBUGGER *** //
    console.log("firstDay:", wca.firstDay);
    console.log("firstDayOfWeek:", wca.firstDayOfWeek);
    console.log("monthName", wca.showMonth);
    console.log("daysLabel", wca.showWeekDay);
    console.log("daysPerMonth", wca.totDayInMonth);
    console.log("firstDayOfWeekNumber", wca.firstDayOfWeekNumber);
    // *** DEBUGGER *** //
}



