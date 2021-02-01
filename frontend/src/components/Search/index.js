import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getProducts } from "../../store/product";
import { loadSearchItems } from "../../store/search";

export function Search() {
    const [criteria, setCriteria] = useState('a');
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
        dispatch(loadSearchItems(criteria))
    },[dispatch, criteria]);

    return (
        <div className='search'>
            <input 
                value={criteria}
                onChange={(e)=> setCriteria(e.target.value)}
                className='search__bar'
                type='text'
                placeholder='Search for your next pair here...'
            />
        </div>
    )
}