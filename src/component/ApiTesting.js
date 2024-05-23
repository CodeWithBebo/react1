import React, { useEffect, useState } from "react";

const ApiTesting = () => {
  const [data, setData] = useState(null);
  //useEffect for fetching data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.restful-api.dev/objects");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log("Error found:", error);
    }
  };

  useEffect(() => {
    if (data) {
      console.log("data has been updated ", data);
    }
  }, [data]);

  return (
    // <div>{data && <p>Data {JSON.stringify(data)}</p>}</div>
    <div>{data && <p>Data {JSON.stringify(data)}</p>}</div>

    // <div>
    //   <p>working</p>
    // </div>
  );
};

export default ApiTesting;
