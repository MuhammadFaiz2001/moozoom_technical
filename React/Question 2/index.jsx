import React, { useEffect, useState, createContext } from 'react';


const ApiContext = createContext({
    errors: {},
    loading: false,
});

const ApiProvider = ({ children }) => {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const req = (req) => {
            setLoading(true);

            return req;
        };

        const resSuccesss = (res) => {
            setLoading(false);
            setErrors({});
            return res;
        };

        const resError = (err) => {
            setLoading(false);
            setErrors(err);
            return Promise.reject(err);
        };

        const reqId = httpClient.interceptors.request.use(req);
        const resId = httpClient.interceptors.response.use(resSuccesss, resError);

    }, []);

    return <ApiContext.Provider value={{
        errors,
        loading
    }}>{children}</ApiContext.Provider>;
}

export default ApiProvider;