function startGame(){
   let username = document.getElementById('username');
   let reveal = document.querySelector('.hide');
   let divStart = document.getElementById('first-div');
   divStart.classList.add('hide');
   reveal.classList.remove('hide');
}
function submitQuestions(){
   var bankQuestions = [
      {
         question : 'The 1998 world football championship was hosted in France, in which Brazil reached the final, winning 3-0' ,
         value : false ,
         answer : 'France won 3-0',
     },
      {
         question : 'The Battle of Waterloo was a military confrontation that took place on 18 June 1815 near Waterloo, in present-day Belgium' ,
         value :  true ,
     },
      {
         question : 'Ayrton Senna, Brazilian Formula 1 driver, champion of the category in 1988, 1990 and 1991, died in a tragic accident on May 1, 1994 in Imola, Italy.' ,
         value : true ,
     },
      {
         question : 'U2 is an English rock band formed in 1976. The group is composed of Bono (vocals and guitar), The Edge (guitar, keyboards and backing vocals), Adam Clayton (bass) and Larry Mullen Jr. (drums and percussion )' ,
         value : false ,
         answer : 'U2 is an Irish rock band' ,
     },
      {
         question : 'In June 1997, boxer Mike Tyson bit the ear of his opponent, Evander Holyfield. For his conduct, Tyson was fined, sentenced to community service and suspended from the sport for 1 year.' ,
         value : true ,
     },
      {
         question : 'The Chernobyl accident happened on April 26, 1986, when reactor 3 at the Chernobyl nuclear power plant exploded and released radioactive material into the atmosphere.' ,
         value :  false ,
         answer : 'The number 4 reactor exploded.',
     },
      {
         question : 'Michael Jackson in 1986 released Thriller, the best-selling album in the history of music, considered a masterpiece. With the album, the future king of pop became the main black singer in the world and in the 1980s.' ,
         value : false,
         answer : 'In 1982, Michael Jackson released Thriller',
     },
      {
         question : 'The film "Avatar" is currently considered the highest-grossing film in the world.' ,
         value : true ,
     },
   ]
   var insertQuestion = document.getElementById('display-question');
   var insertAnswer = document.getElementById('answer-place')
   var score = []
   var radioSelected = document.getElementsByName('options')
   var answer = ''
   for( var i = 0 ; i < bankQuestions.length ; i++){
      insertQuestion.textContent = bankQuestions[1].question
   }
   if (radioSelected[0].checked){
      answer = true
      if (answer === bankQuestions[i].value){
         score = 1
      } else {
         insertAnswer.classList.remove('hide')
         insertAnswer.textContent = bankQuestions[i].answer
         score = 0
      }
   } else if (radioSelected[1].checked){
      answer = false
      if (answer === bankQuestions[i].value){
         score = 1
      } else {
         insertAnswer.classList.remove('hide')
         insertAnswer.textContent = bankQuestions[i].answer
         score = 0
      }
   }
   

}
