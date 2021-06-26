document.addEventListener("DOMContentLoaded", function(event) {
    let countries = {
        europe : [
            {
                'name': 'Pays bas',
                'gender' : 'm',
                'correct_name' : 'les Pays-Bas (m)'
            },
            {
                'name' : 'Belgique',
                'gender' : 'f',
                'correct_name' : 'la Belgique (f)'
            },
            {
                'name': 'Luxembourg',
                'gender' : 'm',
                'correct_name' : 'le Luxembourg (m)'
             }, {
                'name': 'Italie',
                'gender' : 'f',
                'correct_name' : 'l\'Italie (f)'
            },
            {
                'name' : 'Hongrie',
                'gender': 'f',
                'correct_name' : 'la Hongrie (f)'
            },
            {
                'name' : 'Portugal',
                'gender': 'm',
                'correct_name' : 'le Portugal (m)'
            }
        ]
    }

    var correct = 0;
    var currentIndex = 0;
    let totalElements = countries.europe.length;
    var wrongs = [];

    function startGame() {
        document.getElementById('country-name').innerText = countries.europe[currentIndex].name;
    }

    function handleClickEvent() {
        let answer = this.getAttribute('answer');

        if (answer === countries.europe[currentIndex].gender) {
            correct++;
            document.getElementById('feedback').innerText = "Bravo!";
        } else {
            wrongs.push(countries.europe[currentIndex]);
            document.getElementById('feedback').innerText = "Dommage: c'est pas bon... ";
        }

        if(currentIndex < countries.europe.length-1) {
            currentIndex++;

            document.getElementById('country-name').innerText = countries.europe[currentIndex].name;

        } else {
            gameFinished();
        }
    }

    function gameFinished() {
        let score = Math.floor(correct/totalElements*100);


        var html = '<h1 class="pt-2 text-center">Finished</h1><p class="text-center">Score = '+ score +'%</p><hr>';

        html += '<strong>You missed these countries</strong>';

        html += '<ul>';
        for (var i = 0; i < wrongs.length; i++) {
            html += '<li>'+ wrongs[i].correct_name +'</li>'
        }

        html += '</ul>';

        document.getElementById('game-container').innerHTML = html;
    }

    var elements = document.getElementsByClassName('game-control');

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', handleClickEvent, false)
    }
});