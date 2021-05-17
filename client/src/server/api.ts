import instance from './index';


export default {
    getTest(){
        return instance.get("/api")
    }
}
