import Header from './components/Header';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <AuthProvider>
      <Header />
    </AuthProvider>
  );
}

export default App;
