/** @format */

// import React from 'react';
// // import { BrowserRouter as Router, Route } from 'react-router-dom';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// import FooterComponent from './SellerComponent/FooterComponent';
// import HeaderComponent from './SellerComponent/HeaderComponent';
// import ListSellerComponent from './SellerComponent/ListSellerComponent';
// import CreateSellerComponent from './SellerComponent/CreateSellerComponent';
// import UpdateSellerComponent from './SellerComponent/UpdateSellerComponent';
// import ViewSellerComponent from './SellerComponent/ViewSellerComponent';

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <HeaderComponent />
//         <div className="container">
//          <Switch>
//             <Route path="/" exact component={ListSellerComponent}></Route>
//             <Route path="/seller" component={ListSellerComponent}></Route>
//             <Route
//               path="/add-seller/:sellerId"
//               component={CreateSellerComponent}
//             ></Route>
//             <Route
//               path="/view-seller/:sellerId"
//               component={ViewSellerComponent}
//             ></Route>
//             <Route
//               path="/update-seller/:sellerId"
//               component={UpdateSellerComponent}
//             ></Route>
//        </Switch>
//         </div>
//         <FooterComponent />
//       </Router>
//     </div>
//   );
// };

// export default App;

import Home from "./Home";
import CreateSellerComponent from "./SellerComponent/CreateSellerComponent";
import ListSellerComponent from "./SellerComponent/ListSellerComponent";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar className='nav' />
        <Routes>
          {" "}
          <Route path='/' element={<Home />} />{" "}
          <Route
            path='/CreateSellerComponent'
            element={<CreateSellerComponent />}
          />{" "}
          <Route
            path='/ListSellerComponent'
            element={<ListSellerComponent />}
          />{" "}
          <Route path='/insert' element={<CreateSellerComponent />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import FooterComponent from './SellerComponent/FooterComponent';
// import HeaderComponent from './SellerComponent/HeaderComponent';
// import ListSellerComponent from './SellerComponent/ListSellerComponent';
// import CreateSellerComponent from './SellerComponent/CreateSellerComponent';
// import UpdateSellerComponent from './SellerComponent/UpdateSellerComponent';
// import ViewSellerComponent from './SellerComponent/ViewSellerComponent';

// const App = (props) => {
//   return (
//     <div>
//       <Router>
//         <HeaderComponent />
//         <div className="container">
//           <Routes>
//           <Route path="/" element={<ListSellerComponent history={props.history} />} />
//             <Route path="/seller" element={<ListSellerComponent />} />
//             <Route path="/add-seller/:sellerId" element={<CreateSellerComponent />} />
//             <Route path="/view-seller/:sellerId" element={<ViewSellerComponent />} />
//             <Route path="/update-seller/:sellerId" element={<UpdateSellerComponent />} />
//           </Routes>
//         </div>
//         <FooterComponent />
//       </Router>
//     </div>
//   );
// };

// export default App;
