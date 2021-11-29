/**
 * Ejemplo sintaxis javascript inseguro
 */

// var balls = document.getElementsByClassName("ball");
// document.onmousemove = function () {
//     var x = event.clientX * 100 / window.innerWidth + "%";
//     var y = event.clientY * 100 / window.innerHeight + "%";
//     for (var i = 0; i < 2; i++) {
//         balls[i].style.left = x;
//         balls[i].style.top = y;
//         balls[i].style.transform = "traslate(-" + x + ",-" + y + ")";
//     }
// }

/**
 * Ejemplo sintaxis javascript seguro
 */

const eyes = () => {
    const balls = document.querySelectorAll(".ball");
    
    document.addEventListener('mousemove', event => {
        let x = event.clientX * 100 / window.innerWidth + "%";
        let y = event.clientY * 100 / window.innerHeight + "%";
        balls.forEach(ball => {
            ball.style.left = x;
            ball.style.top = y;
            ball.style.transform = "traslate(-" + x + ",-" + y + ")";
        });
    });
}

eyes();