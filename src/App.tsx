import './App.css';
import Footer from './components/Footer.tsx';
import Reader from './components/Reader.tsx';
import TextBox from './components/TextBox.tsx';

function App() {
  return (
    <div className="max-w-xl mx-auto flex flex-col items-start justify-between h-screen p-4">
      <h1 className="text-5xl font-bold">belle</h1>
      <div className="w-full flex flex-col justify-between items-center h-full">
        <div className="w-full flex flex-col items-start space-y-8">
          <Reader />
          <TextBox />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
