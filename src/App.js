import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route, index)=>{
                    return  <Route 
                                key={index}
                                path ={route.path}
                                exact = {route.exact}
                                component = {route.main}
                                
                            />
                })}
            </Switch>            
        </Router>
    );
}

export default App;
