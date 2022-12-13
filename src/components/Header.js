import Navigation from './Navigation'

function Header({setCurrentPage}) {
    return(
        <header>
           <h1>Andrew Hong</h1> 
           <Navigation setCurrentPage={setCurrentPage}/>
        </header>
    );
}

export default Header; 