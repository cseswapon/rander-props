import { useEffect, useState } from "react";

const Fetcher = ({ url, children }) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState((prev) => ({ ...prev, loading: true }));

      try {
        const fetching = await fetch(url);
        const data = await fetching.json();
        setState((prev) => ({
          ...prev,
          data: data,
          loading: false,
        }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error,
          loading: false,
        }));
      }
    };

    fetchData();
  }, [url]);

  return children(state);
};

export default Fetcher;
