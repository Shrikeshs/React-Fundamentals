import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function useAxiosGet(url){
    const [requests, setRequests] = useState({
        loading: false,
        data: null, 
        error: false
    });
    useEffect(() => {
        setRequests({
            loading: true,
            data: null,
            erroe:false
        })
    
        axios.get(url).then(response => {
            setRequests({
                loading: false,
                data: response.data,
                error: false
            })
        }).catch(()=>{
            setRequests({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url]);
    return requests;
}

