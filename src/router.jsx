import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/app';
import About from './pages/about';
import ExOne from './pages/ex01';
import ExTwo from './pages/ex02';
import ExThree from './pages/ex03';
import ExFour from './pages/ex04';
import ExFive from './pages/ex05';
import ExSix from './pages/ex06';
import ExSeven from './pages/ex07';
import ExEight from './pages/ex08';
import ExNine from './pages/ex09';
import ExTen from './pages/ex10';
import ExEleven from './pages/ex11';

export default function Navegacao (){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/ex01' element={<ExOne/>}/>
            <Route path='/ex02' element={<ExTwo/>}/>
            <Route path='/ex03' element={<ExThree/>}/>
            <Route path='/ex04' element={<ExFour/>}/>
            <Route path='/ex05' element={<ExFive/>}/>
            <Route path='/ex06' element={<ExSix/>}/>
            <Route path='/ex07' element={<ExSeven/>}/>
            <Route path='/ex08' element={<ExEight/>}/>
            <Route path='/ex09' element={<ExNine/>}/>
            <Route path='/ex10' element={<ExTen/>}/>
            <Route path='/ex11' element={<ExEleven/>}/>
        </Routes>
    </BrowserRouter>
    )
}