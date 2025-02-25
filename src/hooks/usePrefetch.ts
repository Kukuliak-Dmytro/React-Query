import { useQueryClient, QueryKey } from "@tanstack/react-query";

export const usePrefetch = <T>(fetchData: ({ queryKey }: { queryKey: QueryKey }) => Promise<T>) => {
    const queryClient = useQueryClient();

    const prefetch = async (queryKey: QueryKey) => {
        await queryClient.prefetchQuery({
            queryKey,
            queryFn: () => fetchData({ queryKey })
        });
    };

    return prefetch;
};