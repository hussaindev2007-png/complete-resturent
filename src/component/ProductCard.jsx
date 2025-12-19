
 
import { Link } from "react-router-dom";




function ProductCards({ product, selectedRating = 0}) {
  const totalStars = 5;
  const starsToShow = selectedRating || product.rating;

  return (
    <div className="relative bg-white max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
     <Link to=  {`/products/${product.id}`}>
        <img
          className="w-full h-60 object-cover"
          src={product.image}
          alt="product image"
          />
          </Link>
      

      <div className="px-5 py-4">
        <h2 className="font-semibold text-lg mb-2 truncate">{product.title}</h2>

        <div className="flex items-center mb-3">
          {[...Array(totalStars)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke={i < starsToShow ? "yellow" : "gray"}  
              fill={i < starsToShow ? "yellow" : "gray"}    
              className="w-6 h-6 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          ))}
          <span className="ml-1 text-sm text-gray-600">({product.rating})</span>
        </div>

        <p className="text-gray-700 text-sm line-clamp-3">
          {product.description}
        </p>
      </div>

      <div className="absolute w-full bottom-0 flex justify-between items-center px-5 py-3 bg-white border-t">
        <span className="font-bold text-lg text-gray-900">${product.price}</span>

        
       

         
         
        
          <Link to= "/Add">
           <button className="flex items-center gap-2 border px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <span>Add to cart</span>
        </button> 
        </Link>
         


        
      </div>
    </div>
  );
}

export default ProductCards;
