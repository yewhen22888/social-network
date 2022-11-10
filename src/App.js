import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  const post = {
    message: 'hello im prorider', age: 21
  }

  return (
    <div className='app-wraper'>
      <Header />
      <NavBar />
      <div className='app-wraper-dialogs'>
        { <Dialogs />/* <Profile postname={post} /> */}
      </div>
      {/* <Profile postname={post} /> */}
    </div>
  );
};

export default App;
