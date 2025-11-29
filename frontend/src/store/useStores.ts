import create from 'zustand';
import { adSpaceSlice } from './slices/adSpaceSlice';
import {createBookingSlice} from './slices/bookingSlice';

export const useStore= create((set,get)=>({

    ...createAdSpaceSlice(set,get),
    ...createBookingSlice(set,get),
}))