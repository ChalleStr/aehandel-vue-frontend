import http from '../http-common';

class AgeraService {
    getAllProducts() {
        return http.get('/products');
    }
    getId() {
        return http.get(`products/${id}`);
    }

    
}

export default new AgeraService();