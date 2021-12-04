import { BrowserRouter } from 'react-router-dom';
import '../styles/App.css';
import MaioraFooter from './Footer';
import MaioraHeader from './Header';
import MaioraRouter from './Router';

function App() {
  return (
    <BrowserRouter>

      <MaioraHeader />
      <MaioraRouter />
      <MaioraFooter />
    </BrowserRouter>
  );
}

export default App;
