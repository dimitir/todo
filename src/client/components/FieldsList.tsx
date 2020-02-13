import React from 'react';


const FieldsList = () => {

    function greeter(person: string) {
        return "Hello, " + person;
    }
    const text: string = 'keey';

    return (

        <>
            <p>{text}</p>
            {greeter('kk')}
        </>
    )
}

export default FieldsList;