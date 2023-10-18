import './styles/App.css';


function Tile(props) {
  return (
    <div className="bg-white rounded-lg mt-4 mb-4">
      <div className="flex lg:flex-row md:flex-row flex-col justify-around h-full">
        <div className="flex flex-row lg:w-[25%] md:w-[25%] pl-6 pr-6 pt-4 pb-4 md:p-4 lg:p-4">
        <div className="flex md:justify-center lg:justify-center items-center md:w-full lg:w-full">  
        <img className="max-h-16 md:max-h-80 lg:max-h-80 place-self-center"src={props.img}></img>
        </div>
        </div>
        <div className="flex md:justify-center lg:justify-center text-center lg:text-right md:text-right lg:w-[25%] md:w-[25%] align-right pl-8 pr-8 pb-4 md:p-8 lg:p-8 lg:hidden md:hidden">
        <p className="text-[#001F5B] text-sm lg:text-base md:text-base"> {props.dates}</p>
        </div> 
        <span className="flex flex-col lg:w-[50%] md:w-[50%] pl-8 pr-8 md:p-8 lg:p-8"> 
          <h1 className="font-bold text-base lg:text-xl text-left text-[#001F5B]"> {props.company} <span className="font-semibold lg:text-xl"> <span className="hidden md:inline lg:inline"> - </span> <span className="block md:inline lg:inline text-sm md:text-xl lg:text-xl"> {props.role} </span> </span> </h1>
          <ul className="list-disc text-[#001F5B] text-xs lg:text-sm max-h-full ml-4 p-4">
            {props.desc && props.desc.map(point => {
              return (<li className="p-1"> {point} </li>)
            })}
          </ul>
        </span>
        <div className="flex justify-center text-right w-[25%] align-right pl-8 pr-8 md:p-8 lg:p-8 hidden lg:flex md:flex">
        <p className="text-[#001F5B]"> {props.dates}</p>
        </div>
      </div>
    </div>
  );
}

export default Tile;
