import "./Main.css";

const Main = () => {


    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
    ]


  return (
    <main>

        {cakes.map( (cake) => {

            return <section key={(Math.floor(Math.random() * 10000) + 1)} className="cake">
                <h3>{cake.cakeName}</h3>
                <p>Ingredients: {cake.ingredients}</p>
                <p>Rating: {cake.rating}</p>
            </section>
    
        })}

    </main>
  )
}

export default Main