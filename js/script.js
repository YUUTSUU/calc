'use strict';

const inputKzt = document.querySelector('#kzt'),
    inputUsd = document.querySelector('#usd');

inputKzt.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputKzt.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Ошибка";
        }
    });
});



