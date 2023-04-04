import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hare Krishan Prabhu Ji</h1>
    //     </div>
    // )

    return React.createElement( 
        'div', 
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hare Krishan Prabhu Ji')
    )
}

export default Hello