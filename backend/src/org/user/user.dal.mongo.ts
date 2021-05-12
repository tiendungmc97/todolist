import { FromMongoData, MongoDB, ToMongoData } from "../../lib/mongodb";
import { OrgNS } from "../org";

export class UserDALMongo implements OrgNS.UserDAL {
    constructor(
        private db : MongoDB
    ) { }

    async init() { }

    private col_user = this.db.collection("user");

    async ListUser(org_id : string) {
        const docs = await this.col_user.find({org_id : org_id}).toArray();
        return FromMongoData.Many<OrgNS.User>(docs);
    }

    async GetUser(id : string) {
        const doc = await this.col_user.findOne({_id : id});
        return FromMongoData.One<OrgNS.User>(doc);
    }

    async CreateUser(user : OrgNS.User) {
        const doc = ToMongoData.One(user);
        await this.col_user.insertOne(doc);
    }

    async UpdateUser(user : OrgNS.User) {
        const doc = ToMongoData.One(user);
        await this.col_user.updateOne({ _id : user.id } , {$set : doc});
    }

    async DeleteUser(id : string) {
        await this.col_user.deleteOne({_id : id});
    }

}