const Sticker = ({ image, title, className }) => {
  return (
    <div
      className={`h-96 flex flex-col items-center justify-evenly shadow-3xl rounded-xl hover:-translate-y-4 transition-all duration-300 cursor-pointer ${className}`}
    >
      <img src={image} alt={title} className="w-[150px]" />
      <h1 className="font-semibold text-xl text-center px-2">{title}</h1>
    </div>
  );
};

export default Sticker;
