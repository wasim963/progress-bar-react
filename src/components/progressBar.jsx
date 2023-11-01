import "./progressBar.css";

const ProgressBar = ({ progress = 20 }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ transform: `translateX(${progress - 100}% )` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
