import "./../css/list.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { productsFetch } from "../redux/slices/ProductsSlice";

//PASO LAS PROPS
const List = (category: any) => {
  const dispatch = useDispatch();
  const { products }: any = useSelector((state: any) => state.products);
  const categoryName: any = category.category;

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  const handleAddCart = (product: any) => {
    dispatch(addToCart(product));
  };

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2">
      {products.map((product: any) =>
        product.category[0] === categoryName ? (
          <div className="d-flex justify-content-center" key={product._id}>
            <div className="card my-card">
              <img src={product.imgUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                {/* <p className="card-text">{product.desc}</p> */}
                <p className="card-text">desc</p>
                <p className="card-text">
                  ${product.price.toFixed(2).toLocaleString()}
                </p>
                <button
                  className="mx-3 btn btn-secondary text-white"
                  onClick={() => handleAddCart(product)}
                >
                  Add+
                </button>

                <button
                  className="btn btn-secondry"
                  onClick={() => topFunction()}
                >
                  <NavLink
                    to={`/product/${product._id}`}
                    className="btn btn-secondary"
                  >
                    Ver Producto
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export { List };
