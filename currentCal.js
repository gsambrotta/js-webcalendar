(function() {
	var currentCal = new Calendar(wca.currentYear, wca.currentMonth);
	currentCal.createCalendar();

	document.getElementById("prev-month").addEventListener("click", function(e) { 
	    wca.prevMonth = monthNamesArray[wca.currentMonth - 1];
	    month.innerHTML = '<td>'+ wca.prevMonth +'</td>'; //var prevCal = new Calendar(wca.currentYear, wca.prevMonth) prevCal.createCalendar()
	    wca.currentMonth = (wca.currentMonth == 1)? 12 : wca.currentMonth - 1; // Ternary. If currentMonth e' == 1, set currentMonth == 12, otherwise currenMonth - 1 
	});

	document.getElementById("next-month").addEventListener("click", function(e) { 
	    wca.nextMonth = monthNamesArray[wca.currentMonth + 1];
	    month.innerHTML = '<td>'+ wca.nextMonth +'</td>'; //var nextCal = new Calendar(wca.currentYear, wca.nextMonth) nextCal.createCalendar()
	    wca.currentMonth = (wca.currentMonth == 10)? -1 : wca.currentMonth + 1;
	});

})();