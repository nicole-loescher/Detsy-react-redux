import './Home.css'
import { ProductList } from '../ProductList'

export function Home() {
    return (
        <div>
            <h2 className='home__title'> 
                Welcome to Detsy
                <p className='home__intro'>It's not hoarding if they are dice... </p>
            </h2>
            <ProductList  />
            {/* <h2 className='home__noinfo'>Oh no... it looks like our dice may have rolled away! Ill go find some more!</h2> */}

        </div>
    )
}