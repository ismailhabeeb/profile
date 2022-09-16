import { useState } from 'react'
import reactLogo from './assets/react.svg'
import reactLog from './assets/240_F_217131611_yZ1uedmyiiLAH82qv3V3A6ioWPXCOdxC.jpg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [file, setCount] = useState(reactLogo)
  const [image, setImage] = useState([])
  const [data, setData] = useState([])
  const [reader, setReader] = useState([])

  function previewImg() {
    let file = document.getElementById('file').files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setCount(reader.result)
    }
    reader.onerror = (err) => {
      console.log("error has occured")
    }
  }
  function me() {
    document.getElementById('file').click()
  }
  function add() {
    document.querySelector(".pp").hidden = false;

  }


  return (
    <div className="App">

      <nav className="navbar  navbar-dark bg-dark ">
        <div className=" navbar " id="mynavbar">
          <div className='rounded-circle '></div>

          <li className="nav-item dropdown  navba">
            <div className='rounded-circle '></div>
            <div className='rounded-circle '></div>
            <div className='rounded-circle  '></div>
            <img className=" nav-link  rounded-circle" data-bs-toggle="dropdown" src={file} id="img" alt="" />

            <ul className="dropdown-menu ">
              <li onClick={add} className='h4'><a className="rounded-circle " href="#">😂</a>Habeeb Ismail</li>
              <li><a className="dropdown-item" href="#">Another link</a></li>
              <li><a className="dropdown-item" href="#">A third link</a></li>
            </ul>
          </li>

        </div>
      </nav>

      <div className='pp' hidden>

        <input type="file" id="file" onChange={previewImg} hidden />

        <div className="card jj " >
          <img className=" card-img-top" src={reactLog} alt="Card image" />

          <div className="card-img-overlay ">
            <img className="card-img rounded-circle card-img-top" src={file} id="img" alt="" />

            <div className="card-img-overla">
              <button className="btn btn-primary" onClick={me}>select image</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default App
