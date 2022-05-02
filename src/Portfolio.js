import { NavBar } from './components/navBar/NavBar';
import { Outlet } from 'react-router-dom';

function Portfolio() {
    return (
       <div>
           <NavBar />
           <div>
                <Outlet />
           </div>
       </div>
    );
}

export default Portfolio;
