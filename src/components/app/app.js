import About from '../about/about';
import Footer from '../footer/footer';
import Header from '../header/header';
import Present from '../present/present';

import './app.scss';

function App() {
    return (
        <div className="app">
        <Header/>
        <About/>
        <Present/>
        <Footer/>
        </div>
    )
}

export default App;