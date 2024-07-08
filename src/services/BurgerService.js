import { dbContext } from "../db/DbContext.js"


const exampleBurgers = [
    {
        name: 'Single',
        price: 6,
        ingredients: ['Single Ground Beef Patty', 'Pickles', 'Lettuce']
    },
    {
        name: 'Double',
        price: 8,
        ingredients: ['Two Ground Beef Patty', 'Pickles', 'Lettuce'] 
    },
    {
        name: 'Triple',
        price: 10,
        ingredients: ['Three Ground Beef Patties', 'Pickles', 'Lettuce']
    },
    {
        name: 'Homer',
        price: 14,
        ingredients: ['Three Ground Beef Patties', 'Bacon', 'Pickles', 'Lettuce']
    }
]

class BurgerService {
    
    getBurgerList(){
        const burgers = exampleBurgers
        return burgers
    }
    async getBurgerListFromDb() {
        const burgers = await dbContext.Burgers.find()
        return burgers 
    }
    async createBurger(burgerData) {
        const burger = await dbContext.Burgers.create(burgerData)
        return burger
    }
    async deleteBurger(idToRemove) {
        const burgerToRemove = await dbContext.Burgers.findById(idToRemove)
        console.log('remove this burger id?', burgerToRemove)
        if (burgerToRemove == null){
            throw new Error('Unable to delete')
        }
        await burgerToRemove.deleteOne()
        return `deleted ${burgerToRemove.name}`
    }
    
    
}

export const burgerService = new BurgerService()
