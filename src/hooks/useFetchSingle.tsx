import { useQuery } from "@tanstack/react-query";

export default function useFetchSingle <T,>(queryKeys:string[], fetchData:()=>Promise<T[]>){
    const { isFetching, data, error } = useQuery({
        queryKey: queryKeys,
        queryFn: fetchData,        
    });
    return {isFetching,data,error}
}