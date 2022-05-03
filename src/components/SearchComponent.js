import React, { useState, useEffect } from 'react'

const SearchComponent = () => {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("")

  const URL = 'https://jsonplaceholder.typicode.com/users'

  const showData = async () => {

    const response = await fetch(URL)
    const data = await response.json()
    setUsers(data)

  }
 
  //metodo de busqueda 
  const searcher = (e) =>{
    setSearch(e.target.value)
    console.log(e)
  }

  //metodo de filtrado
   let results = [] 
   if(!search){
    results = users
  }else{
    results = users.filter( (dato)=>
    dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
  } 
//segundo metodo de filtrado
/* const results = !search ? users : users.filter((dato)=> dato.nanme.toLowerCase().includes(search.tolocaleLowerCase()))
 */  useEffect(() => {
    showData()
  }, [])

  return (
    <div className=''>

      <input value={search} onChange={searcher} type="text" placeholder="Serach" className='form-control' />

      <table className='table table-striped tale-hover mt-5 shadow-lg'>
        <thead>
          <tr className='bg-curso text-white'>
            <th>NAME</th>
            <th>USER NAME</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SearchComponent;