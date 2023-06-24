import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          headers: {
            "access-control-allow-origin": ["http://localhost:300","*"],
          },
          credentials:'include'
        });

        if (!res.ok) {
          setError("failed to fetch");
        }
        const results = await res.json();
        setData(results.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
