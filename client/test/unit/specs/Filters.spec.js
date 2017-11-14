var filters = require('@/components/reusable_components/filters')

describe('Filters', () => {

  describe('String Filters', () => {
    it('Capitalizes the First Letter of a Word', () => {
      var filter = filters.capitalize
      var result = filter('hello')

      expect(result.charAt(0)).toBe('H')
      expect(result.slice(1)).toBe('ello') // ELLO GUVNA
      assertNumberAndFalsy(filter)
    })

    it('Capitalizes All Letters in a Word', () => {
      var filter = filters.uppercase

      expect(filter('hello').toBe('HELLO'))
      assertNumberAndFalsy(filter)
    })

    it('Lowercases All Letters in a Word', () => {
      var filter = filters.lowercase

      expect(filter('HELLO').toBe('hello'))
      assertNumberAndFalsy(filter)
    })

    it('Truncates a String to a desired length, or below 15 chars', () => {
      var filter = filters.truncate
      var longWord = 'VeryLongWordThatIsLong' //is 22 Chars

      expect(filter(longWord).toBe('VeryLongWordTha...'))
      expect(filter(longWord, 18).toBe('VeryLongWordThatIs...'))
      assertNumberAndFalsy(filter)
    })
  })

  describe('Number Filters', () => {
    it('Rounds a number up to 2 decimal places', () => {
      var filter = filters.roundToDecimals

      expect(filter(20.165).to.equal(20.17))
    })
  })
})
