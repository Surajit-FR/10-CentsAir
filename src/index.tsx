import ReactDOM from 'react-dom/client';
import App from './App';
import './Index.css'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css'
import 'react-phone-input-2/lib/style.css';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  { path: '*', element: (<App />) },
  { path: '/login', element: (<Login />) },
  { path: '/signup', element: (<SignUp />) },
], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
    <Toaster
      position='top-center'
      reverseOrder={false}
      gutter={10}
    />
  </Provider>
);

reportWebVitals();
