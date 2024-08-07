import { LayoutGrid } from "lucide-react";
import { Button } from "../../components/button";
import  marvelLogoUrl  from '../../../public/icons/marvel.svg';
import  dcLogoUrl  from '../../../public/icons/dc.svg';
import  maleIcon  from '../../../public/icons/male.svg';
import  femaleIcon  from '../../../public/icons/female.svg';
import  heroIcon  from '../../../public/icons/superhero.png';
import  villainIcon  from '../../../public/icons/villain.png';

interface HeaderProps {
    isSearch: string
    handleSearchCharacter: (e: string) => void
    filterAll: () => void
    filterMarvel: () => void
    filterDC: () => void
    filterMan: () => void
    filterWoman: () => void
    filterHero: () => void
    filterVillain: () => void
    battleHeros: () => void
}

export function Header ({
    isSearch,
    handleSearchCharacter,
    filterAll,
    filterMarvel,
    filterDC,
    filterMan,
    filterWoman,
    filterHero,
    filterVillain,
    battleHeros
} : HeaderProps){
    return(
        <div className="fixed top-0 left-0 w-full bg-purple-950 py-4 flex flex-col items-center justify-center gap-6 z-50">
        <div className="flex items-center justify-center mt-3 gap-3">
          <div className="bg-zinc-100 rounded-md px-2 w-64 py-2">
            <input 
            className="bg-transparent w-full outline-none"
            placeholder="Pesquise o nome do personagem"
            value={isSearch}
            onChange={(e) => handleSearchCharacter(e.target.value)}
            type="text" 
            />
          </div>

          <div className='w-px h-6 bg-zinc-50'></div>
        
          <Button onClick={filterAll}>
            <LayoutGrid />
          </Button>
          <Button onClick={filterMarvel} variant="marvel" size="marvel">
            <img className="h-10 rounded-lg" src={marvelLogoUrl} alt="Marvel" />
          </Button>
          <Button onClick={filterDC} size="dc">
            <img className="h-9 w-9" src={dcLogoUrl} alt="DC" />
          </Button>
          <Button onClick={filterMan} size="caracter">
            <img className="h-8 w-8" src={maleIcon} alt="Homens" />
          </Button>
          <Button onClick={filterWoman} size="caracter">
          <img className="h-8 w-8" src={femaleIcon} alt="Mulheres" />
          </Button>
          <Button onClick={filterHero} size="caracter">
            <img className="h-8 w-8" src={heroIcon} alt="Heróis" />
          </Button>
          <Button onClick={filterVillain} size="caracter">
            <img className="h-8 w-8" src={villainIcon} alt="Vilões" />
          </Button>

        </div>

        <div className="flex items-center justify-center">
            <Button onClick={battleHeros} variant="secundary">
             Iniciar Luta
            </Button>
        </div>
        
      </div>
    )
}