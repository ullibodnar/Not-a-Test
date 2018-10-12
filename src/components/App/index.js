import { mapIndexed } from 'ramda-adjunct'
import React from 'react'

export default function App({ handleOnSubmit, latestUser, users }) {
  return (
    <div className="App">
      {/* add welcome message */}
      <p>Add your name below to register!</p>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="user" />
        <input type="submit" value="Register user" />
      </form>
      <p>See the list below for everyone else who has registered.</p>
      <ul>{/* add the list of users */}</ul>
    </div>
  )
}
