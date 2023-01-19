import {Outlet, Link} from 'react-router-dom'

const linkstyle = {
  color: 'white'
}

function Root() {


    return(
    <div className="App">
      <section className='header'>
        <h1>Welcome to Art Gallery</h1>
        <h3>checkout our pieces</h3>
        <ul className="links">
          <li><Link to={'art'} style={linkstyle}>Featured Art </Link></li>
          <li> | </li>
          <li><Link to={'newart'} style={linkstyle}> New Art</Link></li>
          <li> | </li>
          <li><Link to={'collections'} style={linkstyle}> Browse Collections</Link></li>
        </ul>
      </section>
      
      {/* link to available art */}
      {/* link to artists? */}
      {/* link to sold art */}
      <div> 
         <Outlet/> 
       </div>
  
    </div>
    )
}

export default Root;