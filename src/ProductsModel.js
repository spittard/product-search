export default class ProductsModel {
    constructor(products){
        this.products = products;
    }
    actors = () => {
        let actorArrays = this.products.length > 0 ?
            this.products.map(product => product.fields.actors) : [];
        let actors1 = [];
        let result = actorArrays.length > 0 ?
            actorArrays.map(array => array.reduce((actors1, actor) => {
                actors1.push(actor)
                return actors1;
            }, actors1)) : [];
        // let result = this.products.length > 0 ? [...new Set(this.products.map(product => product.fields.actors.map(actor))] : [];
        console.log(actors1);
        return [...new Set(actors1)].sort();
    };
    directors = () => {
        let actorArrays = this.products.length > 0 ?
            this.products.map(product => product.fields.directors) : [];
        let actors1 = [];
        let result = actorArrays.length > 0 ?
            actorArrays.map(array => array.reduce((actors1, actor) => {
                actors1.push(actor)
                return actors1;
            }, actors1)) : [];
        // let result = this.products.length > 0 ? [...new Set(this.products.map(product => product.fields.actors.map(actor))] : [];
        console.log(actors1);
        return [...new Set(actors1)].sort();
    };
    genres = () => {
        let actorArrays = this.products.length > 0 ?
            this.products.map(product => product.fields.genres) : [];
        let actors1 = [];
        let result = actorArrays.length > 0 ?
            actorArrays.map(array => array.reduce((actors1, actor) => {
                actors1.push(actor)
                return actors1;
            }, actors1)) : [];
        // let result = this.products.length > 0 ? [...new Set(this.products.map(product => product.fields.actors.map(actor))] : [];
        console.log(actors1);
        return [...new Set(actors1)].sort();
    }

} 