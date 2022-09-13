import { useDispatch } from "react-redux";
import { useState } from 'react';

const ReduxTest = () => {
    const [examId, setExamId] = useState("");
    const [questionTitle, setQuestionTitle] = useState("");
    const [options, setOptions] = useState(
        {
            options: {
                option: "",
                isCorrect: false,
            }
        }
    );

    const dispatch = useDispatch();

    const handleOptionChange = (e) => {
        setOptions((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }


    return (
        <div>
            <h1>New Question</h1>
            <form >
                <div>
                    <label>examId</label>
                    <input
                        name="examId"
                        type="text"
                        placeholder="df21ad548a65sd2a13ad56"
                    />
                </div>
                <div>
                    <label>questionTitle</label>
                    <input
                        name="qTitle"
                        type="text"
                        placeholder="bir elimizde kaç parmak var"
                    />
                </div>
                <div>
                    <label>Option 1</label>
                    <input
                        name="o1"
                        type="text"
                        placeholder="1"
                    />
                </div>
                <div>
                    <label>Option 2</label>
                    <input
                        name="o2"
                        type="text"
                        placeholder="2"
                    />
                </div>
                <div>
                    <label>Option 3</label>
                    <input
                        name="o3"
                        type="text"
                        placeholder="3"
                    />
                </div>
                <div>
                    <label>Stock</label>
                    <select name="inStock" >
                        <option value="true">Correct Answer</option>
                        <option value="false">Wrong Answer</option>
                    </select>
                </div>
                <button >
                    Create
                </button>
            </form>
        </div>
    );

}

export default ReduxTest