// import './App.css'
import { useState } from 'react'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false
  }
  ,
  {
    userName: 'xemisan',
    name: 'Xemi Sánchez',
    isFollowing: false
  }
  ,
  {
    userName: 'esolanom',
    name: 'Doctor Solano',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className="App">
      {
        users.map( ({ userName, name, isFollowing }) => (
          <TwitterFollowCard 
            key={userName} 
            userName={userName} 
            initialIsFollowing={isFollowing}>
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}