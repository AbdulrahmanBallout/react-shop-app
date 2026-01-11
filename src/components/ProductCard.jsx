import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.number}`} className="d-flex flex-column product-card global-img">
      
        <div className="product-media">
          <img
            src={product.images[0]}
            alt={product.name}
            className="img-object-fit"
          />
        </div>

        {product.colors && product.colors.length > 0 && (
          <div className="d-flex items-center gap-8 mt-12">
            {product.colors.slice(0, 4).map((color, index) => (
              <span key={index} className={`swatch ${color.class}`}></span>
            ))}
            {product.colors.length > 4 && (
              <span className="font-14 main-regular-font">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}

        {product.bestSeller && (
          <p className="font-14 main-bold-font mt-10 best-seller">Best Seller</p>
        )}

        <p className="font-16 main-medium-font mt-8 line-clamp-2">
          {product.name}
        </p>
        <p className="font-14 main-regular-font mt-5 muted">{product.category}</p>
        <p className="font-16 main-medium-font mt-10">
          {product.currency}{product.price}
        </p>
    </Link>
  );
};

export default ProductCard;
