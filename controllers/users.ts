import { PrismaClient } from '@prisma/client'
import { NextFunction, Request, Response } from 'express';
import Controller from "./base";

const prisma = new PrismaClient();

const disconnectDB = async () => {
  await prisma.$disconnect();
}

class UsersController extends Controller {
  public async index(req: Request, res: Response, next: NextFunction) {
    const users = await prisma.user.findMany();

    disconnectDB();

    return res.json({ users });
  }

  public async show(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.params;

    const user = await prisma.user.findUnique({ where: { id: Number(userId) }});

    disconnectDB();

    return res.json({ user });
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const { nombre, direccion, telefono } = req.body;

    if(!nombre || !direccion || !telefono) return res.status(400).json({ message: 'Missing data' });

    const user = await prisma.user.create({ data: { nombre, direccion, telefono }});

    disconnectDB();

    return res.json({ user });
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.params;
    const { nombre, direccion, telefono } = req.body;

    if(!userId) return res.status(400).json({ message: 'Missing data' });
    if(!nombre && !direccion && !telefono) return res.status(400).json({ message: 'Missing data' });

    const user = await prisma.user.update({ where: { id: Number(userId) }, data: { nombre, direccion, telefono }});

    disconnectDB();

    return res.json({ user });
  }

  public async delete(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.params;

    if(!userId) return res.status(400).json({ message: 'Missing data' });

    const user = await prisma.user.delete({ where: { id: Number(userId) }});

    disconnectDB();

    return res.json({ user });

  }
}

export default UsersController;
