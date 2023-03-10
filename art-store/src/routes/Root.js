import {Outlet, Link} from 'react-router-dom'


function Root() {


    return(
    <div className="App">
      <section className='header'>
        <h1>Welcome to Art Gallery</h1>
        <h3>check out our pieces</h3>
        <ul className="links">
          <li><Link to={'art'} className="custom-link">Featured Art </Link></li>
          <li> | </li>
          <li><Link to={'newart'} className="custom-link"> New Art</Link></li>
          <li> | </li>
          <li><Link to={'collections'} className="custom-link"> Browse Collections</Link></li>
          <li> | </li>
          <li><Link to={`about`} className="custom-link">About Us</Link></li>
        </ul>
      </section>
      <div> 
         <Outlet/> 
       </div>
  
    </div>
    )
}

export default Root;