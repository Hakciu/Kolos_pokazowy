import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DeletePersonForm = () => {
  const navigate = useNavigate()
  const [personId, setPersonId] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `https://localhost:7055/PersonDelete/${personId}`,
        {
          method: 'DELETE',
        }
      )

      if (response.ok) {
        navigate('/')
      }
    } catch (error) {
      console.error('Błąd podczas wysyłania żądania:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID osoby do usunięcia:
        <input
          type='text'
          value={personId}
          onChange={(e) => setPersonId(e.target.value)}
        />
      </label>
      <button type='submit'>Usuń osobę</button>
    </form>
  )
}

export default DeletePersonForm
