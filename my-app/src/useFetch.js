import { useEffect, useState } from 'react'
const urlFirstPart = 'https://api.tradingeconomics.com/historical/country/'
const urlLastPart =
  '/indicator/gdp per capita ppp?c=6he3sjjwingq3u7:x9uyx90ulfqd514&f=json'

export const useFetch = (country) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    async function getData(url) {
      setLoading(true)
      setError(false)
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Error')
        const data = await response.json()
        setData(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }
    if (country) {
      getData(urlFirstPart + country.toLowerCase() + urlLastPart)
    }
  }, [country])

  return { data, loading, error }
}
