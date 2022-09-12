const buttonElements = document.querySelectorAll('button');
let row = 0;
let letter = 0;
const wordForTheDay = "shout";
let gameover =false;
let correct = false;
const wordElement = document.querySelectorAll('.words-row');
buttonElements.forEach((element) => {
    element.addEventListener('click',function(){
    keypress(element.attributes["data-key"].value);
})});

function populateword(key){
  if(letter <5){
       console.log(letter);
      wordElement[row].querySelectorAll('.word')[letter].innerText = key;

      letter+=1;
  }
    console.log(wordElement);
}

function checkword(){
    const letterElement = wordElement[row].querySelectorAll('.word');
      let corectalphabet =0;
    letterElement.forEach((element,index) => {

      const indexforwordForThDay = wordForTheDay.toLowerCase().indexOf(element.innerText.toLowerCase());
      if(indexforwordForThDay === index){
          element.classList.add('word-green');
          corectalphabet +=1;
      }
      else if(indexforwordForThDay>0){
        element.classList.add('word-yellow');
      }
      else {
        element.classList.add('word-grey');
      }
    });
    if(corectalphabet === 5)
    {
       gameover =true;
       correct = true ;
       alert("Hurray!!, You have guessed the word correctly");
    }
    else if( row === 5)
    {
        gameover =true;
        alert("Ops Better Luck NextTime ,Word for the Day is "+wordForTheDay)
    }


}

function enterword(){
   if(!gameover)
    {
        if(letter <5){
          alert("Enter Enough Words");
        }
        else {
           checkword();
           row +=1;
           letter =0;
        }
    }
    else {
       alert("GameOver, Come back tomorrow");
    }
}

function delletter(){
  if(letter>0){
      wordElement[row].querySelectorAll('.word')[letter-1].innerText = '';
      letter -=1 ;
      console.log(letter);
 }
}

function keypress(key){
  if(key.toLowerCase() === 'enter')  enterword();
  else if (key.toLowerCase() === 'del') delletter();
  else{
    populateword(key);
  }
}
