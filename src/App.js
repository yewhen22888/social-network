import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className='app-wraper'>
      <Header />
      <NavBar />
      <Profile />

    </div>
  );
};

export default App;
