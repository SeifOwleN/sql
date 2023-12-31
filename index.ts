import cors from "cors";
import express from "express";
import authorRouter from "./controllers/author";
import blogRouter from "./controllers/blog";
import loginRouter from "./controllers/login";
import logoutRouter from "./controllers/logout";
import rListRouter from "./controllers/readingList";
import userRouter from "./controllers/user";
import { PORT } from "./util/config";
import { connectToDatabase } from "./util/db";
import { tokenExtractor, userExtractor } from "./util/middleware";
require("express-async-errors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(tokenExtractor);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/logout", logoutRouter);
app.use(userExtractor);
app.use("/api/blogs", blogRouter);
app.use("/api/author", authorRouter);
app.use("/api/rList", rListRouter);

app.listen(PORT, async () => {
	await connectToDatabase();
	console.log(PORT);
});
