import axios from '../../utils/axios'
import { loadtv } from '../reducers/tvSlice'
export {removetv} from '../reducers/tvSlice'

export const asyncLoadtv = (id)=> async(dispatch,getState)=>{
    try {
        const details = await axios.get(`/tv/${id}`)
        const externalId = await axios.get(`/tv/${id}/external_ids`)
        const recommendations = await axios.get(`/tv/${id}/recommendations`)
        const similar = await axios.get(`/tv/${id}/similar`)
        const translations = await axios.get(`/tv/${id}/translations`)
        const videos = await axios.get(`/tv/${id}/videos`)
        const watchProviders = await axios.get(`/tv/${id}/watch/providers`)

        let ultimateDetails = {
            details:details.data,
            externalId:externalId.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            videos: videos.data.results.find((m) => m.type === "Trailer"),
            watchProviders:watchProviders.data.results.IN,
            translations:translations.data.translations.map((t)=>t.english_name)
            
        }
dispatch(loadtv(ultimateDetails))
    } catch (error) {
        console.log(error);
        
    }
}
