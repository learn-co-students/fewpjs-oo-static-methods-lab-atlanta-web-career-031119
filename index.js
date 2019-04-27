class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/([^A-Za-z-'\s])/g, '')
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let sentenceArray = string.split(' ')
    for (let i = 0; i < sentenceArray.length; i++) {
      if (exceptions.includes(sentenceArray[i])){
        result.push(sentenceArray[i])
      } else {
        result.push(this.capitalize(sentenceArray[i]))        
      }
    }
    return result.join(' ')
  }
}