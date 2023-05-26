import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavBar from './components/Navbar/Navbar';
import Video from './components/Video/Video';
import Option from './components/Option/Option';
import StartLogo from './components/startComponent/startComponent';
import UsersPageContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/Profile container';



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wraper'>
                <Header />
                <NavBar />
                <div className='app-wraper-dialogs'>
                    <Routes>
                        <Route path="" element={<StartLogo
                        />} />
                        <Route path="/Profile/*" element={<ProfileContainer/>} />
                        <Route path="/UsersPage" element={<UsersPageContainer />} />
                        <Route path="/Dialogs/*" element={<DialogsContainer />} />
                        <Route path='/Music' element={<Music />} />
                        <Route path='/Video' element={<Video />} />
                        <Route path='/Option' element={<Option />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

