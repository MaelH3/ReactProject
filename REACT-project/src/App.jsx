import './App.css'

const Header=(props)=>{
  return (
  <header>
    <h1>{props.bienvenida}</h1>
    <h2>{props.titulo}</h2>
    <h3>{props.subtitulo}</h3>
    <p>Academia: {props.nombre} {props.partner}</p>
    <small>{props.fecha}</small>
  </header>
  )
}

const UserCard=(props)=>{
  return(
    <>
      <img src="https://rickandmortyapi.com/api/character/avatar/69.jpeg" alt="Imagen de Rick" />
      <h2>Academia {props.nombre} {props.partner}</h2>
    </>
  )
}

const TechList=()=>{
  const techs = ['HTML','CSS', 'JavaScript']
  const techFormatted = techs.map(tech=> <li key={tech}>{tech}</li>)
  return techFormatted
}

const Main = (props) =>(
  <main>
    <p>Prerequisitos para iniciar en REACT</p>
    <ul>
      <TechList/>
    </ul>
    <UserCard nombre={props.nombre} partner={props.partner}/>
  </main>
)

const Footer=()=>{
  return(
    <footer>
      <p>Copyright 2024</p>
    </footer>
  )
}

const buttonStyles={
  padding:'10px 20px',
  background: 'rgb(0,255,0)',
  border: 'none',
  borderRadius: 5
}

const Button=()=><button style={buttonStyles}>action</button>

const ObtenerInfoUsuario=(props)=>{
  return (
    <>
    <h1>
      {props.nombre}
      {props.apellido}
      
    </h1>
    <small>
      {props.pais}
    </small>
    </>
  )
}

function App() {
  let bienvenida='Bienvenidos a'
  let titulo='Iniciando con REACT'
  let subtitulo='REACT es una libreria de Javascript'
  let nombre= 'Evolutech'
  let partner= 'Cisco'
  let fecha= '8 Oct 2024'
  return (
  <>
  <Header bienvenida={bienvenida} titulo={titulo} subtitulo={subtitulo} nombre={nombre} partner={partner} fecha={fecha}/>
  <Main nombre={nombre} partner={partner}/>
  <Button/>
  <Footer/>
  <ObtenerInfoUsuario nombre='Juan' apellido='Ramirez' pais='Bolivia'/>
  </>
  )
}

export default App
