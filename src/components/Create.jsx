import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { firestore } from '../firebase/config';
import { toast } from 'react-toastify';

function Create() {
    const [title, setTitle] = useState("")
    const [metod, setMetod] = useState("")
    const [time, setTime] = useState()
    const [ingridient, setIngridient] = useState("")
    const [ingridients, setIngridients] = useState([])



    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault()
        const obj = await {
            title,
            ingredients: ingridients,
            method: metod,
            cookingTime: time,
        };
        firestore.collection("cooking").add(obj)
        toast.success("Ma'lumot qo'shildi !")
        navigate("/")
    }


    return (
        <div className="form">
            <div className="container">
                <h1>Create</h1>
                <form onSubmit={handleSubmit}>
                    <input required onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" placeholder='Name' />
                    <div className="Add">
                        <input onChange={(e) => {
                            setIngridient(e.target.value)
                        }} value={ingridient} type="text" placeholder='Ingrediend' />
                        <button onClick={() => {
                            setIngridients([...ingridients, ingridient])
                            setIngridient("")
                        }} type='button'>Add</button>
                    </div>
                    <div className="resipe">
                        Ingredined : {ingridients.map((item) => {
                            return <span>{item}, </span>
                        })}
                    </div>
                    <textarea required onChange={((e) => {
                        setMetod(e.target.value)
                    })} placeholder='Info'></textarea>
                    <input required onChange={((e) => {
                        setTime(e.target.value)
                    })} placeholder='Time' type="number" />
                    <button>Submit</button>
                </form>
            </div >
        </div >
    )
}

export default Create