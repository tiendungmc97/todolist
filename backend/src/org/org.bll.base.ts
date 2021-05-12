import rand from "../lib/rand";
import { OrgNS } from "./org";

export class OrgBLLBase implements OrgNS.BLL {
    constructor(
        private dal : OrgNS.DAL,
    ) { }

    async init() { }

    async ListOrg() {
        return this.dal.ListOrg();
    }

    // async GetOrg(id:string) {
    //     const org = await this.dal.GetOrg(id);
    //     if (!org) {
    //         throw console.error();
    //     }
    //     return org;
    // }

    async CreateOrg(params : OrgNS.CreateOrgParams) {
        const now = Date.now();
        const org : OrgNS.Org = {
            id : rand.uppercase(8),
            name : params.name,
            ctime : now,
            mtime : now
        }
        await this.dal.CreateOrg(org);
        return org;
    }

    // async UpdateOrg(id : string, params : OrgNS.UpdateOrgParams) {
    //     const org = await this.dal.GetOrg(id);
    //     if (params.name) {
    //         org.name = params.name;
    //     }
    //     org.mtime = Date.now();
    //     await this.dal.UpdateOrg(org);
    // }
}
