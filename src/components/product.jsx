import './styles/product.css';
import QuantityPicker from '../components/quantityPicker'

function Product(){
    return(
        <div className="product">
            <img src="https://picsum.photos/250/200" alt="image"></img>
            <h3>i'm a product</h3>
            <lable>$total</lable>
            <lable>$price</lable>
            <QuantityPicker></QuantityPicker>
        </div>
    )
}

export default Product;