import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get("/shop");
}
  
const create = (data) => {
    return httpClient.post("/shop", data);
}

const get = id => {
    return httpClient.get("/shop/${id}");
}

const update = (data) => {
    return httpClient.put("/shop", data);
}

const remove = shop_id => {
    return httpClient.delete("/shop/${shop_id}");
}
export default { getAll, create, get, update, remove };