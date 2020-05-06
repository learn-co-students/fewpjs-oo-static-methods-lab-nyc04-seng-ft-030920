class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }
  
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }
  
  static titleize(str) {
    let dontCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let strArray = str.split(" ")
    strArray[0] = this.capitalize(strArray[0])
    return strArray.map((word) => dontCap.includes(word) ? word : Formatter.capitalize(word)).join(" ")
  }

}