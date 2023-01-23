import { Link } from "react-router-dom";

function ErrorPage() {

  return (
    <div id="error-page" className="App">
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to='/art'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/collections'>Collections</Link>
    
    </div>
  );
}

export default ErrorPage;