import { FromMongoData, MongoDB, ToMongoData } from "../lib/mongodb";
import { OrgNS } from "./org";

export class OrgDALMongo implements OrgNS.DAL {
    constructor(
        private db : MongoDB
    ) { }

    async init() { }

    private col_org = this.db.collection("org");

    async ListOrg() {
        const docs = await this.col_org.find().toArray();
        return FromMongoData.Many<OrgNS.Org>(docs);
    }

    // async GetOrg(id : string) {
    //     const doc = await this.col_org.findOne({_id : id});
    //     return FromMongoData.One<OrgNS.Org>(doc);
    // }

    async CreateOrg(org : OrgNS.Org) {
        const doc = ToMongoData.One(org);
        await this.col_org.insertOne(doc);
    }

    // async UpdateOrg(org : OrgNS.Org) {
    //     const doc = ToMongoData.One(org);
    //     await this.col_org.updateOne({_id : org.id} , {$set : doc});
    // }
}