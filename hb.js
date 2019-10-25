'use strict';

window.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {

        var wrapper = document.getElementById('wrapper');

        if (typeof wrapper.classList !== 'undefined') {

            wrapper.classList.add('slide-items');

        }

        else {

            var curentclass = wrapper.className;

            currentclass += ' slide-items';

            wrapper.className = currentclass;

        }

    }, 2000);

});

// var x= document.getElementById("myAudio");
// x.play();
// x.pause();
// x.onended = function() {
//   canplaythrough;
// }
