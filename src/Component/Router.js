import {
    BrowserRouter, Route
} from "react-router-dom";

import Home from './Home';
import Filter from './Filter';





function Router() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
            <Route path="/filter" component={Filter}></Route>

        </BrowserRouter >
    )
}
export default Router