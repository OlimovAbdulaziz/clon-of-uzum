import React from 'react'

const DATA = [
  "Elektronika",
  "Maishiy texnika",
  "Kiyim",
  "Poyabzal",
  "Aksessuarlar",
  "Go'zallik",
  "Salomatlik",
  "Uy-qurilish buyumlar",
  "Avtotovarlar"
]

function NavbarBottom() {
  return (
    <div className='container'>
      <ul className='nav__bottom-collection'>
        {
          DATA?.map((item, index) =>
            <li key={index} className='nav__bottom-item'>{item}</li>
          )
        }
      </ul>
    </div>
  )
}

export default NavbarBottom