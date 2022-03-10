import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter  } from "react-router-dom";
import store from './redux/configureStore';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const app = initializeApp({
  apiKey: "AIzaSyBWl3sN2OXtQjxGNjmA3KERK7VnylLFBUk",
  authDomain: "stocks-tracker-36306.firebaseapp.com",
  projectId: "stocks-tracker-36306",
  storageBucket: "stocks-tracker-36306.appspot.com",
  messagingSenderId: "311133999181",
  appId: "1:311133999181:web:06c6c18345aa8a58cb4c04",
  measurementId: "G-YHEEPFB08J"
});
getAnalytics(app);

function App() {
  return (
    <BrowserRouter  basemname='/stocks'>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter >
  );
}

export default App;
