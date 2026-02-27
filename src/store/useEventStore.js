import { axiosInstance } from "../lib/axios";
import { create } from "zustand";


const useEventStore = create((set)=>({
    loading:false,
    error:null,
    addEvent:async (payload)=>{
        try{
            set({loading:true,error:null});
            const res = await axiosInstance.post('/event/addevent',payload);

            set({loading:false});

            return res.data;
        }catch(err){
            set({loading:false,error:err.response?.data?.message || 'Failed to add Event'});
            throw err;
        }
        
    }
    
}));

export default useEventStore;