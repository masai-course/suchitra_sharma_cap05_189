import {useState, useEffect} from 'react'
import axios from 'axios'
import SponsorProducts from './SponsorProducts'

export default function SliderSponsorProduct(){

        const [sponsorProduct, setSponsorProduct]=useState([])

        useEffect(()=>{

            axios.get('https://costco-dbjson.vercel.app/sponsorProducts')
            .then((res)=>{
                setSponsorProduct(res.data)
                console.log(setSponsorProduct)
            })
            .catch((err)=>{
                console.error(`There was an error fetching the data ${err}`)
            })
        }, [])

    return(
        <>
        <h1>Sponsored Products</h1>
        <div className='product-list'>
           { sponsorProduct.map((product)=>(
                <SponsorProducts 
                key={product.id}
                imageUrl={product.imageUrl}
                amount={product.amount}
                description={product.description}
                rating={product.rating}
                
                
                />
           ))}



        </div>
        
        
        
        </>
    )
}