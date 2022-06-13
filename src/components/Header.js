import "./Header.css";

const Header = () => {
  return (
    <header>
        <h1>Broadhurst Bakery</h1>
        
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>Secret Ingredients</li>
                    <li>Siiiiuuuuuu</li>
                    <li>
                        <input type="text" placeholder="Search..."/>
                        <button type="submit">Submit</button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header