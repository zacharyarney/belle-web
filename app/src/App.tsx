import './App.css';
import { TextProvider } from './context/TextContext';
import TextBox from './components/TextBox';
import Reader from './components/Reader';
import WpmSelector from './components/WpmSelector';

function App() {
  return (
    <>
      <h1>belle</h1>
      <TextProvider>
        <Reader />
        <WpmSelector />
        <TextBox />
      </TextProvider>
    </>
  );
}

export default App;
