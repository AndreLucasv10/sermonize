import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";


export const Footer = () => {
    return (
        <div>
            <div className="bg-sky-600 w-screen md:h-[110px] flex flex-col justify-center items-center">

                <div className="md:flex justify-center items-center w-full">

                    <div className="flex justify-center ">
                        <p className="text-white text-[10px]">Developed by <span className="text-black font-bold">Sermonize&copy;</span> </p>
                    </div>


                    <div className="flex flex-col">
                        <p className="text-white uppercase font-bold text-1xl text-center">Social Media </p>
                        <div className="flex justify-center items-center  text-center  gap-8 mt-4 w-[400px]">
                            <a href=""><FaGithub className="text-black text-3xl" title="GitHub" /></a>
                            <a href=""><FaLinkedin className="text-black text-3xl" title="LinkedIn" /></a>
                            <a href=""><FaInstagram className="text-black text-3xl" title="Instagram" /></a>
                        </div>
                    </div>
                    <div>
                        <div id="contato" className="flex justify-center items-center gap-2 mt-4">
                            <IoPhonePortraitOutline className="text-black" />
                            <p className="text-white ">+55 (64) 99211-5732</p>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <TfiEmail className="text-black" />
                            <p className="text-white ">sermonizetech@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}