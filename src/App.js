import React from 'react'
import './App.css'
import useSWR from 'swr'

function App() {
  const fetcher = url => fetch(url).then(r => r.json())
  const { data, error } = useSWR('https://covid19-brazil-api.now.sh/api/report/v1', fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      {data.data.map(item => (
        <div style={{marginBottom: 32}}>
          <div>UF: {item.uf}</div>
          <div>Estado: {item.state}</div>
          <div>Casos: {item.cases}</div>
          <div>Suspeitos: {item.suspects}</div>
          <div>Mortes: {item.deaths}</div>
        </div>
      ))}
    </div>
  )


}

export default App
