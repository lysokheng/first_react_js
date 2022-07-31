import {useEffect, useState} from "react";
import axios from "axios";

export function useAxiosGet(URL) {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false,
    });

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false,
        })
        axios.get(URL)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false,
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: false,
                    error: true,
                })
            })
    }, [URL])

    return request;
}