
var lose_sound = new Audio('lose.mp3');
 win_sound = new Audio('pop.mp3')

 localStorage.setItem("winner","unknown")
 localStorage.setItem("record", 999)





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
var couple_count = 0
var count = 1
result = 0




  var playCards = document.querySelectorAll("div.el");
  for (let i = 0; i < playCards.length; i++) {
    playCards[i].setAttribute("id", i) //встановлюємо id для кожної картки
    playCards[i].addEventListener("click", function () {
      this.style.backgroundImage = `url(${shuffleArray[i].img})`;
      choosenCards.push(shuffleArray[this.id].name)
      choosenCardsId.push(this.id)
      // коли в масива дві картки
      if(choosenCards.length === 2){
        setTimeout(function(){//відстрочка виконання функції
            if(choosenCards[0] === choosenCards[1] && choosenCardsId[0] != choosenCardsId[1]){
                playCards[choosenCardsId[0]].style.visibility = "hidden"
                playCards[choosenCardsId[1]].style.visibility = "hidden" //приховуємо картки
                win_sound.currentTime = 0;
                win_sound.play();
                couple_count+=1
                if (couple_count == 5){
                  result = sec
                  
                  if(localStorage.getItem("record")>result){
                    localStorage.setItem("record",result)
                    localStorage.setItem("winner",prompt())
                  }
                  localStorage.setItem("score",`${result} с.`)
                  count = 0
                  document.getElementById("result").style.position = "relative"
                  if (sec.toString().substr(-1) == "1" && sec.toString().substr(0) != "1"){
                    document.getElementById("result").innerText = `Ви пройшли гру за ${result} секунду` ;
                  }
                  else if (sec.toString().substr(-1) == "2" && sec.toString().substr(-1) == "3" && sec.toString().substr(-1) == "4" && sec.toString().substr(0) != "1"){
                    document.getElementById("result").innerText = `Ви пройшли гру за ${result} секунди` ;
                  }
                  else{
                    document.getElementById("result").innerText = `Ви пройшли гру за ${result} секунд` ;
                  }
                  document.getElementById("result").style.visibility = "visible"
                  document.getElementById("result").style.opacity = "100"


                } 
                try{
                  playCards[choosenCardsId[2]].style.backgroundImage = "none"
                }
                catch{
                  console.log('ok')
               }
                
            }
                else{
                 // attempts_var+=1
                 // attempts.style.textContent = `Attempts:(${attempts_var})`;
                for(let i = 0;i<choosenCards.length;i++){
                  
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
  sec+= count;
  let timer = document.getElementById("timer");
  
  timer.innerText = `Час:${sec}`;
}

initSec();



var audio = new Audio('game.mp3');
audio.autoplay = true;
var checkclick = 1
audio.play()
document.getElementById("record").addEventListener("click",function(){
  if  (checkclick == 1){
    this.style.fontSize = "30px"
    this.style.maxWidth= "300px"
    this.style.overflow = "visible"
    checkclick = 0
    console.log("ok")
    this.innerText =  localStorage.getItem("winner")+":"+localStorage.getItem("record")
    
  }
  else{
    this.style.maxWidth= "60px"
    this.style.overflow = "hidden"
    checkclick = 1
    this.style.fontSize = "55px"
    this.innerText = ">"
  }
  
})