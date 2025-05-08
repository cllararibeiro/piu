import React from 'react';

function Instagram() {
    const label = "Instagram";

    function handleClick() {
        window.open("https://instagram.com/cllararibeiro", "_blank"); 
    }

    return (
        <>
            <div>
                <button onClick={handleClick}>{label}</button>
            </div>
        </>
    );
}

export default Instagram;
