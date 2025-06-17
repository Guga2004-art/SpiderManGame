const lifeSpider3 = document.getElementById("life3");
const lifeSpider2 = document.getElementById("life2");
const lifeSpider1 = document.getElementById("life1");
const docOck = document.getElementById("Doc");
const OckImg = document.getElementById("DocImg");
const flask = document.querySelectorAll('.flask'); // NodeList
const flaskT = document.getElementById("flaskT");
const flaskB = document.getElementById("flaskB");
const points = document.querySelector('.Points');
const pontosBlock = document.querySelector('.bloco')
const LeftFlip = document.getElementById("Lf")
const RightFlip = document.getElementById("Rf")
const player = document.getElementById("player")
const flipImage = "../Sprites/SpiderManTurn.png"
const StaticSPider = "../Sprites/SpiderManStop.png"
const bossLife = document.getElementById("bossLife");
const coin = document.getElementById("coin")
const lifeBarBoss = document.getElementById("lifeBar");
const img = document.createElement('img'); // Para o efeito de clique do cursor
const tutorialBlock = document.querySelector('.tutorialBlock')
const belt = document.getElementById("beltB")
const gameName = document.querySelector('.GameName')
let pontos = 0;
let click = true;
let lifeOck = 30;
const body = document.querySelector('body')
player.scr = "../Sprites/SpiderManStop.png"
belt.addEventListener("mouseover", function () {
    belt.style.filter = "blur(0px)"
    body.style.filter = " blur(5px)"
})
belt.addEventListener("mouseout", function () {
    body.style.filter = " blur(0px)"
})

document.addEventListener('keydown', (event) => {
    // Executa a lógica apenas se a tecla for Espaço ou Seta para Cima
    if (event.key === ' ' ) {   
        player.src = "../Sprites/BlockSpiderMan.png";
        LeftFlip.style.display = "none"
        RightFlip.style.display = "none"

        setTimeout(() => {
            LeftFlip.style.display = "block"
            RightFlip.style.display = "block"
        }, 1300)
    }
});
//Esconder todos os elementos do jogo por padrão 
function hideGameElements() {
    lifeSpider3.style.display = "none";
    lifeSpider2.style.display = "none";
    lifeSpider1.style.display = "none";
    docOck.style.display = "none";
    flaskT.style.display = "none"; // flaskT é o que aparece primeiro
    flaskB.style.display = "none"; // flaskB é o que aparece depois do clique
    pontosBlock.style.display = "none"
    LeftFlip.style.display = "none";
    RightFlip.style.display = "none";
    player.style.display = "none";
    bossLife.style.display = "none";
    lifeBarBoss.style.display = "none";
    belt.style.display = "none"
    coin.style.display = "none"; // A moeda deve ser controlada pela lógica de pontos
    // Você também pode adicionar um "tela de carregamento" ou "tela de início" aqui
}

function startGame () {
    hideGameElements();

    setTimeout(() => {
        // Mostrar os elementos após um tempo
        console.log("Jogo Iniciado!");
        tutorialBlock.style.display = "none"
        belt.style.display = "block"
        lifeSpider3.style.display = "block";
        lifeSpider2.style.display = "block";
        lifeSpider1.style.display = "block";
        docOck.style.display = "block";
        flaskT.style.display = "block";
        pontosBlock.style.display = "block"
        LeftFlip.style.display = "block";
        RightFlip.style.display = "block";
        player.style.display = "block";
        bossLife.style.display = "block";
        lifeBarBoss.style.display = "block";

        updateLifeBar();

        // docOck.classList.add('appear-animation');

    }, 8000);
}

