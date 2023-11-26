import './css/Header.css';
const Header = () => {
    return (
        <div className="Header">
            <div className="Header-logo">
                <label className='pre-logo'>calend</label>
                <label className='post-logo'>r</label>
            </div>
            <div className='Header-links'>
                <ul className='links'>
                    <li>feed</li>
                    <li>messages</li>
                    <li>calendar</li>
                    <li>settings</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;