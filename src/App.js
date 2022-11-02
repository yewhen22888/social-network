import './App.css';

const App = () => {
  return (
    <div className='app-wraper'>
      <header className='header'>
        <img src='https://graphicriver.img.customer.envatousercontent.com/files/383753376/Letter+A+Logo+-+Anglex_1.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1322843b6a4dc44c34d61c195d61ee3e' />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Video</a>
        </div>
        <div>
          <a>Message</a>
        </div>
        <div>
          <a>Option</a>
        </div>
      </nav>
      <div className='content'>
        <img src='https://wallpaperaccess.com/full/246822.jpg' />
      </div>
    </div>
  );
};

export default App;
