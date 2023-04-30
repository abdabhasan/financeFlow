import "./Button.scss";

const Button = ({ text, color, style, customClass }) => {
  return (
    <>
      <button
        type="button"
        className={`${color} ${customClass} `}
        style={style}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
