import styles from '../styles/Navbar.module.css'

const Navbar = () =>{
    return(
        <nav className = {styles.Navbar}>
            <div>
                <h1> Llamma Gallery</h1>
            </div>
            <div>
                <p>Favoritos(0)</p>
            </div>
        </nav>
    )
}

export {Navbar}