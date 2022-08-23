import axios from "axios";

export default ({ req }) => {
    if(typeof window === 'undefined') {
        // we are on the server!
        // <serviceName>.<namespaceName>.svc.cluster.local
        // baseURL: http://ingress-nginx-controller.ingress-nginx.svc.cluster.local
        return axios.create({
            baseURL: 'http://www.ticketing-app-prod.art/',
            headers: req.headers
        })
    } else {
        // we are on the browser!
        return axios.create({ 
            baseURL: '/'
        });
    }
}