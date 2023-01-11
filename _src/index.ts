import { StringTherapy } from "./StringTherapy";

function Init(str:string):StringTherapy {
    return new StringTherapy(str);
}

export = Init;