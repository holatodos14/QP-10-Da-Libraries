
import { useState, useEffect } from 'react'

export const useUsers = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api?results=10')
      const data = await response.json()
      setUsers(data.results)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  return {users}
};