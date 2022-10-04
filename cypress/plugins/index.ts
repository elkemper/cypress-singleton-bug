import { Singleton } from "../classes/singleton"
import { ExoStatic } from "../classes/static"

export default (on: any)=>{
    on('task', {
        'getSingleton':()=>{
            return Singleton.getInstance()
        },
        'getStatic':()=>{
            return ExoStatic.First
        }
    })
}