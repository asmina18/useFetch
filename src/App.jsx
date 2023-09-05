import './App.css'
import { useFetch } from './components/useFech'

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos/"
  const {data} = useFetch(url)// Bruger useFetch-hooket til at hente data fra API'en
  
  return (
    <>
    <h1>*useFetch hooks</h1>
    
      {data &&
      data?.map((item) => {
        return <p key={item.id}>{item.title}</p>   //  Her mapper vi data og viser titlen for hvert element
      })}
    </>
  )
}

export default App