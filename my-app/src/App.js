import './App.css'
import { useReducer } from 'react'
import { useFetch } from './useFetch'
import { reducer } from './reducer'
import CountryForm from './components/CountryForm'
import { Visualization } from './components/Visualization'

const initialState = {
  country1: 'Mexico',
  country2: 'New Zealand',
  list: ['Mexico', 'New Zealand', 'Sweden', 'Thailand'],
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {
    data: data1,
    loading: loading1,
    error: error1,
  } = useFetch(state.country1)
  const {
    data: data2,
    loading: loading2,
    error: error2,
  } = useFetch(state.country2)

  const handleChoose1 = (country) => {
    dispatch({ type: 'COUNTRY_1', payload: country })
  }
  const handleChoose2 = (country) => {
    dispatch({ type: 'COUNTRY_2', payload: country })
  }

  return (
    <div className='App'>
      <CountryForm
        list={state.list}
        country1={state.country1}
        country2={state.country2}
        choose1={handleChoose1}
        choose2={handleChoose2}
      />
      {loading1 || loading2 ? <p>Loading...</p> : null}
      {error1 || error2 ? <p>Error</p> : null}
      {data1 && data2 ? (
        <Visualization country1={data1} country2={data2} />
      ) : null}
    </div>
  )
}

export default App
