import style from './App.module.css';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
  return (
    <div className={style.app}>
      <div className={style.container}>
      <Header />
      <Menu />
      </div>
    </div>
  );
}

export default App;