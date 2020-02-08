import React, { Fragment, useState } from "react";

const Graph = ({ graph, returnHome }) => {
  const [height, setHeight] = useState(0);

  setTimeout(
    () => {
      setHeight(200);
    },
    window.innerWidth > 640 ? 1000 : 1
  );

  return (
    <Fragment>
      <h1>Results:</h1>
      <div className="Graph" style={{ height: `${height}px` }}>
        {graph.map((data, index) => (
          <div
            className="data"
            key={index}
            style={{ height: `${(data / graph[graph.length - 1]) * 100}%` }}
          >
            <div className="tip">
              <p>Year: {graph.indexOf(data)}</p>
              <p>Sum: {data}$</p>
            </div>
          </div>
        ))}
      </div>
      <p className="years-to-the-goal">
        It will take you {graph.length - 1} years to become a millionaire
      </p>
      <button onClick={() => returnHome()} className="return">
        Return
      </button>
    </Fragment>
  );
};

export default Graph;
