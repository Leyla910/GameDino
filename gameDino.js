const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener('keydown', function(event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") {  //проверяем имеет ли Дино функцию jump
        dino.classList.add("jump");
    }
    setTimeout(function() {  //setTimeout даёт возможность использовать автоматическую функцию один раз через определённый отрезок времени
        dino.classList.remove("jump");
    }, 300)                  //Промежуток времени - 300 миллисекунд
}

//GameOver
let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));  //dinoTop, потому что он работает с верхом,где всё происходит
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert("Game Over!");
    }
}, 10)