import createError from 'http-errors';
import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return next(createError(401, 'Token não fornecido'));
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		return next(createError(403, 'Token inválido ou expirado'));
	}
}

export default verifyToken;
