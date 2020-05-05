class Formatter {
  static capitalize(string) {
    let firstLetter = string[0].toUpperCase()
    return firstLetter + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let wordsArr = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let result = []
    let stringArr = string.split(" ")

    for (let i = 0; i < stringArr.length; i++) {
      if (i === 0) {
        let firstWord = stringArr[0]
        result.push(this.capitalize(firstWord))
      } else if (wordsArr.includes(stringArr[i])) {
        result.push(stringArr[i])
      } else {
        result.push(this.capitalize(stringArr[i]))
      }
    }
    return result.join(" ")
  } // end of titleize method

} // end of class definition

Formatter.titleize("a travesty of the times.")