import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Blogs from './Blogs';
import SignUp from './SignUp';
import Footer from "./Footer"
import Register from './Register';
import Host from './Host';
import Propertyinfo from './Propertyinfo';

import Multan from './Multan';
import Ghantaghar from './Karachi/Ghantaghar';
import Rukan from '../../myapp/src/multan/Rukan';
import Shahshams from '../../myapp/src/multan/Shahshams';
import Fort from '../../myapp/src/multan/Fort';
import Maharban from '../../myapp/src/multan/Maharban';
import Garrison from '../../myapp/src/multan/Garrison';
import Haramgate from '../../myapp/src/multan/Haramgate';
import Momentum from '../../myapp/src/multan/Momentum';
import Shahaliakbar from '../../myapp/src/multan/Shahaliakbar';

import Karachi from './Karachi';
import Artsacademy from '../../myapp/src/Karachi/Artsacademy';
import Cemetery from '../../myapp/src/Karachi/Cemetery';
import Expressmarket from '../../myapp/src/Karachi/Expressmarket';
import Ferehall from '../../myapp/src/Karachi/Ferehall';
import Merewether from '../../myapp/src/Karachi/Merewether';
import Quaid from '../../myapp/src/Karachi/Quaid';
import Saints from '../../myapp/src/Karachi/Saints';
import Sea from '../../myapp/src/Karachi/Sea';
import Toobamosque from '../../myapp/src/Karachi/Toobamosque';

import Lahore from './Lahore';
import Badshahi from '../../myapp/src/Lahore/Badshahi';
import Armymus from '../../myapp/src/Lahore/Armymus';
import Dgate from '../../myapp/src/Lahore/Dgate';
import Fstreet from '../../myapp/src/Lahore/Fstreet';
import Iqbal from '../../myapp/src/Lahore/Iqbal';
import Minar from '../../myapp/src/Lahore/Minar';
import Qila from '../../myapp/src/Lahore/Qila';
import Wazir from '../../myapp/src/Lahore/Wazir';
import Wborder from '../../myapp/src/Lahore/Wborder';


import Gilgit from './Gilgit';
import Altit  from '../../myapp/src/Gilgit/Altit';
import Attabad from '../../myapp/src/Gilgit/Attabad';
import Baltit from '../../myapp/src/Gilgit/Baltit';
import Dpark from '../../myapp/src/Gilgit/Dpark';
import Hunza from '../../myapp/src/Gilgit/Hunza';
import Hill from '../../myapp/src/Gilgit/Hill';
import Karkaram from '../../myapp/src/Gilgit/Karkaram';
import Khunjran from '../../myapp/src/Gilgit/Khunjran';
import Parbat from '../../myapp/src/Gilgit/Parbat';



import Murree from './Murree';
import Chattarpark  from '../../myapp/src/Murree/Chattarpark';
import Dir from '../../myapp/src/Murree/Dir';
import Iqballibrary from '../../myapp/src/Murree/Iqballibrary';
import Kpoint from '../../myapp/src/Murree/Kpoint';
import Mall from '../../myapp/src/Murree/Mall';
import Nathiagali from '../../myapp/src/Murree/Nathiagali';
import Pindipoint from '../../myapp/src/Murree/Pindipoint';
import Sangrela from '../../myapp/src/Murree/Sangrela';
import Sozo from '../../myapp/src/Murree/Sozo';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/contactus' component={Contactus} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/register' component={Register} />
          <Route path='/Host' component={Host} />
          <Route path='/Propertyinfo' component={Propertyinfo} />
          
          <Route path='/multan' component={Multan} />
          <Route path='/ghantaghar' component={Ghantaghar} />
          <Route path='/rukan' component={Rukan} />
          <Route path='/shahshams' component={Shahshams} />
          <Route path='/fort' component={Fort} />
          <Route path='/maharban' component={Maharban} />
          <Route path='/garrison' component={Garrison} />
          <Route path='/haramgate' component={Haramgate} />
          <Route path='/momentum' component={Momentum} />
          <Route path='/shahaliakbar' component={Shahaliakbar} />
          
          <Route path='/karachi' component={Karachi} />
          <Route path='/artsacademy' component={Artsacademy} />
          <Route path='/cemetery' component={Cemetery} />
          <Route path='/expressmarket' component={Expressmarket} />
          <Route path='/ferehall' component={Ferehall} />
          <Route path='/merewether' component={Merewether} />
          <Route path='/quaid' component={Quaid} />
          <Route path='/saints' component={Saints} />
          <Route path='/sea' component={Sea} />
          <Route path='/toobamosque' component={Toobamosque} />

          <Route path='/lahore' component={Lahore} />
          <Route path='/badshahi' component={Badshahi} />
          <Route path='/armymuseum' component={Armymus} />
          <Route path='/delhigate' component={Dgate} />
          <Route path='/foodstreet' component={Fstreet} />
          <Route path='/iqbal' component={Iqbal} />
          <Route path='/shahiqila' component={Qila} />
          <Route path='/minar-e-pakistan' component={Minar} />
          <Route path='/wazirmosque' component={Wazir} />
          <Route path='/waghaborder' component={Wborder} />


          <Route path='/gilgit' component={Gilgit} />
          <Route path='/altit' component={Altit} />
          <Route path='/attabad' component={Attabad} />
          <Route path='/baltit' component={Baltit} />
          <Route path='/dpark' component={Dpark} />
          <Route path='/hunza' component={Hunza} />
          <Route path='/hill' component={Hill} />
          <Route path='/karkaram' component={Karkaram} />
          <Route path='/khunjran' component={Khunjran} />
          <Route path='/parbat' component={Parbat} />


          <Route path='/murree' component={Murree} />
          <Route path='/chattarpark' component={Chattarpark} />
          <Route path='/dir' component={Dir} />
          <Route path='/iqballibrary' component={Iqballibrary} />
          <Route path='/kpoint' component={Kpoint} />
          <Route path='/mall' component={Mall} />
          <Route path='/sangrela' component={Sangrela} />
          <Route path='/nathiagali' component={Nathiagali} />
          <Route path='/pindipoint' component={Pindipoint} />
          <Route path='/sozo' component={Sozo} />
        </Switch>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
        
      </Router>
    </>

    
  );

  
}

export default App;