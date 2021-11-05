import Header from "../components/Header"
import Footer from "../components/Footer"

const Homepage = () => {
    return (
        <div className ="homepage">
            <Header />

            <body className="homepageBody">
                <p>
                    Welcome to our services, navigate through the menu 
                    to compare the prices between immobile property 
                    or if you wish to find property which is suitable according to your budget.
                </p>
            </body>
        
            <Footer />
            
        </div>
    )
}

export default Homepage
