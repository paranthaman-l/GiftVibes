import React from 'react'
import product1 from '../assets/products/product1.webp'
import product2 from '../assets/products/product2.webp'
import product3 from '../assets/products/product3.webp'
import product4 from '../assets/products/product4.webp'
import product5 from '../assets/products/product5.webp'
const Customized = () => {

    const datas = [
        {
          giftName: "Personalised Floral Cute Elephant Girl Blanket With Name Christmas Birthday Baby Shower Gift For Baby Kid Family",
          giftImage: product1,
          rating: "4.5",
          price: "450",
          discount: "10",
        },
        {
          giftName: "Personalised Graduation Photo Keychains Or Necklaces Gift Accessories For Graduate Friend",
          giftImage: product2,
          rating: "4.3",
          price: "480",
          discount: "7",
        },
        
        {
          giftName: "Personalized Photo Frame Valentine’s Day Gift The Best Is Yet To Come",
          giftImage: product3,
          rating: "4.7",
          price: "390",
          discount: "22",
        },
        {
          giftName: "Mug Birthday Christmas Gift For Friend Family Pet Lover",
          giftImage: product4,
          rating: "4.8",
          price: "440",
          discount: "12",
        },
        {
          giftName: "Couple Celebration White Ceramic Mug Anniversary And Wedding Gifts",
          giftImage: product5,
          rating: "4.9",
          price: "200",
          discount: "60",
        },
      ]
    return (
        <div className='h-screen w-screen overflow-hidden flex flex-col'>
            <div className="flex">
                {datas.map((data,i)=>{
                    return(
                        <img style={{width:Math.random(60)`px`}} className={`w-${Math.random(20-60)}`} key={i} src={data.giftImage} alt="" />
                    )
                })}
            </div>
        </div>
    )
}
export default Customized