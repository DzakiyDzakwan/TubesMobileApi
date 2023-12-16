import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "activities";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.text("description").notNullable();
      table.boolean("mark_as_finished").defaultTo(0).notNullable();
      table
        .integer("task_id")
        .unsigned()
        .nullable()
        .references("tasks.id")
        .onUpdate("cascade")
        .onDelete("cascade");
      table.timestamp("started_at").nullable();
      table.timestamp("deadline_at").nullable();
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
