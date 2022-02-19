import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UseState from './components/HookUseState/UseState';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="usestate" element={<UseState />}/>
            </Routes>
        </div>
    );
}

export default App;
