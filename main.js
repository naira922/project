let player = document.getElementById('player');
let block = document.getElementById('block');
const scoreElement = document.getElementById('score');
let score = 0;
function moveLeft() {
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if (curLeft <= 0) return;
    const newLeft = curLeft - 100;
    player.style.left = newLeft + "px";
}

function moveRight() {
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if (curLeft >= 200) return;
    const newLeft = curLeft + 100;
    player.style.left = newLeft + "px";
}

document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowLeft") moveLeft();
    else if (event.key == "ArrowRight") moveRight();
})
block.addEventListener('animationiteration', () => {
    const random = (Math.floor(Math.random() * 3)) * 100;
    block.style.left = random + "px";
    score++;
    scoreElement.innerHTML = `Your score is : ${score}`;

})
setInterval(() => {
    let lefplayer = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let lefblock = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blocktop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
    if (lefplayer == lefblock && blocktop < 450 && blocktop > 310) {
        alert(`Game Over \n Your score is : ${score}`);

        block.style.top = -100 + 'px';
        score = 0;
        location.reload()
    }


}, 1)