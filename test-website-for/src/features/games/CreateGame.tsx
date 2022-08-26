import { useState } from 'react';
import { createGame } from "./gameSlice"

const CreateGame = () => {
    const [name, setName] = useState<string>("")
    const [address, setAddress] = useState<string>("")
    const [numberOfPeople, setNumberOfPeople] = useState<number>(0)
    const [date, setDate] = useState<string>("")
    const [time, setTime] = useState<string>("")
    const [fieldNumber, setFieldNumber] = useState<number>(0)


    const handleSubmit = () => {
        const data =
        {
            name: name,
            address: address,
            numberOfPeople: numberOfPeople,
            date: date,
            time: time,
            fieldNumber: fieldNumber,
        }
        createGame(data);
        console.log("success")
    }

    return (
        <>
            <div>
                <input type="text" placeholder="name" style={{ border: '1px solid red', backgroundColor: "blue" }} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="address" style={{ border: '1px solid red', backgroundColor: "blue" }} onChange={e => setAddress(e.target.value)} />
                <input type="number" placeholder="NumberOfPeople" style={{ border: '1px solid red', backgroundColor: "blue" }} onChange={e => setNumberOfPeople(parseInt(e.target.value))} />
                <input type="text" placeholder="date" style={{ border: '1px solid red', backgroundColor: "blue" }} onChange={e => setDate(e.target.value)} />
                <input type="text" placeholder="time" style={{ border: '1px solid red', backgroundColor: "blue" }} onChange={e => setTime(e.target.value)} />
                <input type="number" placeholder="FieldNumber" style={{ border: '1px solid red', backgroundColor: "blue" }} onChange={e => setFieldNumber(parseInt(e.target.value))} />
                <input type="submit" onClick={() => handleSubmit()} style={{ border: '1px solid red', backgroundColor: "blue" }} />
            </div>
        </>
    )
}

export default CreateGame