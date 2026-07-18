"use client";

import {

FieldValues,

Path,

UseFormRegister,

} from "react-hook-form";

interface Props<T extends FieldValues>{

label:string;

name:Path<T>;

register:UseFormRegister<T>;

type?:string;

}

export default function FormInput
<T extends FieldValues>({

label,

name,

register,

type="text",

}:Props<T>){

return(

<div className="space-y-2">

<label className="text-sm font-medium">

{label}

</label>

<input

type={type}

{...register(name)}

className="w-full rounded-xl border border-stone-300 px-4 py-3 focus:border-black focus:outline-none"

/>

</div>

)

}