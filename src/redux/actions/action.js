export const Add =(value)=>{
            return{
                  type:"ADD_DATA",
                  payload: value
            }
}
export const Remove =(id)=>{
            return{
                  type:"REMOVE_DATA",
                  payload: id
            }
      }
export const Update =(value,id)=>{
            return{
                  type:"UPDATE_DATA",
                  payload: value,
                  ID:id
            }
}