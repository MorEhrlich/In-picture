'use strict'

var gCurrQuestIdx = 0
var gQuests = [
    { id: 1, opts: [`I'm a Fruit!`, `I'm a Vegteble!`], src: 'img/eggplant.png', correctOptIndex: 0 },
    { id: 2, opts: [`I'm a Mammel!`, `I'm a Fish!`], src: 'img/dolphin.png', correctOptIndex: 0 },
    { id: 3, opts: [`I'm at New York!`, `I'm at France!`], src: 'img/eifel.png', correctOptIndex: 1 },
]

function initGame() {
    var elBtn = document.querySelector('.restart');
    elBtn.innerHTML = '';
    gCurrQuestIdx = 0;
    renderQuest();
}


function renderQuest() {
    var currQuest = gQuests[gCurrQuestIdx];
    var elPicContainer = document.querySelector('.pic');
    var strHtml = `<img class="pic" src = "${currQuest.src}"/>`;
    elPicContainer.innerHTML = strHtml;
    var elAnswer = document.querySelector('.buttons');
    // elAnswer.innerHTML = '';
    var strHTML2 = ''
    for (var i = 0; i < 2; i++) {
        var buttonHtml = `<button class="buttons" onClick="checkAnswer(${i})"> ${currQuest.opts[i]}</button>`;
        strHTML2 += buttonHtml;
    }
    elAnswer.innerHTML = strHTML2

}

function checkAnswer(optIdx) {
    var currQuest = gQuests[gCurrQuestIdx];
    if (optIdx === currQuest.correctOptIndex) {
        if (gCurrQuestIdx === gQuests.length -1) {
           renderWin()
        } else {
            gCurrQuestIdx++;
            renderQuest();
        }
    }
    else (alert('Wrong answer dude!'));
}

function renderWin(){
    alert('Congrats you won!');
    var elBtn = document.querySelector('.restart');
    var btnReplayHTML = `<button class="restart" onClick=" initGame()">Restart </button>`;
    elBtn.innerHTML = btnReplayHTML;
}