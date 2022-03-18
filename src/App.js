import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Mout from './components/HookUseEffect/Mout';
import UseState from './components/HookUseState/UseState';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="usestate" element={<UseState />}/>
                <Route path="useeffect" element={<Mout />}/>
            </Routes>
        </div>
    );
}

export default App;
