const divContainer = document.getElementById('letters')
const guessLetter = document.getElementById('guess-letter')

// final popup
const Status = document.getElementById('status')
const headingResult = document.querySelector('.status .data h2')
const rightWord = document.querySelector('p.word-status span')
const wrongs = document.querySelector('.wrongs span')
const time = document.querySelector('.time span')




const hint = document.getElementById('hint')
const details = document.getElementById('details')
const pTries = document.querySelector('.tries')
const SapnTries = document.querySelector('.tries span')
const pTimer = document.getElementById('timer')
const SapnTimers = document.querySelector('.timer span')

const handmanDraw = document.getElementsByClassName('handman-draw')[0]


// const restart = document.getElementById('restart')

let letters = 'abcdefghijklmnopqrstuvwxyz'

let words = {
  'programming': [
    ["JavaScript", 'programming, most popular programming language'],
    ["Python", 'programming, used in AI and machine learning'],
    ["HTML", 'programming, used to build the structure of websites'],
    ["CSS", "programming, used to style websites"],
    ["React", "programming, a popular JavaScript framework"]
  ],
  'countries': [
    ["Egypt", 'countries, known for the Pyramids'],
    ["Germany", 'countries, famous for its automotive industry'],
    ["Brazil", 'countries, known for football and the Amazon rainforest'],
    ["Canada", 'countries, known for its vast landscapes and cold weather'],
    ["Japan", 'countries, famous for its technology and sushi']
  ],
  'animals': [
    ["Elephant", 'animals, the largest land animal'],
    ["Giraffe", 'animals, the tallest animal on earth'],
    ["Kangaroo", 'animals, native to Australia and known for jumping'],
    ["Dolphin", 'animals, intelligent marine mammals'],
    ["Lion", 'animals, known as the king of the jungle']
  ],
  'fruits': [
    ["Apple", 'fruits, keeps the doctor away'],
    ["Banana", 'fruits, a yellow fruit that monkeys love'],
    ["Orange", 'fruits, known for its vitamin C content'],
    ["Pineapple", 'fruits, a tropical fruit with spiky skin'],
    ["Strawberry", 'fruits, a small red fruit with seeds on its surface']
  ],
  'movies': [
    ["Inception", 'movies, a mind-bending thriller by Christopher Nolan'],
    ["Avatar", 'movies, a sci-fi film set on the planet Pandora'],
    ["Titanic", 'movies, a romance set on the ill-fated ship'],
    ["Gladiator", 'movies, a historical epic about a Roman general'],
    ["Interstellar", 'movies, a sci-fi film exploring space and time']
  ],
  'space': [
    ["Quasar", 'space, an extremely luminous active galactic nucleus'],
    ["Pulsar", 'space, a highly magnetized rotating neutron star'],
    ["Nebula", 'space, a cloud of gas and dust in outer space'],
    ["Supernova", 'space, a powerful and luminous stellar explosion'],
    ["Asteroid", 'space, a small rocky body orbiting the Sun']
  ],
  'literature': [
    ["Hamlet", 'literature, a tragedy by William Shakespeare'],
    ["Odyssey", 'literature, an epic poem attributed to Homer'],
    ["Inferno", 'literature, the first part of Dante’s Divine Comedy'],
    ["Beowulf", 'literature, an Old English epic poem about a hero'],
    ["Macbeth", 'literature, a tragedy by William Shakespeare']
  ],
  'mythology': [
    ["Minotaur", 'mythology, a creature with the head of a bull and the body of a man'],
    ["Cerberus", 'mythology, a multi-headed dog that guards the gates of the Underworld'],
    ["Medusa", 'mythology, a Gorgon with snakes for hair, who turns people to stone'],
    ["Phoenix", 'mythology, a mythical bird that regenerates or is reborn from its ashes'],
    ["Chimera", 'mythology, a fire-breathing monster with the body of a lion, the head of a goat, and a serpent for a tail']
  ],
  'technology': [
    ["Blockchain", 'technology, a decentralized digital ledger for transactions'],
    ["Cryptography", 'technology, the practice of secure communication'],
    ["Algorithm", 'technology, a set of rules or processes for solving problems'],
    ["Quantum", 'technology, related to the smallest units of matter and energy'],
    ["Neural Network", 'technology, a computer system modeled on the human brain']
  ],
  'architecture': [
    ["Pantheon", 'architecture, a former Roman temple now a church, in Rome'],
    ["Parthenon", 'architecture, a former temple on the Athenian Acropolis, Greece'],
    ["Gothic", 'architecture, a style characterized by pointed arches and flying buttresses'],
    ["Baroque", 'architecture, a highly decorative and theatrical style from the 17th century'],
    ["Art Deco", 'architecture, a style known for its rich colors and geometric shapes']
  ]
};




