import { StateCreator } from 'zustand';
import { AdSpaceSliceType } from '../../types/sliceTypes/SliceTypes';
import { AdSpaceDTO } from '../../types/AdSpaceTypes';

export const createAdSpaceSlice: StateCreator<AdSpaceSliceType> = (set, get,store) => ({
  adSpaces: [],
  loading: false,
  error: undefined,

  // Fetch adSpaces
  fetchAdSpaces: async () => {
    
  },

  // Fetch adSpace by ID
  fetchAdSpaceOnId: async (id: number) => {
   
  },
});
