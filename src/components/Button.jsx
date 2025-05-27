const Button = ({ text, className }) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <p>{text}</p>
      </div>
    </a>
  );
};

export default Button;
