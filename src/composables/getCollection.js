import { ref, watchEffect} from 'vue';
import { projectAuth, projectFirestore } from '../firebase/config';

const getCollection = (collection) =>{
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')

    const unsub = collectionRef.onSnapshot((snap)=>{
        let results = []
        snap.docs.forEach(doc => {            
            doc.data().createdAt && results.push({...doc.data(), id:doc.id})
        })
        documents.value = results
        error.value = null
    }, (err)=>{
        console.log(err.message)
        documents.value = nullerror.value = 'could not fetch data'
    })

    watchEffect((onInvalidate)=>{
        onInvalidate(()=>unsub())
    })

    return {documents, error}
}

export default getCollection