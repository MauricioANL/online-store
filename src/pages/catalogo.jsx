import './styles/catalog.css';
import Product from '../components/product';
import Footer from '../components/footer.jsx';
import DataService from '../services/DataService.js';
import {useState, useEffect } from 'react';
function Catalog(){
    const [products,setProducts]=useState([]);
    const [categories,setCategories]=useState([]);

    useEffect(function(){
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProducts();
        setProducts(prods)
    }

    function loadCategories(){
        let service = new DataService();
        let cats = service.getCategories();
    }
    return(
        <div className="catalog">
            <h3>Whe have {products.length} new products for you!</h3>
            <br/>
            <div className="filters">
                {categories.map(cat => <button className="btn btn-sm btn-outline-success">{cat}</button>)}
            </div>
            <div className="catalog-item">
                {
                    products.map((item)=>(<Product key={item._id} data={item}></Product>))
                }

                
            </div>
        </div>
    )

}

export default Catalog;