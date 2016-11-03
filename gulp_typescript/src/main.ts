// Initial code to ensure all hookups are working.

// function hello(compiler: string){
//   console.log(`Hello from ${compiler}`);
// }
//
// hello("TypeScript")

// Structure more likely to be used in actual app.
import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name)
}

showHello("greeting", "Typescript")

// console.log(sayHello("TypeScript"));
