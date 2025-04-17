import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Changed here
import Navbar from "./Component/Navbar";
import News from "./Component/News";
// import About from "./Component/About";
import LoadingBar from "react-top-loading-bar";



const  App = () => {
  
  const pageSize = 8;
  const [progress, setProgress] = useState(0);
  
  
  // setProgress = (newProgress) => {
  //   if (state.progress !== newProgress) {
  //     setState({ progress: newProgress });
  //   }
  // }

    
    return (
      <>
      <Router>

      <LoadingBar
      height={2}
        color="#f11946"
        progress={progress}
        
      />
        <Navbar/>
        
        {/* <News /> */}
        {/* <About/> */}

        <Routes>
          <Route path="/" element={<News setProgress={setProgress} country='us' pageSize={pageSize} category='general' />} />
          <Route path="/business" element={<News setProgress={setProgress} country='us' pageSize={pageSize} category='business' />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} country='us' pageSize={pageSize} category='entertainment' />} />
          <Route path="/health" element={<News setProgress={setProgress} country='us' pageSize={pageSize} category='health' />} />
          <Route path="/science" element={<News setProgress={setProgress} country='us' pageSize={pageSize} category='science' />} />
          <Route path="/sports" element={<News setProgress={setProgress} country='us' pageSize={pageSize} category='sports' />} />
          <Route path="/technology" element={<News setProgress={setProgress} country='us' pageSize={pageSize} category='technology' />} />

          {/* <Route path="/about" element={<About/>}/>health */}
        </Routes>
      </Router>
      </>
    );
  
}

export default App;
