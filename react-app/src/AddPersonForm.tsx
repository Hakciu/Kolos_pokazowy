import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Person {
  firstName: string
  lastName: string
  dateOfBirth: Date
  origin: string
}

const AddPersonForm: React.FC = () => {
  const [person, setPerson] = useState<Person>({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    origin: '',
  })

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('https://localhost:7055/PersonAdd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    })

    if (response.ok) {
      navigate('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={person.firstName}
        onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        placeholder='Imię'
      />
      <input
        type='text'
        value={person.lastName}
        onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        placeholder='Nazwisko'
      />
      <input
        type='date'
        value={person.dateOfBirth.toISOString().split('T')[0]}
        onChange={(e) =>
          setPerson({ ...person, dateOfBirth: new Date(e.target.value) })
        }
      />
      <input
        type='text'
        value={person.origin}
        onChange={(e) => setPerson({ ...person, origin: e.target.value })}
        placeholder='Pochodzenie'
      />
      <button type='submit'>Dodaj</button>
    </form>
  )
}

export default AddPersonForm
