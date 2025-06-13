import './SectionSeven.css'

const SectionSeven = () => {
  return (
    <div className="record-section-seven-container">
        <div className="w-full px-8 pt-8 bg-[#148782] flex flex-col md:flex-row justify-between gap-4">
                <div className="md:w-[50%] w-full flex flex-col">
                        <h2 className="font-bold text-white text-xl">Status Report</h2>
                        <p className="text-white">Feel free to reach us anytime</p>

                        <form className="w-full pb-8 mt-14 flex flex-col gap-8 text-white">
                                <div className="flex gap-3">
                                        <label className="font-bold w-[18%] text-lg">Name:</label>
                                        <input className="w-[80%] border-b border-white focus:outline-none focus:ring-0" />

                                </div>

                                <div className="flex gap-3">
                                        <label className="font-bold text-lg w-[18%]">Email:</label>
                                        <input className="w-[80%] border-b border-white focus:outline-none focus:ring-0" />

                                </div>

                                <div className="flex gap-3">
                                        <label className="font-bold text-lg w-[18%]">Message:</label>
                                        <input className="w-[80%] border-b border-white focus:outline-none focus:ring-0" />

                                </div>

                                <button className="w-[140px] px-4 py-3 rounded-lg text-center font-bold text-white bg-[#FF981E] border border-gray-400">Send</button>

                        </form>

                </div>

                <div className="md:w-[35%] w-full text-black px-4 py-8 flex flex-col  justify-center bg-white rounded-t-4xl">
                        <h2 className="font-bold text-xl">Feedback</h2>
                        <p className="mt-2">Tell us your experience with us</p>

                        <div className="flex items-center gap-3 mt-8">
                                <img
                                src="/images/phone-volume_icon.png"
                                alt="phone-volume_icon"
                                className="w-[30px]"
                                
                                />
                                <p>+2348145676799</p>
                        </div>

                        <div className="flex items-center gap-3 mt-4">
                        
                        <img
                                src="/images/email-icon.png"
                                alt="email-icon"
                                className="w-[30px]"
                                
                                />
                                <p>vaccineapp@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-3 mt-4">
                        <img
                                src="/images/whatsapp_icon.png"
                                alt="whatsapp_icon"
                                className="w-[30px]"
                                
                                />
                                <p>+44 (1) 356286054</p>
                        </div>

                </div>

        </div>

    </div>
  )
}

export default SectionSeven