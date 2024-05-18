import { useEffect, useState } from "react";
import { MdArrowBackIos,MdArrowForwardIos } from "react-icons/md";

const images = [
  "https://images.unsplash.com/photo-1715586041798-9583f0642747?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664640733639-ba75346e87e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1624298582183-047555f39443?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const App = () => {
  const [current, setCurrent] = useState(0);
  //useState 

  useEffect(()=>{
    const interval=setInterval(() => {
      nextSlide();
    }, 3000);

   return ()=>clearInterval(interval);//clear interval based on the dependency array so that infinity loop does not happen ;
  },[current]);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }


  function goToSlide(index){
    console.log(`Go to slide ${index}`);
    setCurrent(index);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <h1 className="font-bold text-3xl m-16  font-mono ">
        THIS IS PROJECT-01 CAROUSEL
      </h1> 
      <div className="relative w-full max-w-3xl">
        <div
          className="mt-40 absolute z-10 inset-y-0 bg-gray-800 cursor-pointer rounded left-0 flex items-center"
          onClick={prevSlide}
        >
          <button className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none">
            <MdArrowBackIos />
          </button>
        </div>
        <div className="mt-40 z-10 absolute inset-y-0 right-0 flex items-center" >
          <button className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none" onClick={nextSlide}>
          <MdArrowForwardIos />
          </button>
        </div>
      </div>

      {/* mapping to iterate over the things  */}

      {images.map(
        (image, index) =>
          current == index && (
            <div key={image} className="w-96 h-96 overflow-hidden rounded-md shadow-lg transition-transform duration-500">
              <img src={image} className="w-full h-full object-cover" />
            </div>
          )
      )}
    </div>
  );
};

export default App;
