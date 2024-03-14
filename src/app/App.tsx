import './style/index.scss';
import AppRouter from "./provider/router/AppRouter.tsx";
import {Navbar} from "../widgets/Navbar";


function App() {

    return (
        <div className={`app light`}>
            <Navbar/>
            <AppRouter/>

        </div>
    )
}

export default App
