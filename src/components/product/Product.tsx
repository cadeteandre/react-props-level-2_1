import "./Product.css";

interface IProduct {
    title: string,
    imgUrl: string,
    price: number,
}

const Product: React.FC<IProduct> = (props) => {
    return ( 
        <div className="product">
            <img src={props.imgUrl} alt="product-img" />
            <p>{props.title}</p>
            <p>${props.price}</p>
            <a href="#">BUY NOW</a>
        </div>
    );
}

export default Product;