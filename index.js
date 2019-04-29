// class Formatter {
//   //add static methods here
//   static capitalize(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
//   static sanitize(string){
//     return string.replace(/[^A-Za-z0-9-']+/g, '');

//   }
//   static titleize(string){
//     let exception = ["the", "a", "an", "but", "of", "and", "for", "at", "by","from"]
//     let result = []

//     let stringArray  =  string.split(' ')
//     for(let i = 0; i < stringArray.length; i++){
//       if (exception.includes(stringArray[i]))
//           result.push(stringArray[i])
//      else 
//          result.push(this.capitalize(stringArray[i]))
  
//                 }
//       return result.join(' ')        
              
//               }       
  
// }

class Formatter {

static capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1)
}

 static sanitize(string){
  return string.replace(/([^A-Za-z-'\s])/g, '')
}

 static titleize(string){
  let exceptions = ['the','an', 'a','but', 'of', 'and', 'for', 'at', 'by', 'from']
  let result = []
  let sentenceArray = string.split(' ')
  for (let i = 0; i < sentenceArray.length; i++) {
  //  if (i == 0) 
     // result.push(sentenceArray[i].toUpperCase())
   if (exceptions.includes(sentenceArray[i]) && i == 0) {
      
      result.push(sentenceArray[i].toUpperCase())

    } else if (exceptions.includes(sentenceArray[i])) {
      result.push(sentenceArray[i])
              
    }
    else 
    result.push(this.capitalize(sentenceArray[i]))
  }
           
  //return result[0].toUpperCase
   //console.log ("this is not")
   //console.log(result.toUpperCase())
   
   return(result.join(' '))
   //console.log(result.)
}
}

//console.log("welcome to console")
//console.log(Formatter.titleize("a tale of two cities"))