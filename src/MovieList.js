import Filter from "./Filter"
import { useState } from "react"
import Movies from './Movies'
import MovieCard from './MovieCard'
import { Button } from "react-bootstrap"

const MovieList = () => {

    const [movies, setMovies] = useState([...Movies])
    const [moviescy, setMoviescy] = useState([...movies])



    const FormAdd = () => {
        /// les state pour les input
        const [inputtitle, setInptitle] = useState("")
        const [inputurl, setInpurl] = useState("")
        const [inputdesc, setInpdesc] = useState("")
        const [inputrate, setInprate] = useState("")

        const addMovie = (e) => {  // ajout de new film
            e.preventDefault()
            let mm = [...movies]

            if (inputtitle !== "" && inputurl !== "" && inputdesc !== "" && inputrate !== "") {

                let m = {
                    title: inputtitle,
                    posterURL: inputurl,
                    description: inputdesc,
                    rating: inputrate + ""
                }

                mm.push(m)

                setMovies([...mm])
                setMoviescy([...mm])
            } else {
                alert("Veuillez remplir les champs SVP.")
            }
        }

        const onchtitle = (e) => {
            setInptitle(e.target.value)
        }
        const onchurl = (e) => {
            setInpurl(e.target.value)

        }
        const onchdesc = (e) => {
            setInpdesc(e.target.value)

        }
        const onchrate = (e) => {
            setInprate(e.target.value)

        }

        return <div className='form-add'>
            <form onSubmit={addMovie} className='add-movie'>
                <h2>Ajouter un nouveau film</h2>
                <input type="text" placeholder='le titre du film' onChange={onchtitle} value={inputtitle} />
                <input type="text" placeholder='url du poster' onChange={onchurl} value={inputurl} name="" id="" />
                <input type="text" placeholder='description ...' onChange={onchdesc} value={inputdesc} name="" id="" />
                <input type="number" max={10} min={1} placeholder='rating' onChange={onchrate} value={inputrate} name="" id="" />
                <Button type="submit"  className="primary" >Ajout</Button>
            </form>
        </div>
    }

    return (
        <div className='body'>

            <FormAdd />
            <div className='main'>
                <Filter movies={movies} setMoviescy={setMoviescy} />
                <div className="all-movies" >
                    {moviescy.map((f) => <div key={Date.now() + f.title + Math.random()}> <MovieCard title={f.title} posterURL={f.posterURL} description={f.description.substring(0,120)+"..."}  rating={f.rating} /></div>)}
                </div>
            </div>
        </div>
    );

}


export default MovieList