import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from "react-router-dom";
import store from './redux/configureStore';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
