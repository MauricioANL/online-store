import './styles/product.css';
import QuantityPicker from '../components/quantityPicker'
import { useState } from 'react';

function Product(props){
    const [quantity,setQuantity] = useState(1);
    function add(){

    }

    function handleQuantity(qty){
        setQuantity(qty);
    }
    function getTotal(){
        let total = props.data.price * quantity
        return total.toFixed(2);
    }
    return(
        <div className="product">
            <img src={props.data.image} alt="image"></img>
            <h3>{props.data.title}</h3>
            
            <div className='product-price'>

                <lable>${getTotal()}</lable>
                <br/>
                <lable>${props.data.price.toFixed(2)}</lable>

            </div>



            <QuantityPicker onChange={handleQuantity}></QuantityPicker>

            <button className='btn btn-sm btn-primary' onClick={add}>Add</button>
        </div>
    )
}

export default Product;