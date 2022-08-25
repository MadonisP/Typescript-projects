import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import type { AppDispatch } from '../app/store'

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const { user } = useSelector((state: any) => state.auth)
    const { goals, isLoading, isError, message } = useSelector(
        (state: any) => state.goals
    )

    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        dispatch(getGoals())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='heading'>
                <h1>Welcome {user && user.name}</h1>
                <p>Goals Dashboard</p>
            </section>

            <GoalForm />

            <section className='content'>
                {goals.length > 0 ? (
                    <div className='goals'>
                        {goals.map((goal: any) => (
                            <GoalItem key={goal._id} goal={goal} />
                        ))}
                    </div>
                ) : (
                    <h3>You have not set any goals</h3>
                )}
            </section>
        </>
    )
}

export default Dashboard