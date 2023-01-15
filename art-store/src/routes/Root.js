import {Outlet, Link} from 'react-router-dom'


function Root() {





    return(
    <div className="App">

      Welcome to Art Gallery!<br/>
      checkout our pieces:
      <Link to={'art'}>Art</Link>
      <div>
        <Outlet/>
      </div>
  
    </div>
    )
}

export default Root;