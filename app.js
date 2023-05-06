
const correctAnswers = ['A', 'B', 'A', 'B','B','B','A','B','A','A']
const finalAnswer = document.querySelector('.finalresult')
const form = document.querySelector('.quizy')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let scores = 0
  let useranswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value
  ]
  useranswers.forEach((param, index) => {
    if (param === correctAnswers[index]) {
      scores = scores + 10
    }
  })
  
  let output = 0
  const timer = setInterval(() => {
    finalAnswer.textContent = `your total score if ${output}%`
    if (output === scores) {
      clearInterval(timer)
    } else {
      output++
    }
  }, 10)
  scroll(0,0) //note that scroll is a window object
})
