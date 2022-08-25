import { Express, Request, Response } from "express";
import { createProductHandler, getProductHandler, updateProductHandler, deleteProductHandler, } from "./controller/Product-Controller";
import { createUserSessionHandler, getUserSessionsHandler, deleteSessionHandler, } from "./controller/Session-Controller";
import { createUserHandler } from "./controller/User-Controller";
import requireUser from "./middleware/requireUser";
import validateResource from "./middleware/validateResource";
import { createProductSchema, deleteProductSchema, getProductSchema, updateProductSchema, } from "./schema/Product-Schema";
import { createSessionSchema } from "./schema/Session-Schema";
import { createUserSchema } from "./schema/User-Schema";

function routes(app: Express) {

    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    app.post("/api/users", validateResource(createUserSchema), createUserHandler);

    app.post(
        "/api/sessions",
        validateResource(createSessionSchema),
        createUserSessionHandler
    );

    app.get("/api/sessions", requireUser, getUserSessionsHandler);

    app.delete("/api/sessions", requireUser, deleteSessionHandler);

    app.post(
        "/api/products",
        [requireUser, validateResource(createProductSchema)],
        createProductHandler
    );

    app.put(
        "/api/products/:productId",
        [requireUser, validateResource(updateProductSchema)],
        updateProductHandler
    );

    app.get(
        "/api/products/:productId",
        validateResource(getProductSchema),
        getProductHandler
    );

    app.delete(
        "/api/products/:productId",
        [requireUser, validateResource(deleteProductSchema)],
        deleteProductHandler
    );
}

export default routes;