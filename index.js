class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    let words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
    let result = [];
    string.split(" ").forEach(function(w) {
      if (!words.includes(w)){
        result.push(Formatter.capitalize(w));
      } else {
        result.push(w);
      }
    });
    return Formatter.capitalize(result.join(" "));
  }
}
