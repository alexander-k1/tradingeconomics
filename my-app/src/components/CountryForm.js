import React from 'react'

function CountryForm({ list, choose1, choose2, country1, country2 }) {
  return (
    <div className='countryFormContainer'>
      <h2 className='title'>Compare countries by GDP per capita PPP</h2>
      <form className='countryForm'>
        <label htmlFor='country1'>Choose country 1</label>
        <select
          name='country1'
          id='country1'
          onChange={(e) => choose1(e.target.value)}
          value={country1}
        >
          {list.map((country) => {
            return (
              <option
                value={country}
                key={country}
                disabled={country2 === country}
                style={{ textTransform: 'capitalize' }}
              >
                {country}
              </option>
            )
          })}
        </select>
        <label htmlFor='country2'>Choose country 2</label>
        <select
          name='country2'
          id='country2'
          onChange={(e) => choose2(e.target.value)}
          value={country2}
        >
          {list.map((country) => {
            return (
              <option
                value={country}
                key={country}
                disabled={country1 === country}
              >
                {country}
              </option>
            )
          })}
        </select>
      </form>
    </div>
  )
}

export default CountryForm
