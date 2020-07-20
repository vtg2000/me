function showGames() {
    $('.demo01').hide()
    $('.games').toggle()
    for (let i = 1; i < 7; i++) {
        $('.type' + i).removeClass('highlight');
    }
    $('.type3').addClass('highlight');

    AOS.refresh();
}

function showFav() {
    $('.demo01').hide()
    $('.fav').toggle()
    for (let i = 1; i < 7; i++) {
        $('.type' + i).removeClass('highlight');
    }
    $('.type1').addClass('highlight');
    AOS.refresh();
}


function showAndroid() {
    $('.demo01').hide()
    $('.android').toggle()
    for (let i = 1; i < 7; i++) {
        $('.type' + i).removeClass('highlight');
    }
    $('.type4').addClass('highlight');
    AOS.refresh();
}

function showWeb() {
    $('.demo01').hide()
    $('.web').toggle()
    for (let i = 1; i < 7; i++) {
        $('.type' + i).removeClass('highlight');
    }
    $('.type5').addClass('highlight');
    AOS.refresh();
}

function showOthers() {
    $('.demo01').hide()
    $('.other').toggle()
    for (let i = 1; i < 7; i++) {
        $('.type' + i).removeClass('highlight');
    }
    $('.type6').addClass('highlight');
    AOS.refresh();
}

function showAll() {
    $('.demo01').show()
    for (let i = 1; i < 7; i++) {
        $('.type' + i).removeClass('highlight');
    }
    $('.type2').addClass('highlight');
    AOS.refresh();

}