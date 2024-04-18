import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { men_shirt, mens_shirt } from '../../../Data/men_shirt'
import { men_jeans } from '../../../Data/men_jeans'
import { women_dress } from '../../../Data/women_dress'
import { women_jeans } from '../../../Data/women_jeans'
import { women_top } from '../../../Data/women_top'

const HomePage = () => {
  return (
    <div>
        <MainCarosel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 '>
            <HomeSectionCarosel data={mens_kurta} sectionName={"Men Kurta"}/>
            <HomeSectionCarosel data={men_shirt} sectionName={"Men Shirt"}/>
            <HomeSectionCarosel data={men_jeans} sectionName={"Men Jeans"}/>
            <HomeSectionCarosel data={women_dress} sectionName={"Women Dress"}/>
            <HomeSectionCarosel data={women_jeans} sectionName={"Women Jeans"}/>
            <HomeSectionCarosel data={women_top} sectionName={"Women Top"}/>

        </div>

    </div>
  )
}

export default HomePage