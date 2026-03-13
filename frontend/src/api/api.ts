const BASE_URL = 'http://127.0.0.1:8000/api'

export const fetchJSON = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}