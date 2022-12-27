import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // When you do a loop, give a unique key, 
    // so when an element gets deleted, 
    // React will know which one is deleted so it won't have to change the entire DOM
    // We want to minimize the amount of work to the DOM
    return (
    <div>
        {
            robots.map((robot, i) => {
                return (
                    <Card 
                        key={i} 
                        id={robot.id} 
                        name={robot.name} 
                        email={robot.email} 
                    />
                );
            })
        }
    </div>
    );
}

export default CardList;