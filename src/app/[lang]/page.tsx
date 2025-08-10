import { Form } from '../components/From/Form';
import { getDictionary } from "./dictionaries";

export default async function Home({params}: {params:Promise<{lang: 'es-ES' | 'en-US' }>}) {
  const {lang} = await params
  const dict = await getDictionary(lang)
  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-purple-300">
      <header className="bg-white shadow-md p-4">
        <div className="mx-auto max-w-7xl">
          <h1 className=" text-center text-3xl font-bold text-gray-900">
            {dict.HomePage.title}
          </h1>
          <p className="text-center mt-2 text-gray-700">
            {dict.HomePage.description}
          </p>
        </div>
      </header>

      <main className=" mx-auto max-w-4xl px-6 py8">
        <Form formName={dict.ComponentsForm.formName}
        formLastName={dict.ComponentsForm.formLastName}
        formDateOfBorn={dict.ComponentsForm.formDateOfBorn}
        formGender={dict.ComponentsForm.formGender}
        formCellPhone={dict.ComponentsForm.formCellPhone}
        fomrEmail={dict.ComponentsForm.fomrEmail}
        fomrDate={dict.ComponentsForm.fomrDate}
        fomrHour={dict.ComponentsForm.fomrHour} 
        placeholderName={dict.ComponentsForm.placeholderName} 
        placeholderLastName={dict.ComponentsForm.placeholderLastName} 
        placeholderDateOfBorn={dict.ComponentsForm.placeholderDateOfBorn} 
        placeholderGender={dict.ComponentsForm.placeholderGender} 
        placeholderCellPhone={dict.ComponentsForm.placeholderCellPhone} 
        placeholderEmail={dict.ComponentsForm.placeholderEmail} 
        placeholderDate={dict.ComponentsForm.placeholderDate} 
        placeholderHour={dict.ComponentsForm.placeholderHour}
        requiredName={dict.ComponentsForm.requiredName}
        minLengthName={dict.ComponentsForm.minLengthName}
        maxLengthName={dict.ComponentsForm.maxLengthName}
        messageName={dict.ComponentsForm.messageName}
        requiredLastname={dict.ComponentsForm.requiredLastname}
        minLengthLastname={dict.ComponentsForm.minLengthLastname}
        maxLengthLastname={dict.ComponentsForm.maxLengthLastname}
        messageLastname={dict.ComponentsForm.messageLastname}
        requiredDateofborn={dict.ComponentsForm.requiredDateofborn}
        requiredGender={dict.ComponentsForm.requiredGender}
        requiredCellphone={dict.ComponentsForm.requiredCellphone}
        requiredEmail={dict.ComponentsForm.requiredEmail}
        messageEmail={dict.ComponentsForm.messageEmail}
        requiredDate={dict.ComponentsForm.requiredDate}
        requiredHour={dict.ComponentsForm.requiredHour}
        />
      </main>
    </section>
  );
}
