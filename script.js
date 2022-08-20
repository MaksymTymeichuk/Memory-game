var audio = new Audio('game.mp3');
 lose_sound = new Audio('lose.mp3')
 win_sound = new Audio('pop.mp3')
 attempts = document.getElementById("try")
 attempts_var = 0

  audio.play();



const cards = [
    {
      name: "html",
      img:
        "https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true"
    },
    {
      name: "css",
      img: "https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true"
    },
    {
      name: "JavaScript",
      img: "https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true"
    },
    {
      name: "python",
      img:
        "https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true"
    },
    {
      name: "sass",
      img: "https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true"
    }
  ];

//додаткові масиви
var choosenCards = [];
var choosenCardsId = [];




  var playCards = document.querySelectorAll("div.el");
  for (let i = 0; i < playCards.length; i++) {
    playCards[i].setAttribute("id", i) //встановлюємо id для кожної картки
    playCards[i].addEventListener("click", function () {
      this.style.backgroundImage = `url(${shuffleArray[i].img})`;
      choosenCards.push(shuffleArray[this.id].name)
      choosenCardsId.push(this.id)
      // коли в масива дві картки
      if(choosenCards.length === 2){
        console.log("!")
        setTimeout(function(){//відстрочка виконання функції
            if(choosenCards[0] === choosenCards[1] && choosenCardsId[0] != choosenCardsId[1]){
                playCards[choosenCardsId[0]].style.visibility = "hidden"
                playCards[choosenCardsId[1]].style.visibility = "hidden" //приховуємо картки
                win_sound.play();
                try{
                  playCards[choosenCardsId[2]].style.backgroundImage = "none"
                }
                catch{
                  console.log(1)
               }
                
            }
                else{
                 // attempts_var+=1
                 // attempts.style.textContent = `Attempts:(${attempts_var})`;
                for(let i = 0;i<choosenCards.length;i++){
                  
                  console.log(i)
                  playCards[choosenCardsId[i]].style.backgroundImage = "none"
                lose_sound.play();
                }
                
            }
            choosenCardsId = []
            choosenCards = []
            
        }, 500);
      }
    });
  }
  
  let array = [...cards, ...cards],
    shuffleArray = array.sort(() => 0.5 - Math.random());

    // cекундомір
var sec = 0;
function initSec() {
  sec = 0;
  setInterval(tick, 1000);
}

function tick() {
  sec++;
  let timer = document.getElementById("timer");
  timer.innerText = `Час:${sec}`;
}

initSec();
    