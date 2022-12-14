import axios from 'axios';
import { fetchUser } from './features/questionSlice';
import { useAppDispatch, useAppSelector } from './store/store';

function App() {
  const question = useAppSelector((state) => state.questions);

  const dispatch = useAppDispatch();

  getExamInfos();


  const result = Object.keys(question).map((key) => {
    return { [key]: question[key as keyof typeof question] };
  });

  console.log(result[0])
  console.log(question)




  return (
    <div>
      <button onClick={() => dispatch(fetchUser())}>Fetch User</button>
      {question.loading && "Loading..."}
      {question.error && question.error}
      <div>
        {result && <div>
        </div>}
      </div>
    </div>
  );
}

export default App;



















const getExamInfos = async () => {
  const { data } = await axios.get(`http://localhost:5000/examquestions/`);
  console.log(data)
}