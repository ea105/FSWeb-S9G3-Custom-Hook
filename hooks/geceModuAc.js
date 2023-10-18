import { useState,useEffect } from "react";
import localStorageKullan from "./localStorageKullan";

function useGeceModuAc(){
    const [geceModu,setGeceModu] = useState(false);
    const{getValue,setValue} = localStorageKullan ("gecemodu",false,false);


    useEffect(() => {
        const localStorageValue = getValue();
        if (localStorageValue !== null) {
          setGeceModu(localStorageValue);
        }
      }, []);

      const toggleGeceModu = () => {
        const yeniDeger = !geceModu;
        setValue(yeniDeger);
        setGeceModu(yeniDeger);
      };
    
      return [geceModu, toggleGeceModu];  

}

export default useGeceModuAc;