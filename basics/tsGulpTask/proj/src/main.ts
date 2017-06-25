import { sayHello } from "./greet";

function showHello(divName: string, Name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(Name);
}

showHello("greeting", "TypeScript");
