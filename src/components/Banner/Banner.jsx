import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import logo from '../images/logo.png';
import { motion as m } from 'framer-motion';
import HeadAnimation from '../Animation/HeadAnimation';

const Banner = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-screen bg-banner bg-no-repeat bg-center bg-cover clip text-white relative">

      <div className="mt-16 md:mt-7">
        <img className="w-[13rem] rounded-md shadow-lg" src={logo} alt="logoImg" />
      </div>

      <div className="flex flex-col items-end space-y-4 absolute top-4 right-4 text-right">
        <p className="text-xl text-white font-semibold mb-2">To contact:</p>

        {/* WhatsApp Icon */}
        <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-green-500 text-4xl hover:text-white transition duration-300 ease-in-out" />
        </a>

        {/* Contact Icon */}
        <a href="tel:+123456789">
          <FaPhone className="text-green-500 text-4xl hover:text-white transition duration-300 ease-in-out" />
        </a>
      </div>

      <div className="flex-grow text-center">
        <h1 className="text-4xl md:text-6xl 2xl:text-8xl capitalize font-bold md:w-[44rem] 2xl:w-[73rem] px-4 mx-auto textShadow">
          <HeadAnimation text={"Fueling Progress, Shaping the Future"} />
        </h1>
        <m.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="md:w-[30rem] 2xl:w-[40rem] 2xl:text-lg mx-auto mt-4 textShadow px-3 font-medium">
          Uniting Petroleum, Gold, Diamond, Infrastructure Development, and Global Trade.
        </m.p>
      </div>
    </div>
  );
};

export default Banner;
