import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditPersonForm = () => {
  const navigate = useNavigate()

  const [person, setPerson] = useState({
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    origin: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch(
      `https://localhost:7055/PersonUpdate/${person.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...person,
          dateOfBirth: new Date(person.dateOfBirth),
        }),
      }
    )

    if (response.ok) {
      navigate('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type='text'
          value={person.id}
          onChange={(e) => setPerson({ ...person, id: e.target.value })}
        />
      </label>
      <label>
        Imię:
        <input
          type='text'
          value={person.firstName}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
      </label>
      <label>
        Nazwisko:
        <input
          type='text'
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
      </label>
      <label>
        Data urodzenia:
        <input
          type='date'
          value={person.dateOfBirth.split('T')[0]} // Formatowanie daty do formatu yyyy-mm-dd
          onChange={(e) =>
            setPerson({ ...person, dateOfBirth: e.target.value })
          }
        />
      </label>
      <label>
        Pochodzenie:
        <input
          type='text'
          value={person.origin}
          onChange={(e) => setPerson({ ...person, origin: e.target.value })}
        />
      </label>
      <button type='submit'>Aktualizuj osobę</button>
    </form>
  )
}

export default EditPersonForm
