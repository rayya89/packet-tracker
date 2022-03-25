import React from 'react'

export default function AppData({ last_updated }) {

    const lastUpdate=new Date(last_updated).toString();

  return (
    <article>
        <h2>App Data</h2>
        <h3>last update</h3>
      <p>{lastUpdate}</p>
    </article>
  )
}
