import { Homepage } from "./Homepage";
import { SubHomepage } from "./SubHomepage";

interface InitialHomeProps {
  serviceOn:any
}

export function InitialHome({serviceOn}: InitialHomeProps) {
 return (
   <>
      <Homepage serviceOn={serviceOn}/>
      <SubHomepage/>
   </>
 )
}