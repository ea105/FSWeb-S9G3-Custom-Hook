function localStorageKullan (key,value,başlangıçDeğeri) {
    const getValue=()=>{
        const localStorageValue=localStorage.getItem(key);
        return localStorageValue !== null ? JSON.parse(localStorageValue) : başlangıçDeğeri || value;
    };

    const setValue=()=>{
        localStorage.setItem(key,JSON.stringify(value));
    };
  



    return{getValue,setValue};
}






export default localStorageKullan