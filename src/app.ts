import * as express from "express";

// App config
const app: express.Express = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get('/', (req: express.Request, res: express.Response) => {
  res.send("default endpoint")
})

export default app;
