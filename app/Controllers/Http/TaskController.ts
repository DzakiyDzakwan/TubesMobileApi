// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import Task from "App/Models/Task";
import TaskValidator from "App/Validators/TaskValidator";
import { DateTime } from "luxon"; // Import DateTime from 'luxon'

export default class TaskController {
  public async index({ response }: HttpContext) {
    try {
      const data = await Task.all();
      // const data = await Task.query().preload("activities");

      return response.ok({ data: data });
    } catch (error) {
      return response.badRequest({ message: error.message });
    }
  }

  public async store({ request, response }: HttpContext) {
    try {
      const payload = await request.validate(TaskValidator);

      // Check if deadline_at exists in the request
      if (payload.deadline_at) {
        // Convert deadline_at to a Date object
        payload.deadline_at = new Date(payload.deadline_at);
      }

      const data = await Task.create(payload);

      return response.created({
        message: "Tugas baru berhasil ditambahkan",
        data: data,
      });
    } catch (error) {
      return response.badRequest({ error: error.message });
    }
  }

  public async show({ response, params }: HttpContext) {
    try {
      const data = await Task.findOrFail(params.id);

      await data.preload("activities");

      return response.ok({ data: data });
    } catch (error) {
      return response.badRequest({ message: error.message });
    }
  }

  public async update({ request, response, params }) {
    try {
      const payload = await request.validate(TaskValidator);

      // Check if deadline_at exists in the request
      if (payload.deadline_at) {
        // Convert deadline_at to a Date object
        payload.deadline_at = new Date(payload.deadline_at);
      }
      const task = await Task.findOrFail(params.id);

      const data = await task.merge(payload).save();

      return response.ok({
        message: "Tugas berhasil diperbarui",
        data: data,
      });
    } catch (error) {
      return response.badRequest({ error: error.message });
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
