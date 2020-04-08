import JwtDecode from 'jwt-decode';

let cookieparser = require('cookieparser');

export function getUserFromCookie(req) {
	if (process.server && process.static) return;
	if (!req.headers.cookie) return;

	if (req.headers.cookie) {
		const parsed = cookiepareser.parse(req.headers.cookie);
		const assessTokenCookie = parsed.access_token;
		if (!accessTokenCookie) return;

		const decodedToken = JwtDecode(accessTokenCookie);
		if (!decodedToken) return;

		return decodedToken;
	}
}
