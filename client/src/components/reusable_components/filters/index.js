module.exports = {
  // Strings
  capitalize: function (value) {
    // 'hello' => 'Hello'
    if (!value || value !== 0) return "";
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },
  uppercase: function (value) {
    // 'hello' => 'HELLO'
    return (value || value === 0)
      ? value.toString().toUpperCase()
      : ''
  },
  lowercase: function (value) {
    // 'HELLO' => 'hello'
    return (value || value === 0)
      ? value.toString().toLowerCase()
      : ''
  },
  truncate: function (value, length) {
    // 'VeryLongWordThatIsLong'     => 'VeryLongWordTha...'
    // 'VeryLongWordThatIsLong', 18 => 'VeryLongWordThatIs...'
    length = length || 15
    if (!value || typeof value !== 'string') return ''
    if (value.length <= length) return value
    return value.substring(0, length) + '...'
  },

  // Ints
  roundToDecimals: function (value) {
    // 20.165 => 20.17
    if (!value) return "";
    return Math.round(value * 100) / 100;
  }
}
