import axios from "axios"
import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import Loader from "../components/Loader"
import { useAppSelector } from "../main"
import { login, purchase } from "../reducers/login"
import getUserInfo from "../utils/getUserInfo"
import { User } from "./Login"

export interface CandidateProps {
    id: number,
    first_name: string,
    last_name: string,
    abilities?: [],
    phone?: string,
    email?: string,
    slug?: string,
    favourite?: boolean
}

export default function Candidate({ id, slug }: CandidateProps) {
    const auth = useAppSelector(state => state.login)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { points } = auth.data
    const user_id = auth.data.id
    const { access, refresh } = auth.tokens
    const [loading, setLoading] = useState({
        page: true,
        purchase: false
    })
    const [candidateDetails, setCandidateDetails] = useState({
        is_purchased: false,
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
    })

    const handlePurchase = async () => {
        if(points < 1) return navigate('/punkty')
        setLoading(prev => ({...prev, purchase: true}))
        let data = { candidate: id, employer: user_id, refresh }
        const resp = await axios.post('/api/oferty/purchase', data)
        if(resp.status === 200) dispatch(purchase())
        return setLoading(prev => ({...prev, purchase: false}))
    }

    useEffect(() => {
        setLoading(prev => ({...prev, page: true}))
        axios.get(`/api/oferty/${slug}${id}?u=` + user_id, { headers: { 'Authorization': 'Bearer ' + access }})
            .then(res => res.data)
            .then(data => setCandidateDetails(data[0]))
            .finally(() => setLoading(prev => ({...prev, page: false})))
    }, [points])

    if(loading.page) return <Loader />

    return (
        <div className="flex flex-col gap-6">
            <h1>{candidateDetails.first_name} {candidateDetails.last_name}</h1>
            <div className="flex items-center gap-4">
                <h2>{candidateDetails.email ? candidateDetails.email : candidateDetails.first_name.charAt(0).toLowerCase() + '******@*****.***'}</h2>
                <h2>{candidateDetails.phone ? candidateDetails.phone : '+48 *** *** ***'}</h2>
            </div>
            {!candidateDetails.is_purchased && 
                <div className="flex items-center gap-4">
                    <button onClick={handlePurchase} className="bg-primary transition-colors max-w-max font-medium hover:bg-darkPrimary text-white rounded flex items-center py-2 px-6">Wykup kontakt za 1 punkt</button>
                    {loading.purchase && <Loader />}    
                </div>
            }
        </div>            
    )
}