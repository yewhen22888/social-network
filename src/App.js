import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Video from './components/Video/Video';
import Option from './components/Option/Option';
import Post from './components/Profile/MyPosts/MyPost/MyPost';

const App = (props) => {


  return (
    <BrowserRouter>
      <div className='app-wraper'>
        <Header />
        <NavBar />
        <div className='app-wraper-dialogs'>
          <Routes>
            <Route path="/Profile" element={<Profile posts={props.posts} />} />
            <Route path="/Dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
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

