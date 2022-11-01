import * as Yup from "yup"
export const adressSchema= Yup.object({
    name:Yup.string().min(4).max(24).required("*Please enter your name*"),
    street:Yup.string().min(30).max(125).required("*Please enter street*"),
    city:Yup.string().min(4).max(24).required("*Please enter your city*"),
    state:Yup.string().min(2).max(24).required("*Please enter your state*"),
    zip:Yup.number().required("*Please enter zip*"),
    country:Yup.string().min(2).max(24).required("*Please enter your country*"),
    mobileno:Yup.number().required("*Please enter Contact number*"),
    email:Yup.string().email().required("*Please enter your email*")
})