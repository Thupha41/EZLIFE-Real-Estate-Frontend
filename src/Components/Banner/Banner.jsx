import PropTypes from "prop-types";

const Banner = ({
  backgroundImage,
  title,
  children,
  overlay = true,
  className = "",
  titleClassName = "",
  height = "100vh",
}) => {
  return (
    <div
      className={`relative bg-cover bg-center w-full ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: height,
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      )}
      <div
        className={`relative z-10 flex flex-col justify-center items-center text-white text-center px-4 sm:px-6 lg:px-8`}
        style={{ minHeight: height }}
      >
        <h1
          className={`text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight ${titleClassName}`}
        >
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  overlay: PropTypes.bool,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  height: PropTypes.string,
};

export default Banner;
