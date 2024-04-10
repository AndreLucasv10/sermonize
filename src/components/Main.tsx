import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "@/components/index.module.css";
import { FiArrowDownCircle } from "react-icons/fi";

const mainImg = [
    { id: 1, img: 'https://i.pinimg.com/originals/f1/9a/93/f19a93289832e57f698eb2a5f8af3c2c.jpg', title: 'Bem vindo(a)  Sermonize Tech', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima praesentium, asperiores odio quae reprehenderit!' },
    { id: 2, img: './Sermonize 2.jpg' },
    { id: 3, img: 'https://insights.ieseg.fr/wp-content/uploads/2022/08/iStock-1325899588-1.jpg-1200px-1.jpg', title: 'Bem vindo(a)  Sermonize Tech', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima praesentium, asperiores odio quae reprehenderit!' },
    { id: 4, img: './Sermonize 2.jpg' },
    { id: 5, img: 'https://s3.wns.com/S3_5/Images/CaseStudy/HeaderImage/7066/128/2040-x-1200px.jpg', title: 'Bem vindo(a)  Sermonize Tech', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima praesentium, asperiores odio quae reprehenderit!' },
    { id: 6, img: './Sermonize 2.jpg' },
];

export const Main = () => {
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false
    };


    return (
        <div className=" w3/4 bg-black  ">
            <div className="w-screen  ">
                <Slider {...settings}>
                    {mainImg.map((d) => (
                        <div key={d.id} className="" >
                            <div className={style.banner}>
                                <h1 className="text-sky-600 text-[45px] font-extrabold  drop-shadow-xl">{d.title}</h1>
                                <p className="text-white font-bold text-[20px]">{d.text}</p>
                            </div>
                            
                            <img className="w-screen h-[650px] " src={d.img} alt="" />

                            <div className="w-screen  mb-4 flex justify-center animate-bounce">
                                <FiArrowDownCircle className="text-sky-600 text-[55px] relative" />
                            </div>
                            
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}


const galeria =[
    {id:1, nome:"pessoa 1"},
    {id:2, nome:"pessoa 2"},
    {id:3, nome:"pessoa 3"},
    {id:4, nome:"pessoa 4"},
    {id:5,nome:"pessoa 5"},
    {id:6,nome:"pessoa 6"},
    {id:7,nome:"pessoa 7"},
    {id:8,nome:"pessoa 8"},
    {id:9,nome:"pessoa 9"},
    {id:10,nome:"pessoa 10"},
]


export const Second = () => {
    return (
        <div className="w-screen h-[550px] bg-black">
            <div className="w-screen flex flex-col justify-center items-center">
                <h1 className="text-white text-center mb-4 uppercase font-bold">Galeria</h1>

                <div className="grid grid-cols-5 gap-8 text-center items-center">
                    {galeria.map(galeria=>
                        <p  className="text-white bg-blue-500 p-8 w-[200px] h-[200px]" key={galeria.id}>{galeria.nome}</p>
                    )}
                </div>
            </div>
        </div>
    )
}





