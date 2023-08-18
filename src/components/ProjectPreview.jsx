import game from "../asset/image/game.jpg"

const ProjectPreview = () => {
    return(
        <div className="flex w-[650px] h-[280px] bg-background-preview/60 items-center content-center rounded-2xl transition-all duration-300 group hover:bg-background-preview/100 group hover:scale-105">
            <img src={game} class="w-[300px] h-[300px] object-cover rounded-2xl" loading="lazy"/>
            <div className="flex flex-col px-6 py-4 w-full h-full justify-center ">
                <p className="text-white font-semibold text-[30px]">SENNETHIA</p>
                <p className="text-white font-medium text-xl">PSYCHOLOGICAL HORROR GAME</p>
                <p className="text-white font-medium text-l h-0 transition-all duration-300 opacity-0 ease-in-out group-hover:opacity-100 group-hover:h-full my-4">A psychological horror game about a little girl named Senneth. She accidentally discovered a magical book in her mansion and get transferred to another dimension. She has to find a way out while discovering the truth about her family and herself.</p>
            </div> 
        </div>
    )
}

export default ProjectPreview