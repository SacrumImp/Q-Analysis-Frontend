import {
  createContext,
  useContext,
} from 'react';
import { calculationsFormStore } from './CalculationsFormStore';
import { resultsStore } from './ResultsStore';

export const rootStore = {
  calculationsFormStore,
  resultsStore,
};

export const StoreContext = createContext(rootStore);

export const useStoreContext = () => { return useContext(StoreContext) };