import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAllUser = () => {
    const { data:users=[],refetch,isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const rest = await fetch('http://localhost:5000/users') 
            return rest.data
        }
         
   
         
      })
    return [users,refetch,isLoading]
};

export default useAllUser;