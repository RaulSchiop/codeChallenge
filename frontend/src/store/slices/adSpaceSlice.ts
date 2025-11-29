import { StateCreator } from 'zustand';
import { AdSpaceSliceType } from '../../types/sliceTypes/SliceTypes';
import { AdSpaceDTO } from '../../types/AdSpaceTypes';
import { fetchAdSpaces } from '../../api/adSpace';
import { error } from 'console';

export const createAdSpaceSlice: StateCreator<AdSpaceSliceType> = (set, get,store) => ({
  adSpaces: [],
  loading: false,
  error: undefined,
  

  // Fetch adSpaces
  fetchAdSpaces: async () => {
   try {
    set({ loading: true, error: undefined });
    const data = await fetchAdSpaces(); 

    set({ adSpaces: data, loading: false });
  } catch (err: any) {
    set({ error: err.message || 'Failed to get ad spaces', loading: false });
  }
  },

  // Fetch adSpace by ID
  fetchAdSpaceOnId: async (id: number) => {
   
  },
});
