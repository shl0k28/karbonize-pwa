import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faConciergeBell, faUserAlt, faWallet } from '@fortawesome/free-solid-svg-icons'

const Topbar: React.FC = () => {

    const name = 'Elon'
    return(
        <nav className="flex text-green-400 justify-between items-center px-8 py-4">
            <div className="flex items-center space-x-4 rounded-full bg-gray-900 py-2 px-4">
                <FontAwesomeIcon 
                    icon={faWallet}
                    className="text-2xl"
                />
                <p className="text-gray-100 font-mono">15</p>
            </div>
            <div className="flex items-center space-x-4 rounded-full bg-gray-900 py-2 px-4">
                <FontAwesomeIcon 
                    icon={faBell}
                    className="text-2xl"
                />
            </div>
        </nav>
    )
}

export default Topbar