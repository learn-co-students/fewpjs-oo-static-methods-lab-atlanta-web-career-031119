class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'" "]+/g, '')
  }

  static titleize(string) {
    let titleWords = string.split(" ");
    let firstWord = titleWords.shift();
    let articles = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newTitle = titleWords.map(function(word) {
      if (articles.includes(word)) {
         return word
      } else {
         return Formatter.capitalize(word)
      }
    });
    
    
    return Formatter.capitalize(firstWord) + " "+ newTitle.join(" ")
  }
  
}