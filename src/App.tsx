import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [data, setdata] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const itemsperpage = 10;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, []);

  const totalpages = data.length / itemsperpage;
  const startindex = (currentpage - 1) * itemsperpage;
  const pagedata = data.slice(startindex, startindex + itemsperpage);

  return (
    <>
      <div className="p-4">
        <div className="font-bold m-4 fs-69">
          {pagedata.map((d) => (
            <p>{` =>${d.title}`}</p>
          ))}
        </div>
        <div className="d-flex justify-content-center  ">
          <button
            onClick={() => setcurrentpage(currentpage - 1)}
            disabled={currentpage === 1}
            className="btn btn-primary"
          >
            previous
          </button>
          {[...Array(totalpages)].map((_, index) => (
            <button onClick={() => setcurrentpage(index + 1)}>
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setcurrentpage(currentpage + 1)}
            disabled={currentpage === 10}
            className="btn btn-primary"
          >
            next
          </button>
        </div>
      </div>
    </>
  );
};
export default App;
