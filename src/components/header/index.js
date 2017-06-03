import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

    static path = '/';

    render() {
        return (
            <div>
                <nav className='navbar navbar-default'>
                    <div className='container-fluid'>
                        <div className='navbar-header'>
                            <ul className='nav navbar-nav'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}
