const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

///const titleCased = () => {
 /// return tutorials
///}

function titleCased() {
  return tutorials.map(function (tutorial) {
let wordsArray= tutorial.split(" ")
let capitalizedArray= wordsArray.map(function (word){
  let capitalWord= word.charAt(0).toUpperCase() + word.slice(1)
  return capitalWord
})
return capitalizedArray.join (" ")

 

  })
}

/// step 1: Capitalize first letter
/// step 2: add the rest of the letters
/// step 3: after line 24- convert array of tutorials back into one (join method)