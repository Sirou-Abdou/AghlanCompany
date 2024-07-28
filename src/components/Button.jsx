const Button = (props) => {
  return (
    <div>
      <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:bg-indigo-600 hover:text-white font-semibold">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
