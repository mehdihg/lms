import { QueryCache, QueryClient } from "@tanstack/react-query";



export const queryClient =new QueryClient({
    queryCache:new QueryCache({
        onError:(error)=>{

        }
    }),
   defaultOptions:{
    queries:{
        retry:false,
        refetchOnWindowFocus:false,
        throwOnError:false,
        staleTime: 1000*60*60*24
        
        
    }
   }
})