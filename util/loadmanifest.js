import Loader from '../component/Loader/Loader'
const microAppURLResolver = async (manifestPath)=> {
    const result =[]
    for (var key of Object.keys(manifestPath)) {
        const filepath = manifestPath[key]
        const response = await fetch(filepath)
        const  data = await response.json()

        for (var key of Object.keys(data)){
           const temp =  <Loader url={data[key]} id={`${filepath}-${key}`} loading='' key={result.length}/>
           result.push(temp)
        }
    }
    return result
    
}
export default microAppURLResolver