import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDMwNTU2NTQwZWQ5MzA4MmUyMjAzOWExM2YyMDg1ZSIsIm5iZiI6MTczNjM0NzA1OC44NzAwMDAxLCJzdWIiOiI2NzdlOGRiMjA0NGI2Y2E2NzY0ZTY0NmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.RqydPncKx_XdmspMcvawkV1Y4Ou4fvrfStzG4KHJKQk'
      }
})

export default instance