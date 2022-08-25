import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import type { AppDispatch } from '../app/store'

function GoalItem(goal: any) {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem