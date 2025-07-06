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
exports.bulk = exports.getData = exports.roomSlug = exports.room = exports.createRoomSchema = void 0;
const prisma_1 = require("../prisma");
const zod_1 = require("zod");
exports.createRoomSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(20),
});
const room = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedData = exports.createRoomSchema.safeParse(req.body);
        if (!parsedData.success) {
            res.status(500).json({
                body: "Incorrect inputs",
            });
            return;
        }
        const userId = req.userId;
        const latestData = {
            slug: parsedData.data.name,
            adminId: userId,
        };
        const room = yield prisma_1.prismaClient.room.create({
            data: latestData,
        });
        res.status(200).json({
            roomId: room.id,
        });
    }
    catch (_a) {
        res.status(411).json({
            body: "Room cannot be created",
        });
    }
});
exports.room = room;
const roomSlug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const slug = req.params.slug;
    const room = yield prisma_1.prismaClient.room.findFirst({
        where: {
            slug: slug,
        },
    });
    res.status(200).json({
        room: room,
    });
});
exports.roomSlug = roomSlug;
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.prismaClient.room.findMany({
        select: {
            id: true,
            slug: true,
            createdAt: true,
        },
    });
    res.status(200).json(data.map((user) => ({
        roomName: user.slug,
        roomId: user.id,
        createdAt: user.createdAt,
    })));
});
exports.getData = getData;
const bulk = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log("We are inside dataquery");
        const roomName = ((_a = req.query.filter) === null || _a === void 0 ? void 0 : _a.toString()) || "";
        const data = yield prisma_1.prismaClient.room.findMany({
            where: {
                OR: [{ slug: { contains: roomName, mode: "insensitive" } }],
            },
            select: {
                id: true,
                slug: true,
                createdAt: true,
            },
        });
        res.status(200).json(data.map((user) => ({
            roomName: user.slug,
            roomId: user.id,
            createdAt: user.createdAt,
        })));
    }
    catch (_b) {
        res.status(500).json({
            message: "something went wrong",
        });
    }
});
exports.bulk = bulk;
//# sourceMappingURL=roomController.js.map