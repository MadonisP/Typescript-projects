import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addQuestion } from '../features/apiCalls'

const ReduxTest = () => {
    const [examId, setExamId] = useState("");
    const [questionTitle, setQuestionTitle] = useState("");
    const [qtrue, setQTrue] = useState("");
    const [qfalse, setQFalse] = useState("");

    const dispatch = useDispatch();



    const handleTrue = (e) => {
        setQTrue(e.target.value)
    }
    const handleFalse = (e) => {
        setQFalse(e.target.value)
    }
    const handleId = (e) => {
        setExamId(e.target.value)
    }

    const handleTitle = (e) => {
        setQuestionTitle(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        const quizRequest = { questionTitle: questionTitle, examId: examId, qtrue: qtrue, qfalse: qfalse }
        console.log(quizRequest)
        addQuestion(quizRequest, dispatch);
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
                        onChange={handleId}
                    />
                </div>
                <div>
                    <label>questionTitle</label>
                    <input
                        name="qTitle"
                        type="text"
                        placeholder="bir elimizde kaç parmak var"
                        onChange={handleTitle}
                    />
                </div>
                <div>
                    <label>True</label>
                    <input
                        name="True"
                        type="text"
                        placeholder="1"
                        onChange={handleTrue}
                    />
                </div>
                <div>
                    <label>False</label>
                    <input
                        name="False"
                        type="text"
                        placeholder="2"
                        onChange={handleFalse}
                    />
                </div>
                <button onClick={handleClick}>
                    Create
                </button>
            </form>
        </div>
    );

}

export default ReduxTest