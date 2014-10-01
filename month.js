window.wca = {};

(function() {
    wca.today = new Date();
    createCalendar();

function createCalendar(){
    wca.currentYear = wca.today.getFullYear();
    wca.currentMonth = wca.today.getMonth(); //month in number
    wca.currentDayOfWeek = wca.today.getDay();
    wca.firstDay = new Date(wca.currentYear, wca.currentMonth, 1); //first day of current month
    wca.firstDayOfWeek = daysLabel[wca.firstDay.getDay()]; // first dayOfTheWeek of current month
    wca.showMonth = monthNamesArray[wca.currentMonth]; //current month string
    wca.showWeekDay = daysLabel[wca.currentDayOfWeek]; //current day of the week
    wca.totDayInMonth = daysPerMonth[wca.currentMonth]; //how many days are in the current month

    console.log("firstDay:", wca.firstDay);
    console.log("firstDayOfWeek:", wca.firstDayOfWeek);
    console.log("monthName", wca.showMonth);
    console.log("daysLabel", wca.showWeekDay);
    console.log("daysPerMonth", wca.totDayInMonth);

    //Leap years
    if (wca.currentMonth == 1) { // February 
        if((wca.currentYear % 4 == 0 && wca.currentYear % 100 != 0) || wca.currentYear % 400 == 0){
          wca.totDayInMonth = 29;
        }
    }

    // Fill in html con dati sopra trovati
    var Htmltable = document.getElementById('table');
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var daysOfWeek = document.getElementById('days-of-week');
    

    year.innerHTML = '<td>'+ wca.currentYear +'</td>';
    month.innerHTML = '<td>'+ wca.showMonth +'</td>';
    for(i = 0; i < daysLabel.length; i++)
        daysOfWeek.innerHTML = daysOfWeek.innerHTML + '<td>'+ daysLabel[i] +'</td>';

    var day = 1;
    if(day <= wca.totDayInMonth){
        Htmltable.innerHTML += '<tr id="days-row"></tr>';
        
        for(k = 0; k <= 6; k++){
            var daysRow = document.getElementById('days-row');
            daysRow.innerHTML = daysRow.innerHTML + '<td>' + day + '</td>';
            day++;
        }
    }

}


days = function(){
//Array with all the day of the current month
    days = [];
    for(i = 1; i <= wca.totDayInMonth; i++){
       days.push(i);
    }
    return days;
}



})();

