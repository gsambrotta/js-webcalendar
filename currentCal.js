function go() {
	var currentCal = new Calendar(wca.currentYear, wca.currentMonth);
	currentCal.createCalendar();

	document.getElementById("prev-month").addEventListener("click", function(e) { 
	    wca.currentMonth = wca.currentMonth - 1;
	    if(wca.currentMonth == -1){
	    	wca.currentMonth = 11;
	    	wca.currentYear--;
	    }
	    var prevCal = new Calendar(wca.currentYear, wca.currentMonth); 
	    prevCal.createCalendar(); 
	});

	document.getElementById("next-month").addEventListener("click", function(e) { 
	   wca.currentMonth = wca.currentMonth + 1;
	    if(wca.currentMonth == 12){
	    	wca.currentMonth = 0;
	    	wca.currentYear++;
	    }
	    var nextCal = new Calendar(wca.currentYear, wca.currentMonth); 
	    nextCal.createCalendar(); 
	});

}

document.addEventListener("DOMContentLoaded", go);