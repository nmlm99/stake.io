import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Row1 from './Components/Row1/Row1'
import Sidebar from './Components/SideBar/Sidebar'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Row2 from './Components/Row2/Row2'
import './app.css'
import InputComp from './Components/Input/InputComp'

function App() {
  return (
    <>
      <div class="container-fluid fullWidth p-0 m-0">
        <div class="row p-0 m-0">
          <div class="col-0 sidebar p-0 m-0 col-md-2">
            <Sidebar />
          </div>
          <div class="col-12 bodyy col-md-10">
            <NavBar />
            <Row1 />
            <Row2 />
            <InputComp />
          </div>
        </div>
      </div>
      {/* <div className="appMain">
        <div className="appInner1">
          <Sidebar />
        </div>
        <div className="appInner1">
        <div className="appInner1_1">
          <NavBar />
          <Row1 />
          <Row2 />
          <InputComp />
          </div>
        </div>
      </div> */}

      {/* <NavBar/>
    <Row1/>
    <Row2/>
    <InputComp/> */}
    </>
  )
}

export default App
