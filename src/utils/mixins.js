export const dollarSign = {
  filters: {
    dollarSign (price) {
      return price === 0 ? '免費' : `$ ${price}`
    }
  }
}
