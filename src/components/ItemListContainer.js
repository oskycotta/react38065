import React from 'react'
import './ItemListContainer.css'

export default function ItemListContainer(props) {
  return (
    <div>
        <h3 className='greeting'>{props.greeting}</h3>
    </div>
  )
}
