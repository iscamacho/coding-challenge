import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { loguot } from '../../store/slices/authSlice';


export const Navbar = () => {
    const {isLogged} = useSelector(state =>state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

const onLogout = ()=> {
   
    dispatch(loguot());
    navigate('/login', {
        replace: true
    });
}

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand m-1" 
                to="/"
            >
                Dashboard
            </Link>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end m-1">
                <ul className="navbar-nav ml-auto">
                   
                    <span className="nav-item nav-link text-primary">
                       
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Cerrar sesión
                    </button>

                </ul>
            </div>
        </nav>
    )
}