import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Jobs from "./Component/Jobs";
import Home from "./Component/Home";
import NotFound from "./Component/notFound";
import ProtectedRoute from "./Component/protectedRoute";


const App =()=>(

  <Routes>

    <Route path="/" element ={ <ProtectedRoute Componant = {Home}/> }></Route>
    
    <Route path="/login" element ={ <Login/> }></Route>

    <Route path="/jobs" element ={ <ProtectedRoute Componant = {Jobs} /> }></Route>

    <Route path="/*" element ={ <NotFound /> }></Route>

  

    </Routes>
)




export default App;


