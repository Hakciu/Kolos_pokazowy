import React from 'react'

interface PersonItemProps {
  id: number
  firstName: string
  lastName: string
  dateOfBirth: Date
  origin: string
}

const PersonItem: React.FC<PersonItemProps> = ({
  id,
  firstName,
  lastName,
  dateOfBirth,
  origin,
}) => {
  const date = new Date(dateOfBirth)
  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{date.toLocaleDateString()}</td>
      <td>{origin}</td>
    </tr>
  )
}

export default PersonItem
