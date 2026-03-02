import { create } from 'zustand';
import {axiosInstance} from '../lib/axios.js'

 const useStore = create((set) => ({
      loading:false,
      error:null,
      addCrop:async (payload)=>{
        try{
          set({loading:true,error:null});
          const res = axiosInstance.post('/crop/add',payload);
          set({loading:false});
        }catch(err)
        {
          set({loading:false,error:err.response?.data?.message || "Failed to add Crop"});
          throw err
        }
      }
    }));

    export default useStore;
  