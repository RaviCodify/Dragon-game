score = 0;
cross = true;

document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('jumpDino');
        setTimeout(() => {
            dino.classList.remove('jumpDino')
        }, 700);
    }
    else if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox - 112 + 'px';
    }
    else if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 112 + 'px';
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 93 && offsetY < 53) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 700);
    }
}, 100);


function updateScore(score) {
    let scoreCont = document.getElementById('scoreCont');
    scoreCont.innerHTML = "Your Score: " + score
}