import React, { useState } from 'react'

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const ChangeEtat = () => {
        setIsOpen(!isOpen); 

    return (
        <div>
            {isOpen && ( // Render the menu only if isOpen is true
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            )}
            <button onClick={ChangeEtat}> {isOpen ? "Close Menu" : "Open Menu"}</button> {}
        </div>
    )
}
}
export default Menu


