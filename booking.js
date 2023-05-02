function createCalendar() {
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    var firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    var calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    var header = document.createElement('div');
    header.classList.add('calendar-header');
    header.textContent = new Date(currentYear, currentMonth).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    calendar.appendChild(header);

    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (var i = 0; i < weekdays.length; i++) {
        var weekdayCell = document.createElement('div');
        weekdayCell.classList.add('calendar-weekday');
        weekdayCell.textContent = weekdays[i];
        calendar.appendChild(weekdayCell);
    }

    for (var i = 0; i < firstDayOfMonth; i++) {
        var emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day');
        calendar.appendChild(emptyCell);
    }

    for (var day = 1; day <= daysInMonth; day++) {
        var dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');
        dayCell.textContent = day;
        dayCell.addEventListener('click', function () {
            showAvailableTimes(this.textContent);
        });
        calendar.appendChild(dayCell);
    }
}

function showAvailableTimes(day) {
    // Replace this with your logic to fetch available times for the selected day from your data source (e.g., API call, database query)
    var availableTimes = [
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '02:00 PM',
        '03:00 PM'
    ];

    var bookedTimes = []; // Assume this is the list of booked times

    var calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    var header = document.createElement('div');
    header.classList.add('calendar-day');
    header.textContent = 'Available Times for ' + day;
    calendar.appendChild(header);

    for (var i = 0; i < availableTimes.length; i++) {
        var time = availableTimes[i];
        if (!bookedTimes.includes(time)) {
            var timeSlot = document.createElement('div');
            timeSlot.classList.add('calendar-day');
            timeSlot.textContent = time;
            calendar.appendChild(timeSlot);
        }
    }
}

createCalendar();
