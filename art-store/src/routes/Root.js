import {Outlet, Link} from 'react-router-dom'


function Root() {


    return(
    <div className="App">
      <section className='header'>
        <h1>Welcome to Art Gallery</h1>
        <h3>checkout our pieces</h3>
        <ul className="links">
          <li><Link to={'art'} className="custom-link">Featured Art </Link></li>
          <li> | </li>
          <li><Link to={'newart'} className="custom-link"> New Art</Link></li>
          <li> | </li>
          <li><Link to={'collections'} className="custom-link"> Browse Collections</Link></li>
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