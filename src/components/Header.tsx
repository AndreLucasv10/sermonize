
const Menu = [
    { id: 1, nome: 'sobre-nós' },
    { id: 2, nome: 'contato' },
    
];


export const Header = () => {

    return (
        <div className=" bg-black w-screen h-[80px] shadow-2xl shadow-white">
            <div className=" flex justify-around ">
                <div>
                    <img src="./Sermonize.png" alt=""
                        className="w-[90px]"
                    />
                </div>

                <div className="flex justify-center items-center ">
                    <nav>
                        <div className="flex justify-center items-center gap-8">
                            {Menu.map((item) => (
                                <ul key={item.id}>
                                    <li className="text-white hover:border-b-2 cursor-pointer">{item.nome}</li>
                                </ul>
                            ))}
                            <button className="text-white font-bold bg-sky-600 hover:bg-sky-700 hover:shadow-sky-700 p-2 rounded-lg shadow-md shadow-sky-600">Área do Cliente</button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}