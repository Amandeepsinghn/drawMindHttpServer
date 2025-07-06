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
// import { prismaClient } from "../prisma";
const zod_1 = require("zod");
exports.createRoomSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).max(20),
});
const room = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    //   const parsedData = createRoomSchema.safeParse(req.body);
    //   if (!parsedData.success) {
    //     res.status(500).json({
    //       body: "Incorrect inputs",
    //     });
    //     return;
    //   }
    //   const userId = req.userId;
    //   const latestData: Data = {
    //     slug: parsedData.data.name,
    //     adminId: userId,
    //   };
    //   const room = await prismaClient.room.create({
    //     data: latestData,
    //   });
    //   res.status(200).json({
    //     roomId: room.id,
    //   });
    // } catch {
    //   res.status(411).json({
    //     body: "Room cannot be created",
    //   });
    // }
});
exports.room = room;
const roomSlug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const slug = req.params.slug;
    // const room = await prismaClient.room.findFirst({
    //   where: {
    //     slug: slug,
    //   },
    // });
    // res.status(200).json({
    //   room: room,
    // });
});
exports.roomSlug = roomSlug;
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const data = await prismaClient.room.findMany({
    //   select: {
    //     id: true,
    //     slug: true,
    //     createdAt: true,
    //   },
    // });
    // res.status(200).json(
    //   data.map((user: { id: number; slug: string; createdAt: Date }) => ({
    //     roomName: user.slug,
    //     roomId: user.id,
    //     createdAt: user.createdAt,
    //   }))
    // );
});
exports.getData = getData;
const bulk = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // try {
    //   console.log("We are inside dataquery");
    //   const roomName = req.query.filter?.toString() || "";
    //   const data = await prismaClient.room.findMany({
    //     where: {
    //       OR: [{ slug: { contains: roomName, mode: "insensitive" } }],
    //     },
    //     select: {
    //       id: true,
    //       slug: true,
    //       createdAt: true,
    //     },
    //   });
    //   res.status(200).json(
    //     data.map((user: { id: number; slug: string; createdAt: Date }) => ({
    //       roomName: user.slug,
    //       roomId: user.id,
    //       createdAt: user.createdAt,
    //     }))
    //   );
    // } catch {
    //   res.status(500).json({
    //     message: "something went wrong",
    //   });
    // }
});
exports.bulk = bulk;
//# sourceMappingURL=roomController.js.map