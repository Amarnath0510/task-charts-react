
import './App.css';
import Chart from './component/Chart';
import Header from './component/header';
import Header1 from './component/header2';
import Header2 from './header3';
import Header3 from './header4';
import Sider from './sider';


function App() {
  return (
    <div className="App">
    
  
    
  
   <div className='chart'>
   <div className='headers'>
   <Header/>
   <Header1 />
   <Header2/>
   <Header3/>
   
   
   </div>
    
    <Chart />
  
   </div>
    <Sider/>
  
 
    </div>
 
  );
}

export default App;

