import Button from '../components/Button'  
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between
    items-center max-lg:flex-col gap-10 w-full max-container">
      
      <div className="flex flex-1 flex-col">

        <h2 className='font-palanquin text-4xl capitalize font-bold
        lg:max-w-lg'>
          We Provide you
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Cars
        </h2>
          <p className='mt-4 lg:max-w-lg info-text
          '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Illum impedit enim modi ut, deserunt aut, quia pariatur deleniti, 
          veritatis corrupti ullam iusto mollitia placeat nihil reiciendis 
          doloremque aliquid! Quibusdam, aliquam.
          </p>
          <p className='mt-4 lg:max-w-lg info-text'>Discover stylish Manga car arrivals, quality comfort,
          and innovation for your active life.</p>
          <div className='mt-11'>
            <Button label="View Details"
            iconURL={arrowRight}/>

          </div>

      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} 
        alt="shoe image"
        width={570}
        height={522}
        className='object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality