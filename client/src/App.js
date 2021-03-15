import style from './App.module.css';
import Header from './components/Header';

function App() {
  return (
    <div className={style.app}>
      <div className={style.container}>
      <h1>Lets begin</h1>
      <Header />
      </div>
    </div>
  );
}

export default App;