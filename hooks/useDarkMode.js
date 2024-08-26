import {useLocalStorage} from "./useLocalStorage"

export const useDarkMode=(darkBool)=>{
    const [darkMode,setDarkMode]=useLocalStorage('darkMode',darkBool)
    return [darkMode,setDarkMode]
}

export default useDarkMode
