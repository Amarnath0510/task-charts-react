import React from 'react';

import './App.css';
import Chart from './component/Chart';
import Header from './component/header';
import Header1 from './component/header2';
import Header2 from './header3';
import Header3 from './header4';
import Sider from './sider';
import Ashirwad from './ashirwad';
import NotFound from './NotFound';
import{Route ,Switch} from "react-router-dom";
import Comp from './comp';
import Tg from './tg';
import Media from './media';
import AppBar from '@mui/material/AppBar';
import { useHistory } from 'react-router-dom';

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


function App() {
  const history =useHistory();
  return (
    <div className="App">
    <AppBar position="static">
    <Toolbar variant="dense">
    <Button  onClick={()=>history.push("/")} variant="text" color="inherit" >Ashirwad</Button>
    <Button 
    onClick={()=>history.push("/charts")} variant="text" color="inherit" >Market Analysis</Button>
    <Button onClick={()=>history.push("/tg")}
    variant="text" color="inherit">TG Analysis</Button>
   <Button 
     onClick={()=>history.push("/comp")}
     variant="text" color="inherit">Comp  Analysis</Button>
    <Button 
    onClick={()=>history.push("/media")}variant="text" color="inherit">Media Plan</Button>
    </Toolbar>
    </AppBar>
     
   


 

  <Switch>
  <Route exact path="/">
  <Ashirwad/>
  </Route>
  <Route path="/charts">
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
    </Route>
    
    <Route path="/comp">
    <Comp/>
    </Route>
    <Route path="/tg">
 <Tg/>
    </Route>
    <Route path="/media">
  <Media/>
    </Route>
    <Route path="**">
    <NotFound/>
    </Route>
    </Switch>
    </div>
 
  );
}

export default App;

