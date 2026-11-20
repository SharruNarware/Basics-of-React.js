import React from 'react';

function handleClick(){
    console.log("hello!");
}

function handleMouseOver (){
    console.log("Bye!");
}

function handleDblClick (){
    console.log("you double clicked!");
}


function Button(){
    return (
        <>
         <button onClick={handleClick}>
            Click Me!
        </button>

        <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem porro delectus cupiditate modi suscipit consectetur veniam vitae, omnis ab facere, numquam, ullam unde dolorum. Vel dolor architecto dolore provident nihil!</p>

        <button onDoubleClick={handleDblClick}>double click</button>
        </>
       
    )
};

export default Button;
