import { useState, useEffect } from "react";


const HomePage = () => {

  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  const handleSearch =(e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=d04c31ea&type=movie&t=lost')
      .then(res => {
        if (!res.ok) {
          throw Error('some error message')
        }
        return res.json()
      })
      .then(data => {
        setMovies(data)
      })
      .catch(err => {
        setError(err.message)
      })
  }, [])
  return ( 
    <>
      <main className="w-full">
        <div className="w-contain mx-auto">
          
          <div className="w-full py-9 md:py-14">
            <label htmlFor="sach" className="text-black text-tin">Search</label>
            <input type="search" 
              id="sach"  
              className="w-full md:h-14 h-9"
              value={search}
              onChange={handleSearch}
             />
          </div>
          
        </div>
      </main>

      <section className="w-full overflow-auto">
        <div className="w-contain mx-auto">
          
          { error && <p>{error}</p>}
          <h1 className="py-2 text-black text-tin">{ movies.Genre }</h1>
          <div className="grid py-3 min-w-smMin md:min-w-min grid-cols-5 md:gap-x-14 gap-y-20 gap-x-6">
            {
              nums.map((num) => (
                <div className="bg-black text-white md:w-gridBox h-gridBox rounded-lg text-center flex justify-center items-center w-smBox" key={num}>
                  { error && <p>{error}</p>}
                  { movies.Title }
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
   );
}
 
export default HomePage;