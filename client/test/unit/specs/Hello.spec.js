function addNumbers(x, y) {
  return x + y
}

describe('General', () => {
  it('adds two numbers', () => {

    expect(addNumbers(2, 3)).to.equal(5)
    // const Constructor = Vue.extend(Hello)
    // const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .to.equal('Welcome to Your Vue.js App')
  })
})
