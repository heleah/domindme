import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/* export async function PATCH(req, res) {
  console.log("boop");
  const { todo_id, task } = req.body;
  //console.log(req.body);

  try {
    const updatedTask = await prisma.todos.update({
      where: {
        todo_id: todo_id,
      },
      data: {
        task: task,
      },
    });
    res.status(200).json(updatedTask);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(todos);
} */

/* export default async function handler(req, res) {
  console.log("boop");
  if (req.method === "POST") {
    // TODO (hehe)
  } else if (req.method === "PATCH") {
    const { todo_id, task } = req.body;
    //console.log(req.body);

    try {
      const updatedTask = await prisma.todos.update({
        where: {
          todo_id: todo_id,
        },
        data: {
          task: task,
        },
      });
      res.status(200).json(updatedTask);
    } catch (err) {
      console.log(err);
    }

    res.status(200).json(comments);
  } else {
    res.setHeader("Allow", ["POST", "PATCH"]);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
} */
