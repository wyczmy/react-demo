import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import store from './model/store'
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader/root';
import AddItem from './component/addItem';
import PageItem from './container/pageitem';
function AppCont(){
    return <Provider store={store}>
            <Router>
                <Route path="/" component={AddItem}></Route>

                <Link to="/tab1/1">tab1</Link>
                <Link to="/tab2/2">tab2</Link>
                <Link to="/tab3/3">tab3</Link>
                <Route path="/tab1/:num" component={PageItem}></Route>
                <Route path="/tab2/:num" component={PageItem}></Route>
                <Route path="/tab3/:num" component={PageItem}></Route>
            </Router>
        </Provider>
}
const App = hot(() =>{
    return <AppCont />
})
ReactDOM.render(
    <App />,
    document.getElementById('app')
)










