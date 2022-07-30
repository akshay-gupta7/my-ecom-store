export class ProductClass {
    id: number;
    name: string;
    url: string;
    price: number;
    description: string;

    constructor(id: number, name: string, url: string, price: number, description: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
        this.description = description;
    }
}
