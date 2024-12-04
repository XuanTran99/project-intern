import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

// const ProductCard = (props) => {
//   const { grid, data } = props;
//   let location = useLocation();
//   const dispatch = useDispatch();

//   const addToWish = (id) => {
//     dispatch(addToWishlist(id));
//   };

//   return (
//     <>
//       {data?.map((item, index) => {
//         const imageUrl = item?.images?.[0]?.url || watch2; // fallback image if no image
//         const totalRating = item?.totalrating || 0; // fallback rating if undefined
//         const description = item?.description || "No description available"; // fallback description
//         const price = item?.price || 0; // fallback price if undefined
//         const brand = item?.brand || "Unknown Brand"; // fallback brand if undefined
//         const title = item?.title || "Untitled"; // fallback title if undefined

//         return (
//           <div
//             key={index}
//             className={` ${
//               location.pathname == "/product" ? `gr-${grid}` : "col-3"
//             } `}
//           >
//             <div
//               className="product-card position-relative"
//             >
//               <div className="wishlist-icon position-absolute">
//                 <button className="border-0 bg-transparent">
//                   <img
//                     onClick={() => addToWish(item?._id)}
//                     src={wish}
//                     alt="wishlist"
//                   />
//                 </button>
//               </div>
//               <div className="product-image">
//                 <img
//                   src={item?.images[0].url}
//                   className="img-fluid  mx-auto"
//                   alt="product image"
//                   width={160}
//                 />
//                 <img
//                   src={watch2}
//                   className="img-fluid  mx-auto"
//                   alt="product image"
//                   width={160}
//                 />
//               </div>
//               <div className="product-details">
//                 <h6 className="brand">{item?.brand}</h6>
//                 <h5 className="product-title">{item?.title}</h5>
//                 <ReactStars
//                   count={5}
//                   size={24}
//                   value={item?.totalrating.toString()}
//                   edit={false}
//                   activeColor="#ffd700"
//                 />
//                 <p
//                   className={`description ${
//                     grid === 12 ? "d-block" : "d-none"
//                   }`}
//                   dangerouslySetInnerHTML={{ __html: item?.description }}
//                 ></p>
//                 <p className="price">$ {item?.price}</p>
//               </div>
//               <div className="action-bar position-absolute">
//                 <div className="d-flex flex-column gap-15">
//                   {/* <button className="border-0 bg-transparent">
//                     <img src={prodcompare} alt="compare" />
//                   </button> */}
//                   <Link to={'/product/'+item?._id} className="border-0 bg-transparent">
//                     <img src={view} alt="view" />
//                   </Link>
//                  {/*  <button className="border-0 bg-transparent">
//                     <img src={addcart} alt="addcart" />
//                   </button> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

const ProductCard = (props) => {
  const { grid, data } = props;
  let location = useLocation();
  const dispatch = useDispatch();

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      {data?.map((item, index) => {
        // Ensure images is an array and has at least one item
        const imageUrl =
          item?.images?.length > 0 ? item?.images[0]?.url : watch2; // fallback image if no image
        const totalRating = item?.totalrating || 0; // fallback rating if undefined
        const description = item?.description || "No description available"; // fallback description
        const price = item?.price || 0; // fallback price if undefined
        const brand = item?.brand || "Unknown Brand"; // fallback brand if undefined
        const title = item?.title || "Untitled"; // fallback title if undefined

        return (
          // <div
          //   key={index}
          //   className={`${
          //     location.pathname === "/product" ? `gr-${grid}` : "col-3"
          //   }`}
          // >
          //   <div className="product-card position-relative">
          //     <div className="wishlist-icon position-absolute">
          //       <button className="border-0 bg-transparent">
          //         <img
          //           onClick={() => addToWish(item?._id)}
          //           src={wish}
          //           alt="wishlist"
          //         />
          //       </button>
          //     </div>
          //     <div className="product-image">
          //       <img
          //         src={imageUrl} // use imageUrl here, which is already validated
          //         className="img-fluid mx-auto"
          //         alt="product image"
          //         width={160}
          //       />
          //       {/* <img
          //         src={watch2}
          //         className="img-fluid mx-auto"
          //         alt="product image"
          //         width={160}
          //       /> */}
          //     </div>
          //     <div className="product-details">
          //       <h6 className="brand">{brand}</h6>
          //       <h5 className="product-title">{title}</h5>
          //       <ReactStars
          //         count={5}
          //         size={24}
          //         value={totalRating}
          //         edit={false}
          //         activeColor="#ffd700"
          //       />
          //       <p
          //         className={`description ${
          //           grid === 12 ? "d-block" : "d-none"
          //         }`}
          //         dangerouslySetInnerHTML={{ __html: description }}
          //       ></p>
          //       <p className="price">$ {price}</p>
          //     </div>
          //     <div className="action-bar position-absolute">
          //       <div className="d-flex flex-column gap-15">
          //         <Link
          //           to={`/product/${item?._id}`}
          //           className="border-0 bg-transparent"
          //         >
          //           <img src={view} alt="view" />
          //         </Link>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div
            key={index}
            className={`${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            }`}
          >
            <div className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent">
                  <img
                    onClick={() => addToWish(item?._id)}
                    src={wish}
                    alt="wishlist"
                  />
                </button>
              </div>
              {/* Bọc ảnh và tên trong Link */}
              <Link
                to={`/product/${item?._id}`}
                className="text-decoration-none text-dark"
              >
                <div className="product-image">
                  <img
                    src={imageUrl}
                    className="img-fluid mx-auto"
                    alt="product image"
                    width={160}
                  />
                </div>
                <div className="product-details">
                  <h6 className="brand">{brand}</h6>
                  <h5 className="product-title">{title}</h5>
                </div>
              </Link>
              {/* Các thông tin khác */}
              <div className="product-details">
                <ReactStars
                  count={5}
                  size={24}
                  value={totalRating}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
                <p className="price">$ {price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
