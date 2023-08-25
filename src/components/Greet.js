import React from 'react'

const Greet = () => {
    return React.createElement( 'div', { className: 'greetClass', id:  'greetID' },
    React.createElement( 'h1', {style: {backgroundColor: "black", color: "white"}}, 'Sherdil' )

    )
}

export default Greet