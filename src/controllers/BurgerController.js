import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";



export class BurgerController extends BaseController {
    constructor(){
        super('api/burger')
        this.router.get('/selection', this.getBurgerList)
        this.router.get('', this.getBurgerListFromDb)
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
}