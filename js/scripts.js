;(function (){
    'use strict';
    //Список предлагаемых песен
    let playList = [
        {
         author: "LED ZEPPELIN",
         song:"STAIRWAY TO HEAVEN"
        },
        {
         author: "QUEEN",
         song:"BOHEMIAN RHAPSODY"
        },
        {
         author: "LYNYRD SKYNYRD",
         song:"FREE BIRD"
        },
        {
         author: "DEEP PURPLE",
         song:"SMOKE ON THE WATER"
        },
        {
         author: "JIMI HENDRIX",
         song:"ALL ALONG THE WATCHTOWER"
        },
        {
         author: "AC/DC",
         song:"BACK IN BLACK"
        },
        {
         author: "QUEEN",
         song:"WE WILL ROCK YOU"
        },
        {
         author: "METALLICA",
         song:"ENTER SANDMAN"
        }
       ],
       newPlayList = [];

    let enterComplitedPlayList = document.getElementById('check-play-list-complite'),
        authorInput            = document.getElementById('author'),
        songInput              = document.getElementById('song'),
        addBtn                 = document.getElementById('addBtn'),
        createBtn              = document.getElementById('createBtn'),
        arrayBtn               = [authorInput, songInput];

        // Слушаем событие и добавляем готовый список при клике
    enterComplitedPlayList.addEventListener('click', function(e) {

        createListOfSong(playList);
    });

        //Проверяем заполнен ли инпут для заполнения автора и названия песни
    arrayBtn.forEach(function(elem) {
        elem.addEventListener("input", function() {
            if (authorInput.value.length && songInput.value.length) {
                addBtn.removeAttribute('disabled');
            } else {
                addBtn.setAttribute('disabled', true);
            }
        });
    });

        //При нажатии на кнопку "addBtn" добавляем введенные данные в обьект и в новый массив с песнями
    addBtn.addEventListener('click', function(e){
        let obj = {};
        
        obj.author = authorInput.value;
        obj.song = songInput.value;
        
        newPlayList.push(obj);
        
        authorInput.value = "";
        songInput.value = "";
           
        if (newPlayList.length){
            createBtn.style.display="block";
        }
        addBtn.setAttribute('disabled', true);
    });
    
        //Добавляем новый массив с песнями в HTML
    createBtn.addEventListener('click', function(e) {

        createListOfSong(newPlayList);

        createBtn.style.display="none";

        newPlayList = [];
    });


    function createListOfSong (arr) {

        let lists = document.getElementById('lists');
        
        lists.innerHTML = "";
       
        arr.forEach(elem => {
            let liTrack = document.createElement('li');

            liTrack.classList.add('track');
            liTrack.innerHTML = `
                <span class="author">${elem.author} - </span>
                <span class="song">"${elem.song}"</span>
            `;
             lists.append(liTrack);
         });
    }

})();

