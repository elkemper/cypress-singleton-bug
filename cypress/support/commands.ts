// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import { Singleton } from "../classes/singleton";
import { ExoStatic } from "../classes/static";

declare global {
    namespace Cypress {
      interface Chainable {
        
        getSingleton(): Chainable<Singleton>
        getStatic():Chainable<ExoStatic>
      }
    }
}


function getSingleton(): Cypress.Chainable<Singleton> {
    return cy.wrap(Singleton.getInstance())
}

function getStatic(): Cypress.Chainable<ExoStatic> {
    return cy.wrap(ExoStatic.First)
}

Cypress.Commands.add('getSingleton', getSingleton);
Cypress.Commands.add('getStatic', getStatic);