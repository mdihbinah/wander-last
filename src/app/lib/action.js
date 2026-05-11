'use server'
import { revalidatePath } from "next/cache"



export const deleteAction = async(_id) => {
    
    const res = await fetch(`http://localhost:5000/destinations/${_id}`,{
                method: 'DELETE',
                headers:{
                    'content-type': 'application/json'
                }
            })
    
            const data = await res.json()
            if(data.deletedCount > 0){
                revalidatePath('/destinations')
            }
            return data
}