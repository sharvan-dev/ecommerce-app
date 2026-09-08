import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProducItem from './ProducItem';

const RelatedProducts = ({ productId, category, subCategory }) => {

    const { products } = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=>{
 
        const matchingProducts = products.filter((item) => (
          item._id !== productId &&
          item.category === category &&
          item.subCategory === subCategory
        ));

        setRelated(matchingProducts.slice(0, 5));
 
      }, [products, productId, category, subCategory])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={"PRODUCTS"} />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {related.map((item,index)=>(
            <ProducItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
          ))}
        </div>
    </div>
  )
}

export default RelatedProducts
