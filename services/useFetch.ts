import { useEffect, useState } from "react"

const useFetch =  <T>(fetchFunction : ()=>Promise<T> , autoFetch = true) => {
    const [Data , setData] = useState<T | null>(null);
    const [loading , setLoading] = useState<boolean>(false);
    const [error , setError] = useState<Error | null>(null);
    const fetchData = async () =>{
        try {
            setLoading(true);
            setError(null);
            const result = await fetchFunction();
            setData(result);
        }
        catch(e){
            setError(e instanceof Error ? e : new Error("An error occurred"));
        }
        finally{
            setLoading(false);
        }
    }
    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }
    useEffect(()=>{
        if(autoFetch){
            fetchData();
        }
    }, []);
    return {
        Data , 
        loading ,
        error ,
        refectch :fetchData , 
        reset
    };
}
export default useFetch;