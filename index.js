class Formatter {
  //add static methods here
  static capitalize (string) {
    return string.slice(0,1).toUpperCase() + string.slice(1);
  }

  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize (string) {
    const array = string.split(" ")
    const newArray = []
    newArray.push(array[0].slice(0,1).toUpperCase() + array[0].slice(1))

    array.slice(1).map(function(word) {
      if (word == 'the' || word == 'a' || word == 'an' || word == 'but' || word == 'of' || word == 'and' || word == 'for' || word == 'at' || word == 'by' || word == 'from') {
        newArray.push(word)
      } else {
        newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
    });
  return newArray.join(" ");
  }
}