import {
  createContext,
  useContext,
} from 'react';
import { calculationsFormStore } from './CalculationsFormStore';

export const rootStore = {
  calculationsFormStore,
};

export const StoreContext = createContext(rootStore);

export const useStoreContext = () => { return useContext(StoreContext) };