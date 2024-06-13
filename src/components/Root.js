import { BrowserRouter,Routes,Route } from "react-router-dom"
import About from "./About"
import Dashboard from "./Dashboard"
import FAQs from "./FAQs"
const Root=()=>{
    return(
    <BrowserRouter>
    <Routes>
        <Route  exact path='/' element={<Dashboard/>}/>
        <Route exact path='/faqs' element={<FAQs/>}/>
        <Route exact path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    )
}
export default Root