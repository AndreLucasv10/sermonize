


type Props={
    img:string;
    closeModal: ()=> void;
}

export const Modal =({img, closeModal}:Props)=>{

    


    return(
        <>
          <div className="fixed w-screen bg-black/90">
                <img src={`./data/Person${img}`} alt="" className="w-[200px] h-[200px]" />
          </div>

          <div>

          </div>
        </>
    )
}