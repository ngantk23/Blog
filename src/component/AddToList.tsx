import React, { useState } from 'react';
import { IState } from '../App';
import styled from 'styled-components'

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<IState['people']>>
    people: IState['people']
}

const AddToListContainer = styled.div`
     display: flex;
    flex-direction: column;
    width: 30rem;
    margin: 5rem auto
`
const AddToListInput = styled.input`
    padding: 0.5rem;
    font-size: 1rem;
    margin: 0.3rem 0rem
`
const AddToListButton = styled.button`
    padding: 0.5rem;
    cursor: pointer;
    background-color: #0b5468;
    font-weight: 700;
    color: white;
    border: none
`

const AddToList: React.FC<IProps> = ({ setPeople, people }) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        note: '',
        img: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(e.target.name)
    }

    const handleClick = () => {
        // if(!input.name || !input.age){
        //     alert("Fill in!")
        //     return
        // } 

        // setPeople([
        //     ...people,
        //     {
        //         name: input.name,
        //         age: parseInt(input.age),
        //         img: input.img,
        //         note: input.note
        //     }
        // ])

        // setInput({
        //     name:'',
        //     age:'',
        //     img:'',
        //     note:''
        // })


    }



    return (
        <AddToListContainer>
            <AddToListInput
                type='text'
                onChange={handleChange}
                name="name"
                value={input.name}
                placeholder='Name'
            />
            <AddToListInput
                type="text"
                onChange={handleChange}
                name="age"
                value={input.age}
                placeholder="Age"
            />
            <AddToListInput
                type="text"
                onChange={handleChange}
                name="img"
                value={input.img}
                placeholder="Image Url"
            />
            <AddToListInput as='textarea'
                onChange={handleChange}
                name="note"
                value={input.note}
                placeholder="Note"
            />
            <AddToListButton
                onClick={() => {
                    if (!input.name || !input.age) {
                        alert("Fill in!")
                        return
                    }

                    setPeople([
                        ...people,
                        {
                            name: input.name,
                            age: parseInt(input.age),
                            img: input.img,
                            note: input.note
                        }
                    ])

                    setInput({
                        name: '',
                        age: '',
                        img: '',
                        note: ''
                    })
                }}
            >
                Add to List
            </AddToListButton>
        </AddToListContainer>
    );
};

export default AddToList;