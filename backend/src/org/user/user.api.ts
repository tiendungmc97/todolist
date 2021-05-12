import * as express from "express"
import { HttpParamValidators } from "../../lib/http";
import { OrgNS } from "../org";

export function NewUserAPI (
    userBLL : OrgNS.UserBLL,
) {
    const app = express();

    //Get list user
    app.get("/list", async (req,res) => {
        const org_id = HttpParamValidators.MustBeString(req.query , "org_id" , 8);
        const docs = await userBLL.ListUser(org_id);
        res.json(docs);
    })

    //Get one user
    app.get("/get", async (req,res) => {
        const id = HttpParamValidators.MustBeString(req.query , "id" , 8);
        const doc = await userBLL.GetUser(id);
        res.json(doc);
    })

    //Create new user
    app.post("/create" , async (req,res) => {
        const username = HttpParamValidators.MustBeString(req.body, "username", 2);
        const org_id =  HttpParamValidators.MustBeString(req.body, "org_id" , 8);
        const first_name = HttpParamValidators.MustBeString(req.body, "first_name" , 2);
        const last_name = HttpParamValidators.MustBeString(req.body, "last_name" , 2);
        const phone = HttpParamValidators.MustBeString(req.body, "phone", 10);
        const day = HttpParamValidators.MustBeString(req.body, "day", 1);
        const month = HttpParamValidators.MustBeString(req.body, "month" ,1);
        const year = HttpParamValidators.MustBeString(req.body, "year" , 4 , 4);

        const params : OrgNS.CreateUserParams = {
            username,
            org_id,
            first_name,
            last_name,
            phone,
            day,
            month,
            year
        }
        const user = await userBLL.CreateUser(params);
        res.json(user);
    })

    //Update user
    app.post("/update" , async (req,res) => {
        const id = HttpParamValidators.MustBeString(req.query , "id");
        const params : OrgNS.UpdateUserParams =  {};

        if (req.body.first_name) {
            params.first_name = HttpParamValidators.MustBeString(req.body, "first_name",2);
        }

        if (req.body.last_name) {
            params.first_name = HttpParamValidators.MustBeString(req.body, "last_name",2);;
        }

        if(req.body.phone) {
            params.phone = HttpParamValidators.MustBeString(req.body, "phone" , 10);
        }

        if (req.body.day) {
            params.day = HttpParamValidators.MustBeString(req.body, "day", 1);
        }

        if (req.body.month) {
            params.month = HttpParamValidators.MustBeString(req.body, "month" ,1);
        }

        if (req.body.year) {
            params.year = HttpParamValidators.MustBeString(req.body, "year" , 4 , 4);
        }

        await userBLL.UpdateUser(id, params);
        res.json(`ID ${id} updated`)
    })

    // //Delete user
    // app.post("/delete" , async (req,res) => {
    //     const user_id = HttpParamValidators.MustBeString(req.query, "id" ,8);
    //     await userBLL.DeleteUser(user_id as string);
    //     res.json({message : `1 User deleted`})
    // })

    return app;
}