const life3 = document.getElementById("life3")
const life2 = document.getElementById("life2")
const life1 = document.getElementById("life1")
const docOck = document.getElementById("Doc")
const OckImg = document.getElementById("DocImg")
const flask = document.querySelectorAll('.flask')
const flaskT = document.getElementById("flaskT")
const flaskB = document.getElementById("flaskB")
const points = document.querySelector('.Points')
const img = document.createElement('img');
let pontos = 1
let click = true

    flask.forEach(flask => {
        flask.addEventListener('click', function () {
           flaskT.style.display = "none"
           flaskB.style.display = "block"
           setTimeout( () => {
            flaskT.style.display = "block"
            flaskB.style.display = "none"
           }, 300)
        })
    })
    
document.body.addEventListener('click', function() {

    
    img.src = '../Sprites/CursorWeb.png';
    
    img.classList.add('click-effect');
    img.style.left = `${event.clientX}px`;
    
    img.style.top = `${event.clientY}px`;
    
    document.body.appendChild(img);
    
    setTimeout(() => {
        img.remove(); //removivel
    }, 900);
})

OckImg.addEventListener('click', function hit () {
if (click) {
    click = false;
    if(!docOck.classList.contains('hitAnimation')) {
        docOck.classList.add('hitAnimation')
            setTimeout(() => {
            docOck.classList.remove('hitAnimation')
            }, 300);
}
    if (img.src = '../Sprites/CursorWeb.png') {
        points.textContent = "Pontos:" +" "+ pontos++
            if (pontos > 50) {
            OckImg.style.display = "none"
        }
    }
        setTimeout(() => {
            click = true;
        }, 800);
}})
