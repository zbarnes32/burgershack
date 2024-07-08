import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";



export class BurgerController extends BaseController {
    constructor(){
        super('api/burger')
        this.router.get('/selection', this.getBurgerList)
        this.router.get('', this.getBurgerListFromDb)
        this.router.post('', this.createBurger)
        this.router.delete('/:burgerId', this.deleteBurger)

    }

    getBurgerList(request, response, next){
        console.log('🍔')
        const burgers = burgerService.getBurgerList()
        response.send(burgers)
    }

    async getBurgerListFromDb(request, response, next){
        try {
            const burgers = await burgerService.getBurgerListFromDb()
        } catch (error) {
           next(error) 
        }
    }

    async createBurger(request, response, next){
        try {
            const burgerData = request.body
            console.log('creating a burger 🍔', burgerData)
            const burger = await burgerService.createBurger(burgerData)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }

    async deleteBurger(request, response, next){
        try {
           const idToRemove = request.params.burgerId 
           console.log('Removing burger', idToRemove) 
           const message = await burgerService.deleteBurger(idToRemove)
           response.send(message)
        } catch (error) {
            next(error)
        }
    }
}