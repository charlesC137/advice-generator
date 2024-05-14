async function callAdvice(){
  const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
  const adviceObj = await response.json();

  return adviceObj;
}

document.querySelector('.generate-btn').addEventListener('click', () => {
  switchAdvice();
})

async function switchAdvice(){
  const adviceObj = await callAdvice();

  document.querySelector('.advice-div').textContent = adviceObj.slip.advice;
  document.querySelector('.header').textContent = `ADVICE #${adviceObj.slip.id}`
}

switchAdvice();