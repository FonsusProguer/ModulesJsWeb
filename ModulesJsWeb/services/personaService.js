import {PersonaModel} from "../models/personaModel.js"

let persona = new PersonaModel()
persona.name = "Titania"
persona.lastName = "Lonina"
persona.age = 28

export class PersonaService
{
    getName=()=>
    {
        return persona.name
    }

    getFullData=()=>
    {
        return `${persona.name} ${persona.lastName} de ${persona.age}`
    }
}