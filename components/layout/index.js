// Components
import Header from './Header'
import Footer from './Footer'

const CoreLayout = ({children}) => {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default CoreLayout