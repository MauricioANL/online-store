const catalog = [
    {
        "title":"Tomato",
        "image":"../img/tomato.png",
        "price": 12.99,
        "category":"Dairy",
        "_id":"123"
    },
    {
        "title":"Melon",
        "image":"../img/melon.png",
        "price": 24.99,
        "category":"Dairy",
        "_id":"124"

    },
    {
        "title":"Aceite",
        "image":"../img/aceite.png",
        "price": 29.99,
        "category":"Dairy",
        "_id":"124"

    },
    {
        "title":"Pan",
        "image":"../img/pan.png",
        "price": 1.99,
        "category":"Dairy",
        "_id":"124"

    },
    {
        "title":"Ice Cream",
        "image":"../img/nieve.png",
        "price": 89.99,
        "category":"Dairy",
        "_id":"124"

    },
    {
        "title":"Beater",
        "image":"../img/mantequilla.png",
        "price": 14.99,
        "category":"Dairy",
        "_id":"124"

    },
    {
        "title":"Bean",
        "image":"../img/frijol.png",
        "price": 19.99,
        "category":"Dairy",
        "_id":"124"

    },
    {
        "title":"Avocado",
        "image":"../img/aguacate.png",
        "price": 49.99,
        "category":"Dairy",
        "_id":"124"

    },
    {
        "title":"Banana",
        "image":"../img/PLATANO.png",
        "price": 37.99,
        "category":"Dairy",
        "_id":"124"

    }
];

class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;