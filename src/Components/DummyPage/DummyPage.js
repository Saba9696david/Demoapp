import React, { useState } from 'react'

export default function DummyPage() {

  const [ data, setData ] = useState([])

  const datas = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then (response => response.json())
    .then (data => setData(data))
  }

  return (
    <div> 
        <h3>This is dummy page, routes to new page has simple API</h3>
        <button onClick={datas}>Fetch Data</button>
        {
            data.map(x => <p key={x.id}>{x.title}</p>)
        }
    </div>
  )
}
