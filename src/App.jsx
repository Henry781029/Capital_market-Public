import React, {Suspense} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

const App = () => {
    return (
        <Router>
            <Suspense fallback={<p>loading...</p>}>
                <Switch>
                    
                </Switch>
            </Suspense>   
        </Router>
    )
}

export default App
