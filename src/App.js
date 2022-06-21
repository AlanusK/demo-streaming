import Header from './components/header';
import Footer from './components/footer';
import Series from './pages/series/Series';
import Movies from './pages/movies/Movies';

function App() {
  return (
    <div className='min-h-screen flex flex-col relative'>
      <Header/>
      <Series  /> 
      {/* <Movies  /> */}
      <Footer />
    </div>
  );
}

export default App;
