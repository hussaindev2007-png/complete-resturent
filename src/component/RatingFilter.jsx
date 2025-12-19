const RatingFilter = ({ selectedRating, onChangeRating }) => {
  return (
    <div className="bg-white border rounded-lg p-4 space-y-2 w-44 shadow-md">
      {[5, 4, 3, 2, 1].map((rating) => (
        <div
          key={rating}
          className={`flex items-center justify-between cursor-pointer p-2 rounded-md hover:bg-gray-100`}
          onClick={() => onChangeRating(rating)}
        >
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={rating === selectedRating && star <= rating ? "red" : star <= rating ? "currentColor" : "gray"}
                className="w-4 h-4 text-yellow-400"
              >
                <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848L19.336 24 12 19.897 4.664 24 6 15.596 0 9.748l8.332-1.73z"/>
              </svg>
            ))}
          </div>
          <p className="text-gray-400">{rating === 5 ? "5.0" : rating.toFixed(1) + " +"}</p>
        </div>
      ))}
    </div>
  );
};

export default RatingFilter;





































// const RatingFilter = ({ selectedRating, onChangeRatingHandler }) => {
//   return (
//     <div className="bg-white border rounded-lg p-4 space-y-2 w-44 shadow-md">
//       {[5, 4, 3, 2, 1].map((rating) => (
//         <div
//           key={rating}
//           className={`flex items-center justify-between cursor-pointer p-2 rounded-md hover:bg-gray-100`}
//           onClick={() => onChangeRatingHandler(rating)}
//         >
//           <div className="flex">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <svg
//                 key={star}
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill={rating === selectedRating && star <= rating ? "red" : star <= rating ? "currentColor" : "gray"}
//                 className="w-4 h-4 text-yellow-400"
//               >
//                 <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848L19.336 24 12 19.897 4.664 24 6 15.596 0 9.748l8.332-1.73z"/>
//               </svg>
//             ))}
//           </div>
//           <p className="text-gray-400">{rating === 5 ? "5.0" : rating.toFixed(1) + " +"}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RatingFilter;

