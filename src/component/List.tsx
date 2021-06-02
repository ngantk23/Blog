import React from 'react';
import { IState } from '../App';
import styled from 'styled-components'

interface IProps {
    people: IState['people']
}

const ListContainer = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    width: 50rem;
    margin: 0rem auto;
    border: 0.1rem solid rgba(0, 0, 0, 0.233);
    padding: 1rem;
    justify-content: space-between;
`
const ListHeader = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    h2{
        color: rgb(37, 36, 36)
    }
`
const ListImg = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    margin-right: 0.5rem;
`

const ListNote = styled.p`
    width: 30%;
    text-align: left;
    
`


const List: React.FC<IProps> = ({ people }) => {

    // const renderList = (): JSX.Element[] => {
    //     return people.map(person => {
    //         return (
    //             <ListContainer>
    //                 <ListHeader>
    //                     <ListImg src={person.img} />
    //                     <h2>{person.name}</h2>
    //                 </ListHeader>
    //                 <p>{person.age} years old</p>
    //                 <ListNote>{person.note}</ListNote>
    //             </ListContainer>
    //         )
    //     })
    // }

    return (
        <ul>
            {people.map(person => {
                return (
                    <ListContainer>
                        <ListHeader>
                            <ListImg src={person.img} />
                            <h2>{person.name}</h2>
                        </ListHeader>
                        <p>{person.age} years old</p>
                        <ListNote>{person.note}</ListNote>
                    </ListContainer>
                )
            })}
        </ul>
    );
};

export default List;