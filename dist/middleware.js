"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = middleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = "123212321";
function middleware(req, res, next) {
    var _a;
    const token = (_a = req.headers["authorization"]) !== null && _a !== void 0 ? _a : "";
    const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    if (typeof decoded === "object" && "userId" in decoded) {
        req.userId = decoded.userId;
        next();
    }
    else {
        res.status(403).json({
            message: "Unauthorized",
        });
    }
}
//# sourceMappingURL=middleware.js.map