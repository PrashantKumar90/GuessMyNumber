let score = 20;
let high_Score = 0;
let message = document.querySelector('.message');
let scoreMessage = document.querySelector('.score');
let highScore = document.querySelector('.high-score');
let secNum = Math.trunc(Math.random()*20+1); 
let sec_num = document.querySelector('.sec-num');
let head  = document.querySelector('h1');

document.querySelector('.check').addEventListener('click', function(){
    
    let guss = Number(document.querySelector('.guess').value);
    if(!guss){
        message.textContent  = '⛔ No Number';
    }
    else if(score==1){
        head.textContent = 'You lost ! ☹ '
        document.querySelector('body').style.backgroundColor = 'red';
        scoreMessage.textContent = '0'
    }
    else if(score>1){
        //if true 
         if(guss==secNum){
        message.textContent = '🎉 Correct Number'
        sec_num.textContent = secNum;
        document.querySelector('body').style.backgroundColor = '#60b347';
        score--;
        scoreMessage.textContent = score;
        high_Score = score;
        highScore.textContent = high_Score;
        if(score>high_Score){
            highScore.textContent = high_Score;
        }

    }
    // if greater
    else if(guss>secNum){
        message.textContent = '📈 Too High '
        score--;
        scoreMessage.textContent = score;
    }
    //if lesser
    else if(guss<secNum){
        message.textContent = '📉 Too Low '
        score--;
        scoreMessage.textContent = score;
    }
}
});

//again
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    scoreMessage.textContent = score;
    secNum  = Math.trunc(Math.random()*20+1);
    sec_num.textContent = '?';
    message.textContent  = '🔰 Start Guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value =  ' ';
});