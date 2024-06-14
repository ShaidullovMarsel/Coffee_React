import { Routes, Route, Link} from "react-router-dom";
import About from '../about/about';
import Footer from '../footer/footer';
import Header from '../header/header';
import Present from '../present/present';
import Promotwo from '../promotwo/promotwo';


import './app.scss';

function App() {
    return (
        <div className="app">
        <Header/>
        <About/>
        <Present/>
        <Footer/>
        <Routes>
            <Route path="/" element={Promotwo}></Route>
        </Routes>
        </div>
    )
}

export default App;