'use client';
import { createcitaMedica, CitaMedicaData } from '@/services/supabase.service';
import {useForm} from 'react-hook-form'

type FromProps = {
    formName: string;
    formLastName: string;
    formDateOfBorn: string;
    formGender: string;
    formCellPhone: string;
    fomrEmail: string;
    fomrDate: string;
    fomrHour: string;
    // Placeholders
    placeholderName: string;
    placeholderLastName: string;
    placeholderDateOfBorn: string;
    placeholderGender: string;
    placeholderCellPhone: string;
    placeholderEmail: string;
    placeholderDate: string;
    placeholderHour: string

}

type Inputs = {
  name: string;
  lastname: string;
  dateofborn: Date;
  gender: string;
  cellphone: number;
  email: string;
  date: Date;
  hour: string
}

export const Form = (FromProps:FromProps) => {
  const {register, handleSubmit, watch, formState:{errors}} = useForm<Inputs>()
  
  const onSubmit = (data:Inputs) => {
    const citaMedicaData: CitaMedicaData = {
      name: data.name,
      lastname: data.lastname,
      dateofborn: new Date(data.dateofborn).toISOString(),
      gender: data.gender,
      cellphone: data.cellphone,
      email: data.email,
      date: new Date(data.date).toISOString(),
      hour: data.hour
    };
    createcitaMedica(citaMedicaData)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2x1 mx-auto mt-6">
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 gap-4'>
              
              <div>
                <label htmlFor='name' className="italic font-light text-2xl text-black">
                  {FromProps.formName}
                </label>
                <input 
                  type="text"
                  id='name'
                  {...register("name",
                    {required: "El nombre es obligatorio",
                    minLength:{value: 2, message: "El nombre es muy corto"},
                    maxLength:{value: 60, message: "El nombre es muy largo"},
                    pattern: {value: /^[a-zA-Z\sñÑüÜ]*$/i, message: "El nombre solo puede contener letras"}}
                  )}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500'
                  placeholder={FromProps.placeholderName}
                />
                {
                  errors.name &&
                  <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p>
                }
              </div>

              <div>
                <label htmlFor='lastname' className="italic font-light text-2xl text-black">
                  {FromProps.formLastName}
                </label>
                <input 
                  type="text"
                  id='lastname'
                  {...register("lastname", 
                    {required: "El apellido es obligatorio", 
                    minLength:{value: 2, message: "El apellido es muy corto"}, 
                    maxLength:{value: 60, message: "El apellido es muy largo"},
                    pattern: {value: /^[a-zA-Z\sñÑüÜ]*$/i, message: "El apellido solo puede contener letras"}}
                  )}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500'
                  placeholder={FromProps.placeholderLastName}
                />
                {
                  errors.lastname &&
                  <p className='text-red-500 text-xs mt-1'>{errors.lastname.message}</p>
                }
              </div>

              <div>
                <label htmlFor='dateofborn' className="italic font-light text-2xl text-black">
                  {FromProps.formDateOfBorn}
                </label>
                <input 
                  type="date"
                  id='dateofborn'
                  {...register("dateofborn", {required: "El fecha de nacimiento es obligatorio"})}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500'
                  placeholder={FromProps.placeholderDateOfBorn}
                />
                {
                  errors.date &&
                  <p className='text-red-500 text-xs mt-1'>{errors.date.message}</p>
                }
              </div>

              <div>
                <label htmlFor='gender' className="italic font-light text-2xl text-black">
                  {FromProps.formGender}
                </label>
                <select
                  id='gender'
                  {...register("gender", {required: "El genero es obligatorio"})}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500'
                  defaultValue=""
                >
                  <option value="" disabled>{FromProps.placeholderGender}</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
                {
                  errors.gender &&
                  <p className='text-red-500 text-xs mt-1'>{errors.gender.message}</p>
                }
              </div>

              <div>
                <label htmlFor='cellphone' className="italic font-light text-2xl text-black">
                  {FromProps.formCellPhone}
                </label>
                <input 
                  type="number"
                  id='cellphone'
                  {...register("cellphone", {required: "El numero de celular es obligatorio"})}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500'
                  placeholder={FromProps.placeholderCellPhone}
                />
                {
                  errors.cellphone &&
                  <p className='text-red-500 text-xs mt-1'>{errors.cellphone.message}</p>
                }
              </div>

              <div>
                <label htmlFor='email' className="italic font-light text-2xl text-black">
                 {FromProps.fomrEmail} 
                </label>
                <input 
                  type="text"
                  id='email'
                  {...register("email", {required: "El correo es obligatorio", pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i, message: "El email no es valido"}})}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500'
                  placeholder={FromProps.placeholderEmail}
                />
                {
                  errors.email &&
                  <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
                }
              </div>

              <div>
                <label htmlFor='date' className="italic font-light text-2xl text-black">
                  {FromProps.fomrDate}
                </label>
                <input 
                  type="date"
                  id='date'
                  {...register("date", {required: "El dia de la cita es obligatorio"})}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500' 
                  placeholder={FromProps.placeholderDate}
                />
                {
                  errors.date &&
                  <p className='text-red-500 text-xs mt-1'>{errors.date.message}</p>
                }
              </div>

              <div>
                <label htmlFor='hour' className="italic font-light text-2xl text-black">
                  {FromProps.fomrHour}
                </label>
              <select
                id="hour"
                {...register("hour", {required: "La hora de la cita es obligatorio"})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-500"
                defaultValue=""
              >
                <option value="" disabled>{FromProps.placeholderHour}</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
              </select>
              {
                errors.hour &&
                <p className='text-red-500 text-xs mt-1'>{errors.hour.message}</p>
              }
              </div>

              <div className='flex justify-center'>
                <button 
                  type='submit'
                  className='bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors duration-300'
                >
                  enviar
                </button>
              </div>

            </div>
        </form>
    </div>
  )
}
