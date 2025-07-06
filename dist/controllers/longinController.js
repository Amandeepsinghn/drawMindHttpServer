"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.signUp = exports.signinSchema = exports.createUserSchema = void 0;
const JWT_SECRET = "123212321";
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(20),
    password: zod_1.z.string(),
    name: zod_1.z.string(),
});
exports.signinSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(20),
    password: zod_1.z.string(),
});
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const parsedData = createUserSchema.safeParse(req.body);
    // if (!parsedData.success) {
    //   res.status(500).json({
    //     body: "Incorrect inputs",
    //   });
    //   return;
    // }
    // try {
    //   const user = await prismaClient.user.create({
    //     data: {
    //       email: parsedData.data.username,
    //       password: parsedData.data.password,
    //       name: parsedData.data.name,
    //     },
    //   });
    //   res.status(200).json({
    //     userId: user.id,
    //   });
    // } catch (e) {
    //   res.status(411).json({
    //     body: "User already exists with this",
    //   });
    // }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const parsedData = signinSchema.safeParse(req.body);
    // if (!parsedData.success) {
    //   res.status(500).json({
    //     body: "Incorrect inputs",
    //   });
    //   return;
    // }
    // const user = await prismaClient.user.findFirst({
    //   where: {
    //     email: parsedData.data.username,
    //     password: parsedData.data.password,
    //   },
    // });
    // if (!user) {
    //   res.status(403).json({
    //     message: "Not authorized",
    //   });
    //   return;
    // }
    // const token = jwt.sign({ userId: user?.id }, JWT_SECRET);
    // res.status(200).json({
    //   token: token,
    // });
});
exports.signIn = signIn;
//# sourceMappingURL=longinController.js.map