import { Button } from "./components/button"
import { Input } from "./components/input"


function App() {

  return (
  <main className="bg-[#F4F4F4] w-full h-screen flex items-center justify-center">
    <div className="bg-white h-screen md:h-auto max-w-[826px] w-full mx-auto py-10 flex items-center justify-self-center">
      <div className="max-w-[412px] w-full mx-auto">     
      <form action="" className="flex flex-col w-full space-y-3">
      <div>
          <label htmlFor="" className="block w-full">Peso</label>
          <input type="number" className="w-full h-11 flex-1 outline-0 placeholder:text-gray-400 border border-[#E85B81] rounded-xl px-4 focus-within:border-gray-300" placeholder="KG" />
        </div>
        <div className="">
          <label htmlFor="" className="block w-full">Altura</label>
          <input type="number" className="w-full h-11 flex-1 outline-0 placeholder:text-gray-400 border border-[#E85B81] rounded-xl px-4 focus-within:border-gray-300" placeholder="CM(Centímetros)" />
        </div>
        

        <Button className="bg-[#E85B81]  h-11 text-white font-bold rounded-md hover:bg-[#ad4661] transition duration-300">Calcular</Button>
      </form>
      <p className="text-center text-xl text-zinc-400 m-8">Saiba agora se está no seu <br /> peso ideal!</p>

      

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    IMC
                </th>
                <th scope="col" className="px-6 py-3">
                 Classificação
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              
                
                <td className="px-6 py-2">
                    Menos de 17
                </td>
                <td className="px-6 py-2">
                   Muito Abaixo do peso
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              
                
              <td className="px-6 py-2">
                   Entre 17 e 18,49
                </td>
              <td className="px-6 py-2">
                    Abaixo do peso
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              
                
              <td className="px-6 py-2">
                Entre 18,5 e 24,99
                </td>
              <td className="px-6 py-2">
                Peso normal
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              
                
              <td className="px-6 py-2">
                Entre 25 e 29,99
                </td>
              <td className="px-6 py-2">
                    Acima do peso
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              
                
              <td className="px-6 py-2">
                Entre 30 e 34,99
                </td>
              <td className="px-6 py-2">
                Obesidade I
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              
                
              <td className="px-6 py-2">
                Entre 35 e 39,99
                </td>
              <td className="px-6 py-2">
                Obesidade II (severa)
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              
                
              <td className="px-6 py-2">
              Acima de 40
                </td>
              <td className="px-6 py-2">
              Obesidade III (mórbida)
                </td>
            </tr>

            
        
      
        </tbody>
    </table>
</div>

 
      </div>
    </div>
  </main>
  )
}

export default App
