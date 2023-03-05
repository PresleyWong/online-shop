import Spinner from "./Spinner";

const Button = ({
  text,
  onClick = null,
  disabled = false,
  isDanger = false,
  isLoading = false,
  height = 40,
  width = 150,
}) => {
  return (
    <button
      type="button"
      className={`h-[${height}px] w-[${width}px] primary-btn rounded-md`}
      onClick={onClick}
    >
      {isLoading ? <Spinner height={4} width={4} /> : text}
    </button>
  );
};

export default Button;
