// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import Activity from "App/Models/Activity";
import ActivityValidator from "App/Validators/ActivityValidator";

export default class ActivityController {
  public async index({ response }: HttpContext) {
    try {
      const data = await Activity.query().preload("task");

      return response.ok({ data: data });
    } catch (error) {
      return response.badRequest({ message: error.message });
    }
  }

  public async store({ request, response }: HttpContext) {
    try {
      const payload = await request.validate(ActivityValidator);

      // Check if deadline_at exists in the request
      if (payload.deadline_at) {
        // Convert deadline_at to a Date object
        payload.deadline_at = new Date(payload.deadline_at);
      }

      const data = await Activity.create(payload);

      return response.created({
        message: "Aktivitas baru berhasil ditambahkan",
        data: data,
      });
    } catch (error) {
      return response.badRequest({ error: error.message });
    }
  }

  public async show({ response, params }: HttpContext) {
    try {
      const data = await Activity.findOrFail(params.id);

      await data.preload("task");

      return response.ok({ data: data });
    } catch (error) {
      return response.badRequest({ message: error.message });
    }
  }

  public async update({ request, response, params }) {
    try {
      const payload = await request.validate(ActivityValidator);

      // Check if deadline_at exists in the request
      if (payload.deadline_at) {
        // Convert deadline_at to a Date object
        payload.deadline_at = new Date(payload.deadline_at);
      }
      const activity = await Activity.findOrFail(params.id);

      const data = await activity.merge(payload).save();

      return response.ok({
        message: "Aktivitas berhasil diperbarui",
        data: data,
      });
    } catch (error) {
      return response.badRequest({ error });
    }
  }

  public async destroy({ response, params }: HttpContext) {
    try {
      const data = await Activity.findOrFail(params.id);

      await data.delete();

      return response.ok({
        message: "Aktivitas berhasil dihapus",
      });
    } catch (error) {
      return response.badRequest({ error: error.message });
    }
  }
}
