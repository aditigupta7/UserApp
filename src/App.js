import React, {useState, useEffect} from 'react';
import Route from './navigation/route';
import Spalsh from './screens/SplashScreen';

const App = () =>{

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(function(){
      setLoading(false);
    },2000);
  },[])

  if(loading){
    return(
      <Spalsh/>
    )
  }
  else{
    return(
      <Route/>
    )  
  }
}

export default App;