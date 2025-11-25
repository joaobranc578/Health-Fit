import 'dotenv/config';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import createError from 'http-errors';
import express from 'express';
import morgan from 'morgan';

import authRouter from '#routes/auth.js';
import indexRouter from '#routes/index.js';
import productRouter from '#routes/product.js';
import commentRouter from '#routes/comment.js';

const app = express();
const port = process.env.PORT;

app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/products', commentRouter);

app.use((req, res, next) => {
	next(createError(404));
});

// global error handler 
app.use((err, req, res, next) => {
	console.error(err.stack)

	if (res.headersSent) {
		return next(err)
	}

	const status = err.status || err.statusCode || 500
	const message = err.message || 'Ocorreu um erro inesperado no servidor.'

	res.status(status).json({ error: message })
})

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
