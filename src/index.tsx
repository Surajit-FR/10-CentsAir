import ReactDOM from 'react-dom/client';
import App from './App';
import './Index.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import 'react-phone-number-input/style.css';
import { Provider } from 'react-redux';
import store from './services/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  </Provider>
);

reportWebVitals();
