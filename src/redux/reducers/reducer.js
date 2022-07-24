  const initialState={
      user_info : []
  }
  
  export const  todolist =(state=initialState,action)=>{
      switch (action.type){
            case "ADD_DATA":
                return{
                  ...state,
                  user_info: [...state.user_info,action.payload]
                }
                case 'REMOVE_DATA':
                  const dltData =state.user_info.filter((elem,k)=>
                        k !==action.payload
                                    )
                  return{
                      ...state,
                      user_info:dltData,
                  }
                case 'UPDATE_DATA':
             
                  const updateData =state.user_info.map((elem,k)=>
                  k ===action.ID ? action.payload  :elem,
                              )    
                  return{
                      ...state,
                      user_info:updateData,
                  }
              default:
                  return state

                            
      }
}
