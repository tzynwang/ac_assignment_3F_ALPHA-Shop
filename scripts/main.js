const elementObject = {
  previousStepButton: document.querySelector('#previous'),
  nextStepButton: document.querySelector('#next'),
  chartSection: document.querySelector('.main__chart'),
  chartDeliveryCost: document.querySelector('.main__chart__delivery .price'),
  chartTotalPrice: document.querySelector('.main__chart__total-amount .price'),
  deliverySection: document.querySelector('.main__form__section.delivery-option')
}

const config = {
  step: 1,
  deliveryOptionChecked: 'deliveryStandard',
  deliveryCost: { deliveryStandard: '免費', deliveryDhl: 500 }
}

elementObject.nextStepButton.addEventListener('click', event => {
  event.preventDefault()
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
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

elementObject.chartSection.addEventListener('click', event => {
  const targetClass = event.target.classList.value // 'item--button remove', 'item--button add'
  const qtyLabel = event.target.parentNode.querySelector('.item--qty--label')
  const targetPrice = Number(event.target.closest('.item--description').querySelector('.price').innerText)

  if (targetClass === 'item--button remove') {
    if (Number(qtyLabel.value) > 1) {
      qtyLabel.value = Number(qtyLabel.value) - 1
    } else if (Number(qtyLabel.value) === 1) {
      event.target.closest('.main__chart__item').remove()
    }
    elementObject.chartTotalPrice.innerText = Number(elementObject.chartTotalPrice.innerText) - targetPrice
  }

  if (targetClass === 'item--button add') {
    qtyLabel.value = Number(qtyLabel.value) + 1
    elementObject.chartTotalPrice.innerText = Number(elementObject.chartTotalPrice.innerText) + targetPrice
  }
})

elementObject.deliverySection.addEventListener('click', (event) => {
  event.stopPropagation()
  if (event.target.tagName === 'INPUT') {
    const checkedValue = event.target.value // deliveryStandard, deliveryDhl

    if (checkedValue !== config.deliveryOptionChecked) {
      elementObject.chartDeliveryCost.innerText = config.deliveryCost[checkedValue]
      config.deliveryCost[checkedValue] === 500
        ? elementObject.chartDeliveryCost.classList.remove('price--free')
        : elementObject.chartDeliveryCost.classList.add('price--free')
      config.deliveryOptionChecked = event.target.value

      isNaN(Number(config.deliveryCost[checkedValue]))
        ? elementObject.chartTotalPrice.innerText = Number(elementObject.chartTotalPrice.innerText) - 500
        : elementObject.chartTotalPrice.innerText = Number(elementObject.chartTotalPrice.innerText) + 500
    }
  }
})
