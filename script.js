//your JS code here. If required.
function daysOfAYear(year) {
	if (year < 1 || year > 9999) {
    return "Invalid Year";
}
	else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return 366;
} else {
    return 365;
}
	
}