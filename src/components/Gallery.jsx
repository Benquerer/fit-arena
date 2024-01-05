import React from 'react'
import { Card } from '../components/Card'

export const Gallery = () => {
  return (
    <div>
      <Card name="Sup 1" info="TESTE"></Card>
      <Card name="Sup 2" info="TESTE"></Card>
      <Card name="Sup 3" info="TESTE" img="150"></Card>
      <Card img="550">></Card>
      <Card img="950">></Card>
    </div>
  )
}
