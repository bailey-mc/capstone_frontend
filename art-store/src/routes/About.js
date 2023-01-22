
function About() {
    return(
        <div className="about">
            <h1>Art Gallery README.md</h1>
            <hr/>
            <p className="left-align">Art Gallery was developed by <a href="#" className="custom-link">Bailey McDonald</a> as her capstone project for her tenure as a Software Engineering Fellow with General Assembly. For their capstone projects, students were tasked with learning something entirely new to them. I chose to build a Web API with a backend written in C# and .NET, and a front end built with React Router. I taught myself C# and .NET in a matter of days in order to build the back end for this project. Shout out to <a href="https://learn.microsoft.com/en-us/" target="_blank" className="custom-link">Microsoft Learn</a> and <a href="https://www.youtube.com/channel/UCoc4UCEetAt3htM3hV1dQgQ" target="_blank" className="custom-link">Alex Merced</a> for their rigorous tutorials and documentation. On the front end, I created a React app and became very familiar with React Router.</p>
            <p className="left-align">As of writing this, I have yet to deploy my sites. I have played around with Docker to deploy my .NET app on Heroku, but I have yet to have success. Who knows, maybe I'll buy a plan with Azure.</p>
            <p className="left-align">If you like Art Gallery and wanna talk shop, reach out to me at mcdonald.bailey@gmail.com</p>
            <p className="left-align">Credit where credit's due... Art Gallery was overwhelmingly inspired by <a href="https://museumofbadart.org/" className="custom-link">The Museum of Bad Art</a>. Thanks to dad for introducing me to them.</p>
        </div>
    )
}

export default About;

//I will admit to having experience with React Router previous to this project, but 