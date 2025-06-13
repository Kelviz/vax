import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import './SectionSix.css'


const SectionSix = () => {
  return (
    <div className="record-section-six-container">

        <div className="lg:w-[50%] md:w-[65%] w-[80%] relative font-bold py-14 bg-white rounded-4xl flex flex-col justify-center items-center ">
                <ImQuotesLeft className="absolute left-5 top-5" />
                <p className="px-12 ">We comply to every country’s regulatory and legal
                immunization policy</p>
                <ImQuotesRight className="absolute right-5 bottom-9"/>

        </div>

    </div>
  )
}

export default SectionSix