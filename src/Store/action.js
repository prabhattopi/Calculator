import { COUNTER_ADD, COUNTER_DECREMENT, COUNTER_DIVIDE, COUNTER_INCREMENT, COUNTER_MULTIPLY, COUNTER_SUB } from "./actiontype"


export const Add=()=>({type:COUNTER_INCREMENT})
export const Subtract=()=>({type:COUNTER_DECREMENT})
export const Multiply=(value)=>{
    return{type:COUNTER_MULTIPLY,payload:value}}
export const Jor=(value)=>{
    return{type:COUNTER_ADD,payload:value}}
export const Minus=(value)=>{
    return{type:COUNTER_SUB,payload:value}}
export const Divide=(value)=>{
    return{type:COUNTER_DIVIDE,payload:value}}