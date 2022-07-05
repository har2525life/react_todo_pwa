import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Login from './screen/Login';
import MemoScreen from './screen/MemoScreen';
import Register from './screen/Register';


const App = () => {
  return (
    <AuthProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path={`/register/`} element={<Register />} />
            <Route path={`/login/`} element={<Login />} />
            <Route path={`/`} element={<MemoScreen />} />
          </Routes>
        </BrowserRouter>
      </>
    </AuthProvider>
  );
}

export default App;
