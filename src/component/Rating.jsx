
const Rating = ({ rating }) => {
  return (
    <div className="flex">
      {[1,2,3,4,5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={star <= rating ? "currentColor" : "gray"}
          className="w-5 h-5 text-yellow-400"
        >
          <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848L19.336 24 12 19.897 4.664 24 6 15.596 0 9.748l8.332-1.73z"/>
          
        </svg>

      ))}
    </div>
  );
};

export default Rating;



