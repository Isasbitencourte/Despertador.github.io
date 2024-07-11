// Array para armazenar os horários definidos como alarmes
let alarms = [];

function setAlarm() {
    // Obter o valor do input de tempo
    var alarmTime = document.getElementById('timePicker').value;
    
    if (alarmTime !== '') {
        var alarmHour = alarmTime.split(':')[0];
        var alarmMinute = alarmTime.split(':')[1];

        console.log('Alarme definido para ' + alarmHour + ':' + alarmMinute);

        // Adicionar o horário ao array de alarmes
        alarms.push(alarmHour + ':' + alarmMinute);

        // Atualizar o histórico de alarmes
        updateAlarmHistory();

        // Calcular o tempo até o próximo alarme
        scheduleNextAlarm(alarmHour, alarmMinute);
    } else {
        alert('Por favor, selecione um horário válido.');
    }
}

function scheduleNextAlarm(hour, minute) {
    var now = new Date();
    var currentHour = now.getHours();
    var currentMinute = now.getMinutes();

    // Calcular o tempo até o próximo alarme
    var alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
    
    if (alarmDate <= now) {
        alarmDate.setDate(alarmDate.getDate() + 1); // Adiciona um dia se o alarme já passou hoje
    }

    var timeUntilAlarm = alarmDate - now;

    setTimeout(function() {
        alert('Acorda!!!');
    }, timeUntilAlarm);
}

function updateAlarmHistory() {
    var ul = document.getElementById('alarmHistory');
    ul.innerHTML = ''; // Limpa o conteúdo atual

    // Adiciona cada alarme ao histórico
    alarms.forEach(function(alarm) {
        var li = document.createElement('li');
        li.textContent = 'Alarme às ' + alarm;
        ul.appendChild(li);
    });
}