let letterArray = letters.split("")
// console.log(letterArray)

letterArray.forEach((e) => {
  // console.log(letter)
  let spanLetter = document.createElement('span')
  
  let letter = document.createTextNode(e)
  
  spanLetter.appendChild(letter)
  divContainer.appendChild(spanLetter)
})

let ObjectKeys = Object.keys(words);

let NumberRandomType = Math.floor(Math.random() * ObjectKeys.length)
// console.log(NumberRandomType)
let randomType = ObjectKeys[NumberRandomType]
// console.log(randomType)

let NumberRandomWord = Math.floor(Math.random() * words[ObjectKeys[NumberRandomType]].length)
// console.log(NumberRandomWord)
let randomWord = words[ObjectKeys[NumberRandomType]][NumberRandomWord][0].toLowerCase()
let hintOfWord = words[ObjectKeys[NumberRandomType]][NumberRandomWord][1]

hint.innerHTML = hintOfWord
// console.log(randomWord)

let randomWordArray = randomWord.split('')
// console.log(randomWordArray)

randomWordArray.forEach((let) => {
  let spanLetterGuess = document.createElement('span')
  let spanTextNode = document.createTextNode(' ')
  
  if(let == " ") {
    spanLetterGuess.classList.add("space")
    spanLetterGuess.appendChild(spanTextNode)
    guessLetter.appendChild(spanLetterGuess)
  } else {
    spanLetterGuess.classList.add("char")
    spanLetterGuess.appendChild(spanTextNode)
    guessLetter.appendChild(spanLetterGuess)
  }
})

let timer = 5 * 60
if(timer % 60 <= 9) {
  SapnTimers.innerHTML = `${Math.floor(timer/60)}:0${timer % 60}`
}else {
  SapnTimers.innerHTML = `${Math.floor(timer/60)}:${timer % 60}`
}

setInterval(() => {
  let min = Math.floor(timer/60)
  let second= timer % 60
  if(second <= 9) {
    SapnTimers.innerHTML = `${min}:0${second}`
  }else {
    SapnTimers.innerHTML = `${min}:${second}`
  }
  if(timer <= 0) {
    Status.style.display = 'flex'
    headingResult.classList.add("false") 
    headingResult.innerHTML = `game over`
    rightWord.innerHTML = `${randomWord}`
    time.innerHTML = `${`${300 - timer}S`}s`
    wrongs.innerHTML = 6 - tries
    setTimeout(() => {
      location.reload();
    }, 5000)
    return 0;
  }
  timer--;
}, 1000)

let spansLetter = document.querySelectorAll('.letters span')
let getAllSpansLetterGussed = document.querySelectorAll('.guess-letter span')
// console.log(getAllSpansLetterGussed)
// console.log(spansLetter)

// let color = '#9b59b6'
let color = '#029e62'
let tries = 6;
SapnTries.innerHTML = tries
details.style.background = color

spansLetter.forEach((ele) => {
  ele.addEventListener('click', () => {
    if(tries <=0 ) {
      return 0
    }else {

      let wordInSpans = "";
      ele.classList.add('clicked')
  
      
      let indices = (c, s) => s
            .split('')
            .reduce((a, e, i) => e === c ? a.concat(i) : a, []);
  
      let letterTrue = indices(ele.innerHTML, randomWord)
      // console.log(letterTrue)
      if(letterTrue.length == 0) {
        tries -= 1;
        handmanDraw.classList.add(`show-${tries}`)
        color = '#f34848'
        details.style.background = color
      } else {
        color = '#029e62'
        details.style.background = color
        letterTrue.forEach((letter) => {
          getAllSpansLetterGussed[letter].innerHTML = randomWord[letter]
        })
        getAllSpansLetterGussed.forEach((word) => {
          wordInSpans += word.innerHTML
        })
  
        if(wordInSpans == randomWord) {
          Status.style.display = 'flex'
          headingResult.classList.add("true")
          headingResult.innerHTML = "Congratulations !!"
          rightWord.innerHTML = `${randomWord}`
          time.innerHTML = `${300 - timer}s`
          wrongs.innerHTML = 6 - tries
          
          setTimeout(() => {
            location.reload();
          }, 5000)
        } 
      }
      SapnTries.innerHTML = tries
      if(!tries) {
        Status.style.display = 'flex'
        headingResult.classList.add("false")
        headingResult.innerHTML = "game over"
        rightWord.innerHTML = `${randomWord}`
        time.innerHTML = `${300 - timer}s`
        wrongs.innerHTML = 6 - tries  
        setTimeout(() => {
          location.reload();
        }, 5000)
      }
    }
  })
}) 

// restart.addEventListener('click', () => {
//   location.reload();
// })