import { supabaseApi } from "@/api/supabase.api"

export type CitaMedicaData = {
    name:string
    lastname: string
    dateofborn: string
    gender: string
    cellphone: number
    email:string
    date: string
    hour: string
}

type CitaMedicaResponse ={
    name:string
    lastname: string
    dateofborn: string
    gender: string
    cellphone: number
    email:string
    date: string
    hour: string
    created_at: string
}

export const createcitaMedica= async (date:CitaMedicaData):Promise<CitaMedicaResponse> => {
    try{
        const response = await  supabaseApi.post('/citaMedica', date, {
            headers: {
                'Prefer': 'return=representation'
            }
        })
        return response.data[0]
    }
    catch(error){
        console.log("error de llamado a la api", error)
        throw new Error("Fallo el llamado de la API")
    }
}