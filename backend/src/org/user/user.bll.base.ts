import rand from "../../lib/rand";
import { OrgNS } from "../org";

export class UserBLLBase implements OrgNS.UserBLL {
    constructor(
        private dal : OrgNS.UserDAL,
    )
    { }

    async init() { }

    async ListUser(org_id : string) {
        return this.dal.ListUser(org_id);
    }

    async GetUser(id : string) {
        const user = await this.dal.GetUser(id);
        if (!user) {
            throw console.error();
        }
        return user;
    }

    async CreateUser(params : OrgNS.CreateUserParams) {
        const now = Date.now();
        const bd = new Date();
        bd.setDate(parseInt(params.day));
        bd.setMonth(parseInt(params.month)-1);
        bd.setFullYear(parseInt(params.year));
        const birthday = bd.toISOString().substring(0,10);
        const user = {
            id : rand.uppercase(8),
            username : params.username,
            org_id : params.org_id,
            first_name : params.first_name,
            last_name : params.last_name,
            phone : params.phone,
            birthday : birthday,
            ctime : now,
            mtime : now,
        }
        await this.dal.CreateUser(user);
        return user;
    }

    async UpdateUser(id : string, params : OrgNS.UpdateUserParams) {
        const user = await this.GetUser(id);
        const bd = new Date();
        if (params.first_name) {
            user.first_name = params.first_name;
        }

        if (params.last_name) {
            user.last_name = params.last_name;
        }

        if (params.phone) {
            user.phone = params.phone;
        }

        if (params.day) {
            bd.setDate(parseInt(params.day)+1);
            bd.setMonth(parseInt(user.birthday.substring(5,7))-1);
            bd.setFullYear(parseInt(user.birthday.substring(0,4)));
            const birthday = bd.toISOString().substring(0,10);
            user.birthday = birthday;
        }

        if (params.month) {
            bd.setDate(parseInt(user.birthday.substring(8,10))+1);
            bd.setMonth(parseInt(params.month) - 1);
            bd.setFullYear(parseInt(user.birthday.substring(0,4)));
            const birthday = bd.toISOString().substring(0,10);
            user.birthday = birthday;
        }

        if (params.year) {
            bd.setDate(parseInt(user.birthday.substring(8,10))+1);
            bd.setMonth(parseInt(user.birthday.substring(5,7))-1);
            bd.setFullYear(parseInt(params.year));
            const birthday = bd.toISOString().substring(0,10);
            user.birthday = birthday;
        }

        user.mtime = Date.now();
        await this.dal.UpdateUser(user);
    }

    // async DeleteUser(id : string) {
    //     const user = await this.GetUser(id);
    //     await this.dal.DeleteUser(id);
    //     return user;
    // }
}