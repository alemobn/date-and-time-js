function addDate() {
    const title = document.querySelector('.title');
    const date = new Date();
    let weekDay = date.getDay();

    function weekDayConvert() {
        if (weekDay === 0) {
            weekDay = 'Domingo';
        } else if (weekDay === 1) {
            weekDay = 'Segunda-feira';
        } else if (weekDay === 2) {
            weekDay = 'Terça-feira';
        } else if (weekDay === 3) {
            weekDay = 'Quarta-feira';
        } else if (weekDay === 4) {
            weekDay = 'Quinta-feira';
        } else if (weekDay === 5) {
            weekDay = 'Sexta-feira';
        } else if (weekDay === 6) {
            weekDay = 'Sábado';
        } else {
            weekDay = undefined;
        }
    }

    weekDayConvert();

    title.innerHTML = ``;
}

addDate();