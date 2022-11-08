import './App.css';
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
      <Profile postname={post} />
    </div>
  );
};

export default App;
