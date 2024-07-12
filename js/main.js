document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const calendarEL = document.getElementById('calendar');

    const week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const month = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентбярь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    
    const now = new Date();
    const dateWeek = now.getDay() - 1;
    const dateDay = now.getDate();
    const dateMonth = now.getMonth();
    const dateYear = now.getFullYear();

    
    
    function w(mount, year) {
        let daysInMonth = new Date(year, mount, 0).getDate();
        let a = [];

        for (let i = 0; i <= daysInMonth; i++) {
            a.push(i);
        }

        return a;

    }

    const q = w(dateMonth, dateYear);

    console.log(q);
    



    // function getAllDaysInMonth(year, month) {
    //     let daysInMonth = new Date(year, month, 0).getDate();
    //     console.log(daysInMonth);
    //     let daysArray = [];
        
    //     for (let i = 1; i <= daysInMonth; day++) {
    //         daysArray.push(i);
    //     }
        
    //     return daysArray;
    // }
    
    // let year = 2021;
    // let mont = 8; // Номер месяца (январь - 1, февраль - 2, и т.д.)
    // let daysOfMonth = getAllDaysInMonth(year, mont);
    // console.log(daysOfMonth);








});