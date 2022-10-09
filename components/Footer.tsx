import { FC } from "react";
import { useRouter } from "next/router";
import { AiFillMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";

const Footer: FC = () => {
  const { push } = useRouter();
  return (
    <footer className="w-full bg-E7EAEE pt-8 lg:p-10 flex mt-16 lg:mt-36">
      <div className="flex-grow flex flex-col lg:flex-row">
        <div className="w-full lg:w-6/12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.806337547359!2d28.9822382!3d41.0294927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe26e17a022ca61d6!2zNDHCsDAxJzQ2LjIiTiAyOMKwNTgnNTYuMSJF!5e0!3m2!1sen!2suk!4v1662120384248!5m2!1sen!2suk"
            width="300"
            height="450"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
        <div
          className="w-full lg:w-6/12 bg-no-repeat bg-cover"
          style={{ backgroundImage: "url(footer.jpg)" }}
        >
          <div className="w-full lg:w-6/12 backdrop-blur-2xl h-full p-4 flex flex-col">
            <span className="text-B95F1E font-bold text-lg">OUR ADDRESS</span>
            <p className="text-191C62">
              Altin Bilezik Sokak No:2/A 34433 Beyoglu/Istanbul Turkey
            </p>
            <div className="mt-2">
              <a
                target="_blank"
                href="tel:+905411188894"
                className="flex items-center"
              >
                <IoMdCall size={25} color="#B95F1E" className="mr-1" />
                <span className="text-191C62 text-xs">+90 541 118 88 94</span>
              </a>
            </div>
            <div className="mt-2">
              <a
                target="_blank"
                href="mailto:mehrdadjooyami@gmail.com"
                className="flex items-center"
              >
                <AiFillMail size={25} color="#B95F1E" className="mr-1" />
                <span className="text-191C62 text-xs">
                  mehrdadjooyami@gmail.com
                </span>
              </a>
            </div>
            <span className="text-B95F1E font-bold text-lg mt-8">
              OPENING HOURS
            </span>
            <div className="mt-2 flex items-center text-191C62">
              <span className="font-semibold mr-2">Mon:</span>
              <span>9 AM - 8 PM</span>
            </div>
            <div className="mt-2 flex items-center text-191C62">
              <span className="font-semibold mr-2">Tue:</span>
              <span>9 AM - 8 PM</span>
            </div>
            <div className="mt-2 flex items-center text-191C62">
              <span className="font-semibold mr-2">Wed:</span>
              <span>9 AM - 8 PM</span>
            </div>
            <div className="mt-2 flex items-center text-191C62">
              <span className="font-semibold mr-2">Thu:</span>
              <span>9 AM - 8 PM</span>
            </div>
            <div className="mt-2 flex items-center text-191C62">
              <span className="font-semibold mr-2">Fri:</span>
              <span>9 AM - 8 PM</span>
            </div>
            <div className="mt-2 flex items-center text-191C62">
              <span className="font-semibold mr-2">Sat:</span>
              <span>9 AM - 8 PM</span>
            </div>
            <div className="mt-2 flex items-center text-191C62">
              <span className="font-semibold mr-2">Sun:</span>
              <span>12 AM - 8 PM</span>
            </div>

            <div>
              <button
                onClick={() => push("/contact")}
                className="mt-8 px-3 font-bold h-12 border-2 border-191C62 text-191C62 hover:text-E7EAEE hover:bg-191C62 transition-all ease-in-out duration-200"
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <img src="footer.jpg" alt="mj barber website" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
