
import './App.css';
import { MuiNavbar } from './components/MuiNavbar';
import { Banner } from './components/banner';

function App() {
  return (

    <div className="App flex  justify-center flex-col">
      <MuiNavbar className='fixed top-0 z-10 '/>
       <Banner/>
       <div className='h-[100vh]  w-[100vw] backdrop-blur-md bg-black/30 -z-1	'>
           <div className='flex flex-row p-10 w-[98vw]'>
              <div className='h-[32vh] w-[15vw] bg-white rounded-lg m-5'>

              </div>
              <div className='h-[32vh] w-[15vw] bg-white rounded-lg  m-5'>

              </div>
              <div className='h-[32vh] w-[15vw] bg-white rounded-lg  m-5'>

              </div>
              <div className='h-[32vh] w-[15vw] font-SIL absolute right-0 text-8xl mr-32 mt-36 text-white '  > RACING</div>
           </div>
            
       </div>
    </div>
    
  );
}

export default App;
