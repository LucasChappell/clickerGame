let counter = document.getElementById('counter');
let button = document.getElementById('button');
let autoCounter = document.getElementById('autoCounter');
let autoButton = document.getElementById('autoClicker');
let autoPrice = document.getElementById('autoPrice');
let background = document.getElementById('background');
let upgradeCounter = document.getElementById('upgradeCounter');
let upgradeButton = document.getElementById('upgradeClicker');
let upgradePrice = document.getElementById('upgradePrice');
let flash = document.getElementById('flash');
let prestige = document.getElementById('prestige');
let r = 250;
let b = 0;
let g = 0;

let num = 0;
let clickerNum = 0;
let clickerPrice = 50;
let priceforUp = 50;
let clickAmt = 100;
let upgradeNum = 0;
let oA = 0;
let prestigeLvl = 1;
let totalPoints = 0;
let upgradeAmt = 1;
let prestigeNum = 2000;
let autoNum = 99999999999999999999;
button.addEventListener("click", clicker);
button.addEventListener("click", flashAnimation);
autoButton.addEventListener("click", autoClicker);
upgradeButton.addEventListener("click", upgradeClicker);
// function opacityCounter(){
//     if (oA > 0){
//         oA -=.1
//     } else return
//     flash.style.opacity = oA;
//     console.log('hi')
// console.log(oA)
    
// }
function flashAnimation(){
//     oA += .3;
//     flash.style.opacity = oA;
//     if (oA > .3){
//         oA == .3;
//     } else if (oA <= 0){
//         clearInterval(opacityCounter)

//     } else {
//     setInterval(opacityCounter, 30)}
//     console.log(oA)
    
}

function start(){
    counter.innerHTML = '0'
    autoCounter.innerHTML = '0'
    autoPrice.innerHTML = `Price: ${clickerPrice}`
    upgradeCounter.innerHTML = '0';
    upgradePrice.innerHTML = `Price: ${priceforUp}`
    setInterval( animatedBack, 50)
    flash.style.opacity = 0;
    prestige.style.opacity =0;
}

function clicker(){
    num += clickAmt;
    totalPoints += clickAmt;
    counter.innerHTML = `${num}`;
    console.log(totalPoints);
    if (totalPoints >= prestigeNum){
        prestigeFunc()}
    
}

function animatedBack(){

    background.style.backgroundColor = 'rgb'+'(' + r + "," + g +"," + b +")";
    if (r == 250 && b == 0 && g < 250){
        g += 1;
    }
    else if (g == 250 && b == 0 && r > 0){
        r -= 1;
    } else if (g == 250 && r <= 1 && b < 250){
        b += 1;
    } else if ( b == 250 && r == 0 && g > 0){
        g -= 1;
    } else if (b == 250 && g == 0 && r < 250){
        r += 1;
    } else if (r == 250 && g == 0 && b > 0){
        b -= 1;
    }
}

function autoClicker(){
    console.log(num)
    if (num >= clickerPrice){
    clickerNum += 1;
    autoCounter.innerHTML = `${clickerNum}`;
    num -= clickerPrice;
    counter.innerHTML = `${num}`;
    clickerPrice = Math.round(clickerPrice * 1.2);
    autoPrice.innerHTML = `Price: ${clickerPrice}`
    let autoNum = (17000 - (clickerNum * 300));
    setInterval(clicker, autoNum);
    console.log(autoNum);

} else {console.log('not enough money')}
}

function upgradeClicker(){
    if (num >= priceforUp){
        upgradeNum += 1;
        upgradeCounter.innerHTML = `${upgradeNum}`;
        num -= priceforUp;
        counter.innerHTML = `${num}`;
        priceforUp = Math.round(priceforUp * 1.2);
       upgradePrice.innerHTML = `Price: ${priceforUp}`
       clickAmt += upgradeAmt;
    }
        else {console.log('not enough  money')}
}

function prestigeFunc(){
        prestige.style.opacity = 1;

   
    prestige.addEventListener("click", reset)
}
function reset(){
    num -= prestigeNum;
    upgradeAmt += 1;
    prestigeNum *= 1.2;
    prestige += 1;
    priceforUp == 50;
    autoNum == 17000;
    clickerNum == 0;
    clickerPrice == 50;
    console.log(num)
}

window.onload = start();