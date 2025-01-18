import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between
    items-center max-lg:flex-col gap-10" id="contact-us">

      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up Form
        <span className="text-coral-red"> Updates
        </span> & Newsletters
      </h3>

      <div className="">
        <input type="text"
        placeholder="Enter Your Email to subscribe"
        className="input" />
        <div>
          <Button label="Sign Up"/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe