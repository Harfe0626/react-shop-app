import React from 'react'
import CardList from './card-list/CardList'
import CountProducts from './count-products/CountProducts'
import FiltersCategory from './filters-category/FiltersCategory'
import CardSkeleton from './card-skeleton/CardSkeleton'

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory />
        <CountProducts />
        <CardList />
        <CardSkeleton />
      </div>
    </div>
  )
}

export default HomePage