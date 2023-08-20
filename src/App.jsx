import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './contexts/Home';
import Start from './contexts/Start';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Start/>}/>
                    <Route path="/*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
