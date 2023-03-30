import {usdValAtom } from "@/recoil/atom/currency-convert/convertAtom";
import { selector } from "recoil";

const usd = 82.50;

export const inrValSelector = selector({
    key:"inrVal",
    get : ({get}) => {
        const inrVal = get(usdValAtom)
        return inrVal ?  (inrVal * usd) : ''
    },
    set:({set}, newINRVal)=>{
        //@ts-ignore
        const  newUSDVal = newINRVal / usd
        set(usdValAtom, newUSDVal)
    }
})