import './App.css';
import { TextProvider } from './context/TextContext.tsx';
import TextBox from './components/TextBox.tsx';
import Reader from './components/Reader.tsx';
import WpmSelector from './components/WpmSelector.tsx';

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
