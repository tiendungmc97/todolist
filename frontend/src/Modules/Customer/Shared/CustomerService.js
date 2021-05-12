class CustomerService {
    constructor() {
        if (CustomerService._instance) {
            return CustomerService._instance
        }
        CustomerService._instance = this;

        // ... Your rest of the constructor code goes after this

    }

    userName = 'hehehe';

    getUserName() {
        return this.userName;
    }
}

const instance = new CustomerService();

export default instance;