import React, { MouseEvent, useEffect } from 'react';
import { useState } from 'react';
import Requisicao from '@/utilidade/Requisicao';
const PersonCard: React.FC = () => {


  const [colaboradores, setColaboradores] = useState([])
  


  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    const img = event.currentTarget.querySelector('.img') as HTMLImageElement
    const details = event.currentTarget.querySelector('.details') as HTMLDivElement;
    details.classList.remove('translate-y-full', 'opacity-0');
    details.classList.add('translate-y-0', 'opacity-100');
    img.classList.add('blur-sm');
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    const img = event.currentTarget.querySelector('.img') as HTMLImageElement
    const details = event.currentTarget.querySelector('.details') as HTMLDivElement;
    details.classList.remove('translate-y-0', 'opacity-100');
    details.classList.add('translate-y-full', 'opacity-0');
    img.classList.remove('blur-sm');
  };
  const renderCast = () => (
    <ul className="flex gap-2">
      <li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews" /></li>
      <li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd" /></li>
      <li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera" /></li>
    </ul>
  );

    useEffect(() =>{
      Requisicao.get('get-all').then((responde) =>{
        setColaboradores(responde.data)
      })
    }, []) 
    console.log(colaboradores)
  return (
    <div>
    <h1 className='my-7 max-w-screen-md flex place-content-center text-2xl'>Nossos Colaboradores</h1>
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-screen-xl mx-auto my-4">
      {colaboradores.map((Colaborador) => (
        <div key={Colaborador._id} className="card relative overflow-hidden rounded-md" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="poster">
            <img className='img ' src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg" alt="Location Unknown" />
          </div>
          <div className=" details absolute bottom-0 left-0 w-full bg-cyan-950 bg-opacity-90 px-4 py-8 transition duration-300 transform translate-y-full opacity-1 text-white text-sm">
            <h1>{Colaborador.name}</h1>
            <h2 className='my-1.5' >{Colaborador.course}</h2>
            <div className="tags flex flex-wrap gap-1">
              <h1>Tecnologias</h1>
              <p className="break-words my-1.5">{Colaborador.hardskills.join(' - ')}</p>
            </div>
            <p className="desc">
              {Colaborador.softskills.join(' - ')}
            </p>
            <div className="cast">
              <h3>Projetos</h3>
              {renderCast()}
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default PersonCard;