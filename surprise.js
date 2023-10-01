
 $(window).on('load', function () {
    const trucs = document.getElementsByClassName("surp");
    const val = Math.floor(Math.random()*4)+1;
    for (var i = 0 ; i < trucs.length ; i++) {
        trucs[i].classList.add(`surp${val}`);
    }
}); 