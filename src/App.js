import Header from './components/header';
import Footer from './components/footer';
import Routes from './Routes';

function App() {
  return (
    <div className='min-h-screen flex flex-col relative'>
      <Header/>
      <div className='pt-16 pb-48'>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
