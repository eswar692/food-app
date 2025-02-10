// split method
//split method ni data or string ni convert in Array ga vadachu
//deniki index trough tho kuda data ni get cheyachu
//  data.split(' ')[2]
const sentence = "Hello ,Bang,aram!  ,How are yo,u?";
const words = sentence.split(',');
////console.log(words); 
// Output: ["Hello", "Bangaram!", "How", "are", "you?"]

//   Optional Chaining (?.)
const op = {name:'prasad',address:{city:'kadapa'}}
const ternary = op.addres ? op.address.city :undefined;//if lage kani short if anukovachu-
const opt = op.addres?.city
console.log(ternary, opt)

//array ni test cheyadam ante data array or no test
console.log(Array.isArray(Vendor.firm));  // Should return true isArray(array ni evali)


