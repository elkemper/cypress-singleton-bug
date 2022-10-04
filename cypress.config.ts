import { defineConfig } from "cypress"
import {Singleton} from './cypress/classes/singleton'
import {ExoStatic} from './cypress/classes/static'


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        'getSingleton':()=>{
            return Singleton.getInstance()
        },
        'getStatic':()=>{
            return ExoStatic.First
        }
    })
    },
  },
});
