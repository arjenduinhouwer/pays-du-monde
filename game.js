document.addEventListener("DOMContentLoaded", function(event) {
    let countries = {
        europe : [
            {
                'name': 'Pays bas',
                'gender' : 'm',
                'correct_name' : 'les Pays-Bas'
            },
            {
                'name' : 'Belgique',
                'gender' : 'f',
                'correct_name' : 'la Belgique'
            },
            {
                'name': 'Luxembourg',
                'gender' : 'm',
                'correct_name' : 'le Luxembourg'
             }, {
                'name': 'Italie',
                'gender' : 'f',
                'correct_name' : 'l\'Italie'
            },
            {
                'name' : 'Hongrie',
                'gender': 'f',
                'correct_name' : 'la Hongrie'
            },
            {
                'name' : 'Portugal',
                'gender': 'm',
                'correct_name' : 'le Portugal'
            },
            {
                'name' : 'Albanie',
                'gender': 'f',
                'correct_name' : 'l\'Albanie'
            },
            {
                'name' : 'Allemagne',
                'gender' : 'f',
                'correct_name' : 'l\'Allemagne'
            },
            {
                'name' : 'Andorre',
                'gender': 'f',
                'correct_name': 'l\'Andorre'
            },
            {
                'name' : 'Arménie',
                'gender': 'f',
                'correct_name': 'l\'Arménie'
            },
            {
                'name' : 'Autriche',
                'gender': 'f',
                'correct_name': 'l\'Autriche'
            },
            {
                'name' : 'Biélorussie',
                'gender': 'f',
                'correct_name': 'la Biélorussie'
            },
            {
                'name' : 'Bosnie-Herzégovine',
                'gender': 'f',
                'correct_name': 'la Bosnie-Herzégovine'
            },
            {
                'name' : 'Bulgarie',
                'gender': 'f',
                'correct_name': 'la Bulgarie'
            },
            {
                'name' : 'Chypre',
                'gender': 'f',
                'correct_name': 'Chypre (sans article)'
            },
            {
                'name' : 'Croatie',
                'gender': 'f',
                'correct_name': 'la Croatie'
            },
            {
                'name' : 'Danemark',
                'gender': 'm',
                'correct_name': 'le Danemark'
            },
            {
                'name' : 'Estonie',
                'gender': 'f',
                'correct_name': 'l\'Estonie'
            },
            {
                'name' : 'Finlande',
                'gender': 'f',
                'correct_name': 'la Finlande'
            },
            {
                'name' : 'France',
                'gender': 'f',
                'correct_name': 'la France'
            },
            {
                'name' : 'Géorgie',
                'gender': 'f',
                'correct_name': 'la Géorgie'
            },
            {
                'name' : 'Grèce',
                'gender': 'f',
                'correct_name': 'la Grèce'
            },
            {
                'name' : 'Irlande',
                'gender': 'f',
                'correct_name': 'l\'Irlande'
            },
            {
                'name' : 'Islande',
                'gender': 'f',
                'correct_name': 'l\'Islande'
            },
            {
                'name' : 'Lettonie',
                'gender': 'f',
                'correct_name': 'la Lettonie'
            },
            {
                'name' : 'Liechtenstein',
                'gender': 'm',
                'correct_name': 'le Liechtenstein'
            },
            {
                'name' : 'Lituanie',
                'gender': 'f',
                'correct_name': 'la Lituanie'
            },
            {
                'name' : 'Macédoine du Nord',
                'gender': 'f',
                'correct_name': 'la Macédoine du Nord'
            },
            {
                'name' : 'Malte',
                'gender': 'f',
                'correct_name': 'Malte (sans article)'
            },{
                'name' : 'Moldavie',
                'gender': 'f',
                'correct_name': 'la Moldavie'
            },{
                'name' : 'Monaco',
                'gender': 'm',
                'correct_name': 'Monaco (sans article)'
            },{
                'name' : 'Monténégro',
                'gender': 'm',
                'correct_name': 'le Monténégro'
            },{
                'name' : 'Norvège',
                'gender': 'f',
                'correct_name': 'la Norvège'
            },{
                'name' : 'Pologne',
                'gender': 'f',
                'correct_name': 'la Pologne'
            },{
                'name' : 'Roumanie',
                'gender': 'f',
                'correct_name': 'la Roumanie'
            },{
                'name' : 'Royaume Uni',
                'gender': 'm',
                'correct_name': 'le Royaume-Uni'
            },
            {
                'name' : 'Russie',
                'gender': 'f',
                'correct_name': 'la Russie'
            },
            {
                'name' : 'Saint-Marin',
                'gender': 'm',
                'correct_name': 'Saint-Marin (sans article)'
            },
            {
                'name' : 'Serbie',
                'gender': 'f',
                'correct_name': 'la Serbie'
            },
            {
                'name' : 'Slovaquie',
                'gender': 'f',
                'correct_name': 'la Slovaquie'
            },
            {
                'name' : 'Slovénie',
                'gender': 'f',
                'correct_name': 'la Slovénie'
            },
            {
                'name' : 'Suède',
                'gender': 'f',
                'correct_name': 'la Suède'
            },
            {
                'name' : 'Suisse',
                'gender': 'f',
                'correct_name': 'la Suisse'
            },
            {
                'name' : 'Tchéquie',
                'gender': 'f',
                'correct_name': 'la Tchéquie'
            },
            {
                'name' : 'Turquie',
                'gender': 'f',
                'correct_name': 'la Turquie'
            },
            {
                'name' : 'Ukraine',
                'gender': 'f',
                'correct_name': 'l\'Ukraine'
            },
            {
                'name' : 'Vatican',
                'gender': 'm',
                'correct_name': 'le Vatican'
            },

        ]
    }

    const gameSize = 15;
    var correct = 0;
    var currentIndex = 0;
    var wrongs = [];
    var gameSet = [];
    let totalSet = countries.europe.length;

    function createGameSet() {
        for (var i = 0; i < gameSize; i++) {
            console.log(gameSet);
            var index = getRandomInt(totalSet-1)



            while(elementIsInSet(index)) {
                index = getRandomInt(totalSet-1);
                console.log(index + " is dubbel");
            }

            gameSet.push(index);
        }
    }

    function elementIsInSet(index) {
        return (gameSet.indexOf(index) > -1);
    }

    function getRandomInt(limit) {
        return Math.floor(Math.random()*limit);
    }

    function startGame() {
        createGameSet();
        document.getElementById('country-name').innerText = countries.europe[gameSet[currentIndex]].name;
    }

    function handleClickEvent() {
        let answer = this.getAttribute('answer');

        if (answer === countries.europe[gameSet[currentIndex]].gender) {
            correct++;
            document.getElementById('feedback').innerText = "Bravo !";
        } else {
            wrongs.push(countries.europe[gameSet[currentIndex]]);
            document.getElementById('feedback').innerText = "Dommage: Ce n'est pas correct... ";
        }

        if(currentIndex < gameSet.length-1) {
            currentIndex++;
            document.getElementById('game_index').innerText = currentIndex+1
            document.getElementById('country-name').innerText = countries.europe[gameSet[currentIndex]].name;

        } else {
            gameFinished();
        }
    }

    function gameFinished() {
        let score = Math.floor(correct/gameSize*100);

        var html = '<h1 class="pt-2 text-center">Terminé</h1><p class="text-center">Score = '+ score +'%</p><hr>';

        if(wrongs.length > 0) {
            html += '<strong>Vous avez manqué ces pays</strong> <br><br>';

            html += '<ul>';
            for (var i = 0; i < wrongs.length; i++) {
                html += '<li>'+ wrongs[i].correct_name + ' ('  + wrongs[i].gender + ')</li>'
            }

            html += '</ul>';
        }

        html += '<button onclick="window.location.reload()" class="mt-3 w-100">Recommencer</button>'

        document.getElementById('game-container').innerHTML = html;
    }

    var elements = document.getElementsByClassName('game-control');

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', handleClickEvent, false)
    }

    startGame();
});