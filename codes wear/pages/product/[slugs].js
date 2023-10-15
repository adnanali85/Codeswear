import { useRouter } from 'next/router'

const post =() => {
    const router = useRouter()
    const {slugs} = router.query 

    return<p>the slug is {slugs}</p>
}
export default post;