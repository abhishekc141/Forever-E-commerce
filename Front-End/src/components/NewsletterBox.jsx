import React from 'react'

const NewsletterBox = () => {

    const OnSubmitHandler = (event)=>{
        event.preventDefault()
    }
        
    

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Subscribe now to get the latest news and updates about our products, exclusive offers, and more. Don't miss out on our special promotions and discounts!
        </p>
        <form onSubmit={OnSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex outline-none' type="email" placeholder='Enter Your Email' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox