import './App.css';
import HelloWorld from './component/HelloWorld';
import Title from './component/Title';
import StickerLocation from './component/StickerLocation';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Title titleText="포켓몬 띠부띠부씰 자리 찾기"/>
      <StickerLocation/>
    </div>
  );
}

export default App;
