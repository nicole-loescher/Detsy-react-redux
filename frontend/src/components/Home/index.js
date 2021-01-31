import './Home.css'
import { ProductList } from '../ProductList'

export function Home() {
    return (
        <div>
            <h1 className='home__title'> 
                Welcome to Detsy
                <p className='home__intro'>It's not hoarding if they are dice... </p>
            </h1>
            <ProductList  />
        </div>
    )
}