import * as express from 'express';
import { HttpError, HttpStatusCodes, HttpParamValidators } from '../lib/http';
import { TodoNS } from './todo';
import { NewAuthMiddleware, GetAuthData } from '../auth/auth.api.middleware';
import { UserAuthNS } from '../auth/auth';
import { OrgNS } from '../org/org';

export function NewTodoAPI(
    userAuthBLL: UserAuthNS.BLL,
    todoBLL: TodoNS.BLL,
    orgBLL: OrgNS.BLL
) {
    const app = express();
    app.use(NewAuthMiddleware(userAuthBLL));
    app.post("/todo/create", async (req, res) => {
        const { user_id } = GetAuthData(req);
        const title = HttpParamValidators.MustBeString(req.body, 'title', 2);
        const type = HttpParamValidators.MustBeString(req.body, "type", 2)
        const params: TodoNS.CreateTodoParams = {
            user_id,
            title,
            type
        };
        const todo = await todoBLL.CreateTodo(params);
        res.json(todo);
    });
    app.get("/todo/list", async (req, res) => {
        const { user_id } = GetAuthData(req);
        const docs = await todoBLL.ListTodo(user_id);
        res.json({user_id, docs});
    });
    app.post("/todo/update", async (req, res) => {
        const todo_id = HttpParamValidators.MustBeString(req.body, 'id');
        // const todo_id = req.body.id as string;
        const params: TodoNS.UpdateTodoParams = {};
        if (req.body.title) {
            params.title = HttpParamValidators.MustBeString(req.body, 'title', 2);
        }
        await todoBLL.UpdateTodo(todo_id, params);
        const  doc = await todoBLL.GetTodo(todo_id);
        res.json(doc);
    });
    app.get("/todo/get", async (req, res) => {
        const doc = await todoBLL.GetTodo(req.query.id as string);
        res.json(doc);
    });
    app.post("/todo/delete", async (req, res) => {
        const doc = await todoBLL.DeleteTodo(req.query.id as string);
        res.json(doc);
    });
    const commonErrors = new Set([
        ...Object.values(TodoNS.Errors),
    ]);
    app.use((err: Error, req, res, next) => {
        if (commonErrors.has(err)) {
            err = new HttpError(err.message, HttpStatusCodes.BadRequest);
        }
        next(err);
    });
    return app;
}