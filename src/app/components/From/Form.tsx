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
    placeholderHour: string;
    requiredName: string;
    minLengthName: string;
    maxLengthName: string;
    messageName: string;
    requiredLastname: string;
    minLengthLastname: string;
    maxLengthLastname: string;
    messageLastname: string
    requiredDateofborn: string
    requiredGender: string
    requiredCellphone: string
    requiredEmail: string
    messageEmail: string
    requiredDate: string
    requiredHour: string

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
  const {register, handleSubmit, formState:{errors}} = useForm<Inputs>()
  
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
    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-2xl rounded-3xl p-8 md:p-10 max-w-4xl mx-auto transform hover:scale-[1.01] transition-all duration-300">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-300">Formulario de Cita</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mx-auto rounded-full"></div>
        </div>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              
              <div className="group">
                <label htmlFor='name' className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {FromProps.formName}
                </label>
                <input 
                  type="text"
                  id='name'
                  {...register("name",
                    {required: (FromProps.requiredName),
                    minLength:{value: 2, message: (FromProps.minLengthName)},
                    maxLength:{value: 60, message: (FromProps.maxLengthName)},
                    pattern: {value: /^[a-zA-Z\sñÑüÜ]*$/i, 
                    message: (FromProps.messageName)}}
                  )}
                  className='w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent text-gray-700 dark:text-gray-100 transition-all duration-300 bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600'
                  placeholder={FromProps.placeholderName}
                />
                {
                  errors.name &&
                  <p className='text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1'>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name.message}
                  </p>
                }
              </div>

              <div className="group">
                <label htmlFor='lastname' className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {FromProps.formLastName}
                </label>
                <input 
                  type="text"
                  id='lastname'
                  {...register("lastname", 
                    {required: (FromProps.requiredLastname), 
                    minLength:{value: 2, message: (FromProps.minLengthLastname)}, 
                    maxLength:{value: 60, message: (FromProps.maxLengthLastname)},
                    pattern: {value: /^[a-zA-Z\sñÑüÜ]*$/i, 
                    message: (FromProps.messageLastname)}}
                  )}
                  className='w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent text-gray-700 dark:text-gray-100 transition-all duration-300 bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600'
                  placeholder={FromProps.placeholderLastName}
                />
                {
                  errors.lastname &&
                  <p className='text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1'>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.lastname.message}
                  </p>
                }
              </div>

              <div className="group">
                <label htmlFor='dateofborn' className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {FromProps.formDateOfBorn}
                </label>
                <input 
                  type="date"
                  id='dateofborn'
                  {...register("dateofborn", 
                  {required: (FromProps.requiredDateofborn)})}
                  className='w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent text-gray-700 dark:text-gray-100 transition-all duration-300 bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600'
                  placeholder={FromProps.placeholderDateOfBorn}
                />
                {
                  errors.date &&
                  <p className='text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1'>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.date.message}
                  </p>
                }
              </div>

              <div className="group">
                <label htmlFor='gender' className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {FromProps.formGender}
                </label>
                <select
                  id='gender'
                  {...register("gender", 
                  {required: (FromProps.requiredGender)})}
                  className='w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent text-gray-700 dark:text-gray-100 transition-all duration-300 bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600'
                  defaultValue=""
                >
                  <option value="" disabled>{FromProps.placeholderGender}</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
                {
                  errors.gender &&
                  <p className='text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1'>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.gender.message}
                  </p>
                }
              </div>

              <div className="group">
                <label htmlFor='cellphone' className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {FromProps.formCellPhone}
                </label>
                <input 
                  type="number"
                  id='cellphone'
                  {...register("cellphone", 
                  {required: (FromProps.requiredCellphone)})}
                  className='w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent text-gray-700 dark:text-gray-100 transition-all duration-300 bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600'
                  placeholder={FromProps.placeholderCellPhone}
                />
                {
                  errors.cellphone &&
                  <p className='text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1'>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.cellphone.message}
                  </p>
                }
              </div>

              <div className="group">
                <label htmlFor='email' className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                 {FromProps.fomrEmail} 
                </label>
                <input 
                  type="text"
                  id='email'
                  {...register("email", 
                  {required: (FromProps.requiredEmail), 
                  pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i, 
                  message: (FromProps.messageEmail)}})}
                  className='w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent text-gray-700 dark:text-gray-100 transition-all duration-300 bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600'
                  placeholder={FromProps.placeholderEmail}
                />
                {
                  errors.email &&
                  <p className='text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1'>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email.message}
                  </p>
                }
              </div>

              <div className="group">
                <label htmlFor='date' className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {FromProps.fomrDate}
                </label>
                <input 
                  type="date"
                  id='date'
                  {...register("date", 
                  {required: (FromProps.requiredDate)})}
                  className='w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent text-gray-700 dark:text-gray-100 transition-all duration-300 bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600' 
                  placeholder={FromProps.placeholderDate}
                />
                {
                  errors.date &&
                  <p className='text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1'>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.date.message}
                  </p>
                }
              </div>

              <div className="group">
                <label htmlFor='hour' className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {FromProps.fomrHour}
                </label>
              <select
                id="hour"
                {...register("hour", 
                {required: (FromProps.requiredHour)})}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent text-gray-700 dark:text-gray-100 transition-all duration-300 bg-gray-50 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-600"
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
                <p className='text-red-500 dark:text-red-400 text-sm mt-2 flex items-center gap-1'>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.hour.message}
                </p>
              }
              </div>

              <div className='md:col-span-2 flex justify-center mt-4'>
                <button 
                  type='submit'
                  className='group relative bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-600 dark:hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-2xl dark:shadow-purple-900/50 transform hover:scale-105 active:scale-95'
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Enviar Solicitud
                  </span>
                </button>
              </div>

            </div>
        </form>
    </div>
  )
}
