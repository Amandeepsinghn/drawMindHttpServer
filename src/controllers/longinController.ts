import { Request, Response } from "express";
import { prismaClient } from "../prisma";
import jwt from "jsonwebtoken";
const JWT_SECRET = "123212321";

import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string().min(3).max(60),
  password: z.string(),
  name: z.string(),
});

export const signinSchema = z.object({
  username: z.string().min(3).max(60),
  password: z.string(),
});

type CreateUserBody = {
  username: string;
  password: string;
};

type SignInBody = {
  username: string;
  password: string;
};

export const signUp = async (req: Request<{}, {}, CreateUserBody>, res: Response) => {
  const parsedData = createUserSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(500).json({
      body: "Incorrect inputs",
    });
    return;
  }
  try {
    const user = await prismaClient.user.create({
      data: {
        email: parsedData.data.username,
        password: parsedData.data.password,
        name: parsedData.data.name,
      },
    });
    res.status(200).json({
      userId: user.id,
    });
  } catch (e) {
    res.status(411).json({
      body: "User already exists with this",
    });
  }
};

export const signIn = async (req: Request<{}, {}, SignInBody>, res: Response) => {
  const parsedData = signinSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(500).json({
      body: "Incorrect inputs",
    });
    return;
  }
  const user = await prismaClient.user.findFirst({
    where: {
      email: parsedData.data.username,
      password: parsedData.data.password,
    },
  });
  if (!user) {
    res.status(403).json({
      message: "Not authorized",
    });
    return;
  }
  const token = jwt.sign({ userId: user?.id }, JWT_SECRET);
  res.status(200).json({
    token: token,
  });
};
