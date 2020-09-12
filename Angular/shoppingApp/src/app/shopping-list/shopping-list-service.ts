import {List} from '../model/list.model'

export class ShoppingListService{
    private shoppingList=[
        new List(1,"Phone",2000,"This is the best phone"),
        new List(2,"TV",30000,"This is the best TV"),
        new List(3,"Biscuit",20,"This is the best biscuit"),
        new List(4,"Laptop",27800,"This is the best laptop")
    ]

    getList(){
        return this.shoppingList.slice();
    }
    getListById(index){
        return this.shoppingList[index]
    }
}