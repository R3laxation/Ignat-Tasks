import React from "react"
import {HashRouter} from "react-router-dom"
import Header from "./Header"
import Paths from "./Routes"


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <Header/>
                <Paths/>
            </HashRouter>
        </div>
    )
}

export default HW5
