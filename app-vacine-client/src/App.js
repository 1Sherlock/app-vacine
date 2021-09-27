import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Laboratory from "./pages/Laboratory";
import Sampling from "./pages/Sampling";
import AddResult from "./pages/AddResult";
import AddLab from "./pages/AddLab";
import AddLocation from "./pages/AddLocation";
import ShowResult from "./pages/ShowResult";
import {ToastContainer} from 'react-toastify';
import ViewResult from "./pages/ViewResult";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/dashboard' exact component={Dashboard}/>
                {/*<Route path='/laboratory' exact component={Laboratory}/>*/}
                {/*<Route path='/sampling' exact component={Sampling}/>*/}
                <Route path='/addresult' exact component={AddResult}/>
                    {/*<Route path='/addlab' exact component={AddLab}/>*/}
                {/*<Route path='/addloc' exact component={AddLocation}/>*/}
                <Route path='/testResult/:id' exact component={ShowResult}/>
                <Route path='/viewResult/:id' exact component={ViewResult}/>
            </Switch>

            <ToastContainer/>
        </BrowserRouter>
    );
}

export default App;
