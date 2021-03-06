// This is the top-level component
// so we'll keep application state at this level.
// 1- Import the state hook!
import React from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
// 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)


export default function App() {
  // 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state

  // 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)

  return (
    <div className='app-friends container'>
      {/* 5- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}

      {/* 6- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
    </div>
  )
}
