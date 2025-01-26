import axios from "axios"
export const imageUpload = async ( image) => {
    const fromData = new FormData()
    fromData.append('image', image)
    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API}`, fromData)
    return data.data.display_url
}

export const saveUser = async (user) =>{
    await axios.post(`${import.meta.env.VITE_SERVER_API}/users/${user.email}`,{
        name : user.displayName,
        email: user?.email,

    })
}