export interface Order {
    id : number,
    name: string,
    brand: string,
    gender: string,
    category: string,
    price: number,
    is_in_inventory: boolean,
    items_left: number,
    imageURL: string,
    slug : string ,
    quantity : number,
    isPending: boolean
}
