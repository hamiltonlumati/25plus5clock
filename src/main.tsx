import ReactDOM from 'react-dom/client'
import './index.css'
import Screen from './layout/screen';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Screen />
  </Provider>
)

