function doSomething(x) {
    modal = document.getElementById('modal-content');
    if (x == 1) {
        modal.innerHTML = '<b class="heading">Hot Or Cold</b>';
    } else if (x == 2) {
        modal.innerHTML = '<b class="heading">Shoot</b>';
    } else if (x == 4) {
        modal.innerHTML = `<b class="heading">2dCricket</b>
        <div class="image-wrapper">
            <img class="modal-image" src='images/cricket.gif'>
            </img>
        </div>
        <div class="desc">
            One of the first games that I made. I have been a huge cricket fan since childhood
            and have always wanted to create a simple 2d cricket game.
            This was inspired by Daniel Schiffman's 'Angry birds' video. Made using matter.js as
            the physics engine and p5js for rendering and animations.
            <br>
            <br>
            The game features randomised fielding positions, ball lines and speeds. You can play
            the classic mode or a quick game.

            <br>
            <br>
            View the code <a class="goodstyle" href="https://github.com/vtg2000/2dCricket"><b>here</b></a> or play the game <a class="goodstyle" href="https://vtg2000.github.io/2dCricket"><b>here</b></a>.
        </div>
        `;
    }
}