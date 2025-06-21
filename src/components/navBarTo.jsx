import { Link } from 'react-router-dom';

function NavBarTo( { link } ) {
    return (
        <div className="game-name">
            <Link to={link}>
                <span>
                    CS2D Remake
                </span>
            </Link>
        </div>
    )
}

export default NavBarTo;