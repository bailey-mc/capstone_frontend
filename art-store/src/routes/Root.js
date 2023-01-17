import {Outlet, Link} from 'react-router-dom'


function Root() {





    return(
    <div className="App">

      Welcome to Art Gallery!<br/>
      checkout our pieces:
      <Link to={'/art'}>All Art</Link>
      {/* link to available art */}
      {/* link to artists? */}
      {/* link to sold art */}
      <Link to={'/newart'}>New Art</Link>
      {/* <div> */}
        {/* <Outlet/> */}
      {/* </div> */}
  
    </div>
    )
}

export default Root;