function updateLifeBar() {
const blackScreen = document.querySelector('.blackScreen')
const blackScreenImg = document.getElementById("blackScreenImg")
    if (lifeOck >= 25) {
        lifeBarBoss.style.width = "100%";
    } else if (lifeOck < 25 && lifeOck >= 15) {
        lifeBarBoss.style.width = "70%";
    } else if (lifeOck < 15 && lifeOck >= 10) {
        lifeBarBoss.style.width = "40%";
    } else if (lifeOck < 10 && lifeOck > 5) {
        lifeBarBoss.style.width = "10%";
    } else if (lifeOck < 5 && lifeOck > 0) { 
        lifeBarBoss.style.width = "5%";
    } else {
        lifeBarBoss.style.display = "none";
        docOck.style.margin = "600px"
        blackScreen.style.display = "flex"
        tutorialBlock.style.display = "none"
        lifeSpider3.style.display = "none";
        lifeSpider2.style.display = "none";
        lifeSpider1.style.display = "none";
        flaskT.style.display = "none";
        pontosBlock.style.display = "none"
        LeftFlip.style.display = "none";
        RightFlip.style.display = "none";
        player.style.display = "none";
        belt.style.display = "none"
        bossLife.style.display = "none"
        blackScreenImg.classList.add("blackScreenAnimation")
        gameName.textContent = "Victory"
        coin.style.display = "none"
        //docock machicado aqui em baixo
        setTimeout (() => {
            blackScreenImg.classList.remove("blackScreenAnimation")
            blackScreen.style.display = "none"
        }, 1000)
    }
}
// garante  que os elementos do jogo estejam escondidos ANTES de startGame ser chamado.
document.addEventListener('DOMContentLoaded', () => {
    hideGameElements(); // Esconde tudo imediatamente ao carregar
    startGame(); // Inicia o temporizador para mostrar os elementos
});

flask.forEach(f => { // Renomeado para 'f' para evitar conflito com 'flask'
    f.addEventListener('click', function () {
        flaskT.style.display = "none";
        flaskB.style.display = "block";
        pontos++;
        points.textContent = "Points:" + " " + pontos;

        if (pontos == 20 || pontos == 30 || pontos == 50) {
            coin.classList.add("coinAnimation");
            coin.style.display = "block"; // Garante que a moeda esteja visível quando a animação começa
        } else if (pontos == 29 || pontos == 39) { // Remove a animação e esconde depois de um tempo
            coin.classList.remove("coinAnimation");

            setTimeout(() => {
                coin.style.display = "none";
            }, 500); 
        }

        setTimeout(() => {
            flaskT.style.display = "block";
            flaskB.style.display = "none";
        }, 300);
    });
});

document.body.addEventListener('click', function(event) {
    if (docOck.style.display === "block") { // Verifica se o jogo está visível
        img.style.zIndex = '2'
        img.src = '../Sprites/CursorWeb.png';
        img.classList.add('click-effect');
        img.style.left = `${event.clientX}px`;
        img.style.top = `${event.clientY}px`;
        document.body.appendChild(img);
        setTimeout(() => {
            img.remove();
        }, 1000);
    }
    player.src = "../Sprites/ShootSpiderMan.png"
})

docOck.addEventListener('click', function hit () {
    if (click && docOck.style.display === "block") { // Verifica se o jogo está visível
        click = false;
        
        if(!docOck.classList.contains('hitAnimation')) {
            docOck.classList.add('hitAnimation');

            setTimeout(() => {
                docOck.classList.remove('hitAnimation');
            }, 300);
        }
        
        lifeOck--;
        updateLifeBar();
        // Reativa a possibilidade de clique após um pequeno atraso
        setTimeout(() => {
            click = true;
        }, 800);
    }
});

docOck.classList.add("docOckMovesSides")
// Player 
LeftFlip.addEventListener("mouseover", function () {
    if (player.style.display === "block") {
        // Remove other animation/state classes
        player.classList.remove("SpiderMovesRight");
        player.classList.remove("SpiderMovesStart");

        // Add the desired animation
        player.classList.add("SpiderMovesLeft");
        player.src = flipImage;
        player.classList.add("flipped"); // For visual left-facing
    }
});

RightFlip.addEventListener("mouseover", function () {
    if (player.style.display === "block") {
        // Remove other animation/state classes
        player.classList.remove("SpiderMovesLeft");
        player.classList.remove("SpiderMovesStart");

        // Add the desired animation
        player.classList.add("SpiderMovesRight");
        player.src = flipImage;
        player.classList.remove("flipped"); // Assuming right-facing is the default for flipImage or SpiderMovesRight handles it
    }
});

function resetPlayerToStatic() {
    if (player.style.display === "block") {
        // Remove movement animation classes
        player.classList.remove("SpiderMovesLeft");
        player.classList.remove("SpiderMovesRight");

        // Add idle/start animation class
        player.classList.add("SpiderMovesStart"); // Or some idle animation
        player.src = StaticSPider;
        player.classList.remove("flipped"); // Ensure it's not flipped when static
    }
}

LeftFlip.addEventListener("mouseout", resetPlayerToStatic);
RightFlip.addEventListener("mouseout", resetPlayerToStatic);
