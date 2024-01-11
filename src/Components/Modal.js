import { Input } from './Input'

export default function Modal({data,onChangePopUp,isVisible,onChange}) {

  if(!isVisible){
    return null
  }  

  return (
        
    <div onClick={() => onChangePopUp(false)} className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">

        <div className="bg-gray-600 p-8 text-center rounded-lg">
            
            <h1 className="text-white font-bold text-[30px]">Modify</h1>

            <Input name='name' value={data.name} Placeholder='Category Name' onChange={onChange}/>

            <button>Save</button>
        </div>

    </div>


  )
}
