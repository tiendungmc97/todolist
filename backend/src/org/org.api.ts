import * as express from "express";
import { HttpParamValidators } from "../lib/http";
import { OrgNS } from "./org";

export function NewOrgAPI (
    orgBLL : OrgNS.BLL,
) {
    const app = express();

    //Get list org
    app.get("/org/list", async (req,res) => {
        const docs = await orgBLL.ListOrg();
        res.json(docs);
    })

    // //Get one
    // app.get("/org/get", async (req,res) => {
    //     const id = HttpParamValidators.MustBeString(req.query , "id" , 8);
    //     const doc = await orgBLL.GetOrg(id);
    //     res.json(doc);
    // })

    //Create new org
    app.post("/org/create" , async (req,res) => {
        const name = HttpParamValidators.MustBeString(req.body , "name" , 2);
        const params : OrgNS.CreateOrgParams = {
            name
        };
        const org = await orgBLL.CreateOrg(params);
        res.json(org);
    })

    return app;
}