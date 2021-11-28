import { BrowserRouter } from 'react-router-dom';
import '../styles/App.css';
import MaioraHeader from './Header';
import MaioraRouter from './Router';

function App() {
  return (
    <BrowserRouter>

      <MaioraHeader />
      <MaioraRouter />
    </BrowserRouter>
  );
}

export default App;
