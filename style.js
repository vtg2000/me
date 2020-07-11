function showGames() {
    $('.demo01').hide()
    $('.games').toggle()
    AOS.refresh();
}

function showAndroid() {
    $('.demo01').hide()
    $('.android').toggle()
    AOS.refresh();
}

function showWeb() {
    $('.demo01').hide()
    $('.web').toggle()
    AOS.refresh();
}

function showOthers() {
    $('.demo01').hide()
    $('.other').toggle()
    AOS.refresh();
}

function showAll() {
    $('.demo01').show()
    AOS.refresh();
}