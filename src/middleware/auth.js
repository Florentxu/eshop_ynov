export default function authGuard({ req, next }) {
    if(!localStorage.getItem('token')){
        return false;
    }
    return next();
}