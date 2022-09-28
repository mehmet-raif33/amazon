import React from 'react'
import { Link } from 'react-router-dom'

function ProductDetails() {
  return (
    <div>
        <div className='bg-sky-400 py-2 text-md'>
            <Link to='/' className='ml-20'>
                <span>Back To The Shop</span>
            </Link>
        </div>
    </div>
  )
}

export default ProductDetails