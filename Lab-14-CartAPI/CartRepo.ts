import { Cart } from "./src/models/item";

//Repository
class CartRepo {
    //Entity
    //unique identifier
    private items:Cart[] = [
        { id: 1, product:"Milk", price:2.99, quantity: 10},
        {id: 2, product:"Eggs", price:1.99, quantity: 15},
        {id: 3, product:"Bread",  price:2.99, quantity: 5},
        {id: 4, product:"Ham", price:5.99, quantity: 25}
    ]

    //CRUD operations
    //CREATE Read Update Delete

    //READ
    GetAllItems() : Cart[] {
        console.log('Get All items was hit');
        return this.items;
    }

    GetItemById(id:number) : Cart | undefined {
        return this.items.find((x) => x.id === id);
    }

    //CREATE
    CreateItem(item:Cart){
        this.items.push(item);

        return item;
    }

    //Delete
    DeleteItemById(id:number){
        this.items = this.items.filter((x) => x.id !== id);
    }

    //Update
    UpdateItemQuantity(id:number, quantity:number){
        let itemToUpdate = this.GetItemById(id);

        if(itemToUpdate !== undefined){
            itemToUpdate.quantity = quantity;
        }
    }

    GetItemsBelowCost(price:number){
        return this.items.filter((x) => x.price <= price);
    }
}

export { CartRepo }
