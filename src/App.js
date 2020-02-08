import React, { useState, Fragment } from "react";
import "./scss/main.css";

import Preloader from "./components/Preloader";
import Graph from "./components/Graph";

const App = () => {
  const [initialSum, setInitialSum] = useState(50000);
  const [reinvestment, setReinvestment] = useState(10000);
  const [interest, setInterest] = useState(10);
  const [graph, setGraph] = useState([]);

  function calculate(e) {
    e.preventDefault();

    let initSum = initialSum;
    let graphData = [initSum];
    while (initSum < 1000000) {
      initSum = Math.round(initSum * (1 + interest / 100));

      initSum += reinvestment;
      graphData.push(initSum);
    }

    setGraph(graphData);
  }

  function returnHome() {
    setGraph([]);
  }

  return (
    <div className={`App ${graph.length !== 0 ? "App-results" : ""}`}>
      {/* <Preloader /> */}
      <div className="info">
        {graph.length === 0 && (
          <Fragment>
            <h1>WayToTheFirstMillion</h1>
            <form onSubmit={e => calculate(e)}>
              <label htmlFor="initialSum">
                <p>Initial Sum $</p>
                <input
                  type="number"
                  name=""
                  id="initialSum"
                  placeholder="50000"
                  defaultValue={initialSum}
                  onChange={e => setInitialSum(parseInt(e.target.value))}
                />
              </label>
              <label htmlFor="reinvestment">
                <p>Yerly Reinvestment $</p>
                <input
                  type="number"
                  name=""
                  id="reinvestment"
                  placeholder="10000"
                  defaultValue={reinvestment}
                  onChange={e => setReinvestment(parseInt(e.target.value))}
                />
              </label>
              <label htmlFor="interest">
                <p>Interest %</p>
                <input
                  type="number"
                  name=""
                  id="interest"
                  placeholder="10"
                  defaultValue={interest}
                  onChange={e => setInterest(parseInt(e.target.value))}
                />
              </label>
              <button type="submit">Calculate</button>
            </form>
          </Fragment>
        )}

        {graph.length !== 0 && <Graph graph={graph} returnHome={returnHome} />}
      </div>
    </div>
  );
};

export default App;

/*
  Add favicon
  Add manifest
  Add preloader
  Add input limits
  Publish
  Test
*/
