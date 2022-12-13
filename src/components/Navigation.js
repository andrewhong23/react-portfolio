

function Navigation({ setCurrentPage }) {

    return (
        <nav className="navigationbar">
            <a href="#" onClick={(event) => {
                event.preventDefault();
                setCurrentPage('about');
            }}>About Me</a>

            <a href="#" onClick={(event) => {
                event.preventDefault();
                setCurrentPage('portfolio');
            }}>Portolio</a>

            <a href="#" onClick={(event) => {
                event.preventDefault();
                setCurrentPage('contact');
            }}>Contact</a>

            <a href="https://drive.google.com/file/d/1aEYuCcVcXB_xIIXiHcU2icZ1zsOVclem/view?usp=share_link" target="_blank" >Resume</a>

        </nav>
    )
}

export default Navigation; 