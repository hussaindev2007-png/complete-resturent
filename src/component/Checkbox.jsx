
const Checkbox = ({
  id,
  text,
  className = "",
  checkboxClassName = "",
  labelClassName = "",
  checked,
  ...props
}) => {
  return (
   
<div
  className={`relative flex items-center gap-2 select-none ${className}`}
>
  
  <input
    id={id}
    type="checkbox"
    checked={checked}
    {...props}
    className={`w-5 h-5 appearance-none rounded-md cursor-pointer
      border border-sky-500/70 bg-gradient-to-br from-black/60 to-sky-900/40
      checked:from-sky-500 checked:to-sky-700 checked:border-sky-400
      checked:shadow-[0_0_10px_2px_rgba(56,189,248,0.5)]
      hover:scale-110 hover:shadow-[0_0_10px_2px_rgba(56,189,248,0.3)]
      transition-all duration-300 ease-out focus:ring-2 focus:ring-sky-400/50
      ${checkboxClassName}`}
  />

 
  {text && (
    <label
      htmlFor={id}
      className={`cursor-pointer text-white font-medium text-sm tracking-wide hover:text-sky-300 transition-colors duration-200 ${labelClassName}`}
    >
      {text}
    </label>
  )}
</div>


  );
};

export default Checkbox;