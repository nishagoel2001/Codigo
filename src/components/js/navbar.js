import React from 'react'
import "../css/navbar.css";

export default function navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand mx-5" href="/"><b>CODIGO</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link mx-3" aria-current="page" href="/">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" aria-current="page" href="/">Solution</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 active" aria-current="page" href="/">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" aria-current="page" href="/">Tech for Hire</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" aria-current="page" href="/">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" aria-current="page" href="/">Blog</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn nav-btn mx-5 px-4" type="submit"><b>Request a quote</b></button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
