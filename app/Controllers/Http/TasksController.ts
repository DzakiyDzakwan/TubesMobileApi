// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import Task from "App/Models/Task";
import TaskValidator from "App/Validators/TaskValidator";

export default class TasksController {
  public async index({ response }: HttpContext) {
    try {
      const data = await Task.all();

      return response.ok({ data: data });
    } catch (error) {
      console.log(error);
      return response.badRequest({ message: error.message });
    }
  }

  public async store({ request, response }: HttpContext) {
    try {
      const payload = await request.validate(TaskValidator);
      const data = await Task.create(payload);

      return response.created({
        message: "Tugas baru berhasil ditambahkan",
        data: data,
      });
    } catch (error) {
      return response.badRequest({ error: error.messages });
    }
  }

  public async destroy({ response, params }: HttpContext) {
    try {
      const data = await Task.findOrFail(params.id);

      await data.delete();

      return response.ok({
        message: "Tugas berhasil dihapus",
      });
    } catch (error) {
      return response.badRequest({ error: error.message });
    }
  }
}
