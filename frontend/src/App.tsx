import React from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home'
import { AuthApi } from './services/api/authApi';
import { setUserData } from "./store/ducks/user/actions/actionCreators";
import { selectIsAuth } from "./store/ducks/user/selectors";


function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    const checkAuth = async () => {
        try {
            const {data} = await AuthApi.getMe();
            dispatch(setUserData(data));
            //history.replace('/home');
        } catch (error) {

        }
    }

    React.useEffect(() => {
        checkAuth();
    }, []);


    React.useEffect(() => {
        if (isAuth) {
            history.push('/home');
        }
    }, [isAuth]);


    return (
        <div className="App">
            <Switch>
                <Route path='/signin' component={SignIn}/>
                <Route path='/' component={Home}/>
            </Switch>
        </div>
    );
}

export default App;
