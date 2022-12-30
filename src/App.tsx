import './App.css';
import { SiteRoutes } from './routes/SiteRoutes';

function App() {
  return (
    <div className='body-page'>
      <div className='header'>Estoque de Produtos</div>
      <div className='main'><SiteRoutes /></div>
    </div>
  );
}

export default App;
