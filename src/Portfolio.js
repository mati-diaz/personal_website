import { NavBar } from './components/navBar/NavBar';
import { Outlet } from 'react-router-dom';

function Portfolio() {
    return (
       <div>
           <NavBar />
           <Outlet />
       </div>
    );
}

export default Portfolio;
