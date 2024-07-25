/* eslint-disable react/prop-types */


const Progress = (props) => {
  return (
    <div>
      <div>
        <h1>Progress Bar</h1>
        <div 
          style={{
            width: "100%",
            backgroundColor: "#e0e0e0",
            borderRadius: "4px",
            
          }}
        >
          <div className="progress-bar"
            style={{
              // eslint-disable-next-line react/prop-types
              width: `${props.progress}%`,
              backgroundColor: "#007bff",
              height: "24px",
              borderRadius: "4px",
            }}
          ></div>
        </div>
        <p>{props.progress}% Complete</p>
      </div>
    </div>
  );
};

export default Progress;
