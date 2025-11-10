import { Form } from '../components/From/Form';
import { getDictionary } from "./dictionaries";
import { ThemeToggle } from '../components/ThemeToggle/ThemeToggle';

export default async function Home({params}: {params:Promise<{lang: 'es-ES' | 'en-US' }>}) {
  const {lang} = await params
  const dict = await getDictionary(lang)
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnptMCAwYzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      {/* Theme Toggle Button - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <header className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-2xl border-b-4 border-purple-500 dark:border-purple-600 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="text-center space-y-3">
            <div className="inline-block animate-pulse">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              {dict.HomePage.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium transition-colors duration-300">
              {dict.HomePage.description}
            </p>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 sm:px-6 py-10">
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
