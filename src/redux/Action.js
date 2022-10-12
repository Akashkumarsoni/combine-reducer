import { CAKEINCREASE, CHOCOLATEINCREASE, ICECREAMEINCREASE } from "./Constants"

export const buyCake =(e)=>{
    return {
        type:CAKEINCREASE,
        value : e
    }
}

export const buyIcecream =(e)=>{
    return {
        type:ICECREAMEINCREASE,
        value : e
    }
}

export const buyChocolate =(e)=>{
    return {
        type:CHOCOLATEINCREASE,
        value : e
    }
}