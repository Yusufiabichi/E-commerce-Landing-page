import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse
    gap-10 max-cotainer">
      <div className="flex-1">
        <img src={offer} alt="car img"
        width={773}
        height={687}
        className="object-contain w-full" />
      </div>

      <div className="flex flex-1 flex-col">

        <h2 className='font-palanquin text-4xl capitalize font-bold
        lg:max-w-lg'>
          <span className='text-coral-red'> Special </span>
          <span className=''>Offer </span>
        </h2>
          <p className='mt-4 lg:max-w-lg info-text
          '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Illum impedit enim modi ut, deserunt aut, quia pariatur deleniti, 
          veritatis corrupti ullam iusto mollitia placeat nihil reiciendis 
          doloremque aliquid! Quibusdam, aliquam.
          </p>
          <p className='mt-4 lg:max-w-lg info-text'>Discover stylish Manga car arrivals, quality comfort,
          and innovation for your active life.</p>


          <div className='mt-11 flex flex-wrap gap-4'>
            <Button label="Buy Now!"
            iconURL={arrowRight}/>
            <Button label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"/>

          </div>

      </div>


    </section>
  )
}

export default SpecialOffers