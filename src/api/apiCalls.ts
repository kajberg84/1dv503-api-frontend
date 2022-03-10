import axios from 'axios'

export async function getHouseData(house: string) {
  const result = await axios.get(`http://localhost:5000/houses/${house}/characters`)
  return result
}

export async function getTotalStudents() {
  const result = await axios.get(`http://localhost:5000/houses/total-students`)
  return result
}

export async function getHouseHeads() {
  const result = await axios.get(`http://localhost:5000/houses/heads`)
  return result
}
export async function getStudents() {
  const result = await axios.get(`http://localhost:5000/characters/students`)
  return result
}
export async function getStaff() {
  const result = await axios.get(`http://localhost:5000/characters/staff`)
  return result
}
export async function getOthers() {
  const result = await axios.get(`http://localhost:5000/characters/others`)
  return result
}

export async function searchByName(name: string) {
  const result = await axios.get(`http://localhost:5000/characters/${name}`)
  return result
}
