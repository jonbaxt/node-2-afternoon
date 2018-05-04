import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Create from './Components/Create';
// import Update from './Components/Update';
// import Delete from './Components/Delete';


export default (
    <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/add' component={Create} />
        {/* <Route path='/update' component={Update} />
        <Route path='/delete' component={Delete} /> */}
    </Switch>
);