import axios from "axios"
const requset=axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyCdgPuigcreGjNfR50OGZJE_PJuXBuUHOQ",
    }
})
export default requset