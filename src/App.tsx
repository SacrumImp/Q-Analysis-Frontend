import './App.scss';
import { Home } from './pages';
import {
  rootStore,
  StoreContext,
} from './stores';

export const App = () => {
  return (
    <StoreContext.Provider value={rootStore}>
      <div className="App">
        <Home/>
      </div>
    </StoreContext.Provider>
  )
}
