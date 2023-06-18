import React from 'react'

// const Nav = (props) => {
//   return (
//     <nav className='lnb'>
//         <ul>
//             <li><a href="#">{props.menus[0] }</a></li>
//             <li><a href="#">{props.menus[1] }</a></li>
//             <li><a href="#">{props.menus[2] }</a></li>
//         </ul>

//         </nav>
//   )
// }
const Nav = (menus) => {
  return (
    <nav className='lnb'>
        <ul>
            {
            menus.map(data=>(
                <li><a href ="#">{data}</a></li>
                ))
            }
        </ul>
        </nav>
  )
}

export default Nav