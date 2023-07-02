import { useEffect, useState } from "react";

// build the useFetch hook
let useFetch = (endpoint: string) => {
  let [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return [data];
};

export default useFetch;
