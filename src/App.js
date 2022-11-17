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

const App = () => {
    let posts = [
    { id: 1, message: "Hi im okay", likeCounts: '12' },
    { id: 1, message: 'How old are you', likeCounts: '13' },
    { id: 1, message: 'i love football', likeCounts: '7' },
  ]
  
  let postselement = posts.map(el => <Post message={el.message} likeCounts={el.likeCounts}/>)
  
  return (
    <BrowserRouter>
      <div className='app-wraper'>
        <Header />
        <NavBar />
        <div className='app-wraper-dialogs'>
          <Routes>
            <Route path="/Profile" element={() => <Profile posts={postselement} />} />
            <Route path="/Dialogs/*" element={<Dialogs />} />
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

