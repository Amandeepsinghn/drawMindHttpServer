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
exports.chatDelete = exports.chats = void 0;
const prisma_1 = require("../prisma");
const chats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roomId = parseInt(req.params.roomId);
    const messages = yield prisma_1.prismaClient.chat.findMany({
        where: {
            roomId: roomId,
        },
        orderBy: {
            id: "desc",
        },
        take: 100,
    });
    res.status(200).json({
        messages,
    });
});
exports.chats = chats;
const chatDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roomId = parseInt(req.body.roomId);
    const messages = yield prisma_1.prismaClient.chat.deleteMany({
        where: {
            roomId: roomId,
        },
    });
    res.status(200).json({
        body: "deleted all data",
    });
});
exports.chatDelete = chatDelete;
//# sourceMappingURL=chatControllers.js.map