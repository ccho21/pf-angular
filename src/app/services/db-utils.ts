import { Post } from "@app/posts/model/post"
import firebase from "firebase/compat"


export function convertSnaps<T>(results: any)  {
    return <T[]> results.docs.map((snap: { id: any; data: () => any }) => {
        return {
            id: snap.id,
            ...<any>snap.data()
        }
    })

}
