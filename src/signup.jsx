import React from 'react'
import './signup.css'

function signup() {
  return (
    <div>
      <div className='container'>
      <div className="row">
        <div className="col-md-6">
          <div className="padre">
            <div className="card card-body" id='card1'>
              <form>
                <h2 className='title'>Registro Monopoly</h2>
                <input type="text" placeholder='Ingresar usuario' className='cajatexto' />
                <input type="email" placeholder='Ingresar correo' className='cajatexto' />
                <input type="password" placeholder='Ingresar contraseña' className='cajatexto' />
                <button className='btnform' type="submit">Ingresar</button>
                <p>¿Ya tienes una cuenta? <a className='loginLink' onClick={() => console.log('Ingresa aqui')}>login</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default signup
