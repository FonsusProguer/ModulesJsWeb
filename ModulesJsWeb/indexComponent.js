import {PersonaService} from "./services/personaService.js"

let mainText = document.getElementById("main-text")


var persona = new PersonaService();
mainText.innerText = persona.getFullData();