const life3 = document.getElementById("life3")
const life2 = document.getElementById("life2")
const life1 = document.getElementById("life1")
const docOck = document.getElementById("Doc")
const OakImg = document.getElementById("DocImg")
const flask = document.querySelectorAll('.flask')
const flaskT = document.getElementById("flaskT")
const flaskB = document.getElementById("flaskB")

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
const img = document.createElement('img');
    
    img.src = './Sprites/CursorWeb.png';
    
    img.classList.add('click-effect');
    img.style.left = `${event.clientX}px`;
    
    img.style.top = `${event.clientY}px`;
    
    document.body.appendChild(img);
    
    setTimeout(() => {
        img.remove(); //removivel
    }, 900);
})

docOck.addEventListener('click', function hit () {
    if(!docOck.classList.contains('hitAnimation')) {
        docOck.classList.add('hitAnimation')
        setTimeout(() => {
            docOck.classList.remove('hitAnimation')
        }, 300);
    }
})


