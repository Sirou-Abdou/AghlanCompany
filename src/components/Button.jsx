const Button = ({title, className}) => {
  return (
    <div>
      <button className={`bg-secondary py-2 px-8 transition-all duration-300 rounded hover:bg-indigo-600 hover:text-white font-semibold ${className}`}>
        {title}
      </button>
    </div>
  );
};

export default Button;
