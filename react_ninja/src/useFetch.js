import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);  //why null?
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {           //this hook runs for every render

        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
        .then(res => {
            if(!res.ok){
                throw new Error("could not fetch");
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch(err => {
              if(err.name === "AbortError"){
                  console.log("fetch aborted")
              }
              else{
              setIsPending(false);
              setError(err.message);
              }
          });

          return () => abortCont.abort();
    }, [url]) //empty array means it runs only once (initial render)

    return {data, isPending, error};
}

export default useFetch;
