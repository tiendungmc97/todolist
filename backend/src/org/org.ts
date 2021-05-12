export namespace OrgNS {
    export interface Org {
        id : string;
        name : string;
        ctime : number;
        mtime : number;
    }

    export interface User {
        id : string;
        org_id : string;
        username : string;
        first_name : string;
        last_name : string;
        phone : string;
        birthday : string;
        ctime : number;
        mtime : number;
    }

    export interface CreateOrgParams {
        name : string;
    }

    export interface UpdateOrgParams {
        name?: string;
    }

    export interface CreateUserParams {
        username : string;
        org_id : string;
        first_name : string;
        last_name : string;
        phone : string;
        day : string;
        month : string;
        year : string;
    }

    export interface UpdateUserParams {
        first_name? : string;
        last_name? : string;
        phone? : string;
        day? : string;
        month? : string;
        year? : string;
    }

    export interface BLL {
        ListOrg() : Promise<Org[]>;
        CreateOrg(params : CreateOrgParams) : Promise<Org>;
        // UpdateOrg(id : string, params : UpdateOrgParams) : Promise<void>;
    }

    export interface DAL {
        ListOrg() : Promise<Org[]>;
        CreateOrg(Org : Org) : Promise<void>;
        // UpdateOrg(Org : Org) : Promise<void>;
    }

    export interface UserBLL {
        ListUser(org_id : string) : Promise<User[]>;
        GetUser(id : string) : Promise<User>;
        CreateUser(params : CreateUserParams) : Promise<User>;
        UpdateUser(id : string, params : UpdateUserParams) : Promise<void>;
    }

    export interface UserDAL {
        ListUser(org_id : string) : Promise<User[]>;
        GetUser(id : string) : Promise<User>;
        CreateUser(User : User) : Promise<void>;
        UpdateUser(User : User) : Promise<void>;
    }
}