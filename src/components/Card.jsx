import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase/config'
import { MdDelete } from "react-icons/md";
import { VscBracketError } from "react-icons/vsc";
import { toast } from 'react-toastify';


function Card({ setLoader }) {
    const [cook, setCook] = useState([])
    const [impte, setImpte] = useState(true)
    useEffect(() => {
        setLoader(true)
        firestore.collection("cooking").onSnapshot((data) => {
            var result = []
            if (!data.empty) {
                data.docs.forEach((item) => {
                    result.push({ ...item.data(), id: item.id });
                })
                setCook(result);
                setLoader(false)
                setImpte(false)
            }
            else {
                setLoader(false)
                setImpte(true)
            }
        })
    }, [])
    const deleteEl = (id) => {
        firestore.collection("cooking").doc(id).delete()
        toast.error("Ma'lumot o'chirildi !")
    }
    return (
        <>
            {!impte ? cook.map((item, index) => {
                return <div key={index} className='card'>
                    <MdDelete onClick={() => {
                        deleteEl(item.id)
                    }} className='trash' />
                    <h3><b>{item.title}</b></h3>
                    <h4><b>Cooking Time : </b>{item.cookingTime} minutes</h4>
                    <h4><b>Resipe :</b> {item.ingredients.map((item, index) => {
                        return <span key={index}>{item} , </span>
                    })}</h4>
                    <h4><b>Method :</b> {item.method}</h4>
                    <button>MORE</button>
                </div>
            }) : <h1>Ma'lumotlar o'chirib tashlandi !</h1>}
        </>
    )
}

export default Card