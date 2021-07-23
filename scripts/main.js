const elementObject = {
  previousStepButton: document.querySelector('#previous'),
  nextStepButton: document.querySelector('#next')
}

const config = {
  step: 1
}

elementObject.nextStepButton.addEventListener('click', () => {
  if (config.step === 1) {
    elementObject.previousStepButton.classList.remove('d-none')
    document.querySelector('.main__progress__step.step--1').classList.add('main__progress__step--completed')
    document.querySelector('.main__form__section.address').classList.add('d-none')
    document.querySelector('.main__form__section.delivery-option').classList.remove('d-none')
    document.querySelector('.main__progress__bar.main__progress__bar--uncompleted').classList.remove('main__progress__bar--uncompleted')
    config.step = 2
  } else if (config.step === 2) {
    document.querySelector('.main__progress__step.step--2').classList.add('main__progress__step--completed')
    document.querySelector('.main__form__section.delivery-option').classList.add('d-none')
    document.querySelector('.main__form__section.billing-info').classList.remove('d-none')
    const spans = document.querySelectorAll('.main__progress__step--uncompleted')
    spans.forEach(span => {
      span.classList.remove('main__progress__step--uncompleted')
    })
    elementObject.nextStepButton.innerHTML = '確認下單'
    elementObject.nextStepButton.classList.add('button--step--next--completed')
    config.step = 3
  }
})

elementObject.previousStepButton.addEventListener('click', () => {
  if (config.step === 2) {
    document.querySelector('.main__progress__step.step--1').classList.remove('main__progress__step--completed')
    elementObject.previousStepButton.classList.add('d-none')
    document.querySelector('.main__form__section.address').classList.remove('d-none')
    document.querySelector('.main__form__section.delivery-option').classList.add('d-none')
    document.querySelectorAll('.main__progress__bar')[1].classList.add('main__progress__bar--uncompleted')
    config.step = 1
  } else if (config.step === 3) {
    document.querySelector('.main__progress__step.step--2').classList.remove('main__progress__step--completed')
    document.querySelector('.main__form__section.delivery-option').classList.remove('d-none')
    document.querySelector('.main__form__section.billing-info').classList.add('d-none')
    elementObject.nextStepButton.classList.remove('button--step--next--completed')
    elementObject.nextStepButton.innerHTML = '下一步'
    config.step = 2
  }
})
