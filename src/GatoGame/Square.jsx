import classNames from "classnames";
const Square = ({ children, index, updateBoard, isSelected }) => {
  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div
      onClick={handleClick}
      className={classNames(
        "w-24 h-24 border border-gray-300 rounded-sm grid place-items-center cursor-pointer text-3xl",
        isSelected ? "bg-blue-500 border-0 rounded" : ""
      )}
    >
      {children}
    </div>
  );
};

export default Square;
