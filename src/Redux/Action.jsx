export const addData = (val) => ({
    type:"Add_User",
    payload:val,

})

export const deleteData = (val) => ({
    type:"Delete_User",
    payload:val,
})

export const updateData = (val) => ({
    type:"Update_User",
    payload:val,
})