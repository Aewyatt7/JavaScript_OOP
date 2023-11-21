/* console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person{
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;  
    }
    info(){
        return `Name: ${this.name}, Pets: ${this.pets}, Residence: ${this.residence}, Hobbies: ${this.hobbies.join(', ')}`;
    }
    addHobby(newHobby){
        this.hobbies.push(newHobby);
    }
    removeHobby(hobbyToRemove){
        this.hobbies = this.push(mewHobby);
        //Removing an item from an array is trickier than
        // simply tacking one onto the end
        //Because, you first have to find where the hobby is
        //located in the array (aka its index)
        //Then you have to remove that indext
        //Or you need to filter it out
    }
    class Person {
        constructor(name, pets, residence, hobbies) {
          this.name = name;
          this.pets = pets;
          this.residence = residence;
          this.hobbies = hobbies;
        }
      
        removeHobby(hobbyToRemove) {
          const index = this.hobbies.indexOf(hobbyToRemove);
          if (index !== -1) {
            this.hobbies.splice(index, 1);
          }
          // Removed the unnecessary filter method
        }
      
        listHobbies() {
          console.log(`${this.name}'s hobbies include:`);
          for (let i = 0; i < this.hobbies.length; i++) {
            console.log(this.hobbies[i]);
          }
        }
      
        greeting() {
          console.log("What a good person!");
        }
      }
      
      const genericIndividual = new Person("Minecraft Steve", "cat", "house", ["mining", "building", "jumping"]);
      
genericIndividual.greeting();
genericIndividual.listHobbies();
genericIndividual.addHobby ("killing monsters");
genericIndividual.listHobbies();
genericIndividual.removeHobby("Jumping")
genericIndividual.listHobbies();

const testArray =[0, 1, 2, 3, 4,] 
testArray.splice (2, 1);
console.log(testArray);

// Exercise 2 Section
console.log("EXERCISE 1:\n==========\n");

//Extends is the keyword to inherit from the person
class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
      super(name, pets, residence, hobbies);
      this.occupation = "Full Stack Web Developer"; // Corrected the spelling of 'Developer'
    }
  
    greeting() {
      console.log("Hello! I eat, sleep, breathe coding.");
    }
  }
  
  const genericCoder = new Coder("Ben Bryant", "parakeet", "townhouse", ["zelda", "star wars", "coding"]);
  
  genericCoder.greeting(); // Calling the 'greeting' method of 'genericCoder'

genericCoder.greeting();

// Exercise 3 Section
console.log("EXERCISE 1:\n==========\n");
*/
// Exercise 4 Section
console.log("EXERCISE 1:\n==========\n");

class Calculator{
    constructor(){
        this.result =0;
    }
    add(a, b){
        this.result = a + b;
        return this.result;
    }
    subtract(a, b){
        this.result = a - b;
        return this.result;
    }
    multiply(a, b){
        this.result = a * b;
        return this.result;
    }
    divide(a, b){
        this.result = a / b; 
        return this.result;
    }
    displayResult(){
        console.log(this.result);
    }
}
const myCalc = new Calculator();
myCalc.displayResult();