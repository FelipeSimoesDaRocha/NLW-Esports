import "./styles/main.css";
import {MagnifyingGlassPlus } from "phosphor-react";

import Logo from "./assets/logo.svg";
function App() {
  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={Logo} alt="" />
        <h1 className="text-6xl text-white font-black mt-20 bg">
          Seu{" "}
          <span className="text-transparent bg-clip-text bg-nlw-gradient ">
            duo
          </span>
          &nbsp;está aqui.
        </h1>
        <div className="grid grid-cols-6 gap-6 mt-16 p-4">
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/image 1.png" alt="" />
            <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 p-2">
              <strong className="font-bold text-white block">
                League of Legends
              </strong>
              <span className="text-zinc-300 block mt-1">4 anúncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/image 2.png" alt="" />
            <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 p-2">
              <strong className="font-bold text-white block">Dota 2</strong>
              <span className="text-zinc-300 block mt-1">4 anúncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/image 3.png" alt="" />
            <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 p-2">
              <strong className="font-bold text-white block">
                Counter Strike
              </strong>
              <span className="text-zinc-300 block mt-1">4 anúncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/image 5.png" alt="" />
            <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 p-2">
              <strong className="font-bold text-white block">
                Apex Legends
              </strong>
              <span className="text-zinc-300 block mt-1">4 anúncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/image 6.png" alt="" />
            <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 p-2">
              <strong className="font-bold text-white block">Fortnite</strong>
              <span className="text-zinc-300 block mt-1">4 anúncios</span>
            </div>
          </a>
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/image 7.png" alt="" />
            <div className="w-full pt-16 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0 p-2">
              <strong className="font-bold text-white block">
                World of Warcraft
              </strong>
              <span className="text-zinc-300 block mt-1">4 anúncios</span>
            </div>
          </a>
        </div>
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
          <div className="bg-[#2a2634] px-8 py-6 self-stretch flex justify-between">
            <div className="">
              <strong className="text-2xl text-white font-black block">
                Não encontrou seu duo?
              </strong>
              <span className="text-zinc-400 block">
                Publique um anúncio para encontrar novos players!
              </span>
            </div>
            <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-700 font-semibold flex gap-2 items-center">
             <MagnifyingGlassPlus/>
              Publicar anúncio
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
