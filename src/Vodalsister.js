
import React from 'react';

const Vodalsister = () => {

  
    let Persons = [{
        id: 1,
        name:'vija',
        age: 40
    },
    {
        id: 2,
        name:'ijay',
        age: 40
    },
    {
        id: 3,
        name:'vjay',
        age: 40
    },
    {
        id: 4,
        name:'viay',
        age: 40
    },

]
    

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Persons.map((person)=>{
                            return(
                                <tr><td>{person.id}</td><td>{person.name}</td><td>{person.age}</td></tr>
                            )
                        })
                    }
                </tbody>
            </table>
          
          
        </div>
    )
}

export default Vodalsister;