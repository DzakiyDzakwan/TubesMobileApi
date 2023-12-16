import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Task from "./Task";

export default class Activity extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public description: String;

  @column()
  public markAsFinished: boolean;

  @column()
  public startedAt: DateTime;

  @column()
  public deadlineAt: DateTime;

  @column({ serializeAs: null })
  public taskId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Task)
  public task: BelongsTo<typeof Task>;
}
