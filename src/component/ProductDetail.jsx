import React from 'react'
import DATA from '../Data.jsx';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../Redux/action/index'


const ProductDetail = () => {

  const [cartbtn, setCartbtn] = useState("Add to Cart");
  const proid = useParams();
  const proDetail = DATA.filter(x => x.id == proid.id)
  const product = proDetail[0];
  console.log(product);

  // useDispatch
  const dispatch = useDispatch();

  // handlecart

  const handleCart = (product) => {
    if (cartbtn === "Add to Cart") {
      dispatch(addItem(product))
      setCartbtn("Remove from Cart")
    }
    else {
      dispatch(delItem(product))
      setCartbtn("Add to Cart")
    }
  }

  return (
    <>
      <div className="container my-5 py-5 ">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className='display-5 fw-bold'>{product.title}</h1>
            <hr />
            <h2 className='my-5 '>₹{product.price}</h2>
            <p className='lead'>{product.desc}</p>
            <button onClick={() => handleCart(product)} className="btn btn-outline-primary my-5">{cartbtn}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail