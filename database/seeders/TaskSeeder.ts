import Database from "@ioc:Adonis/Lucid/Database";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Task from "App/Models/Task";

export default class extends BaseSeeder {
  public async run() {
    await Database.rawQuery("SET FOREIGN_KEY_CHECKS=0");

    await Task.truncate();

    const taskList = [
      {
        name: "Pekerjaan Rumah",
        deadlineAt: new Date("2023-12-31T23:59:59"),
      },
      {
        name: "Tugas Besar Pemrograman Mobile",
        deadlineAt: new Date("2023-12-22T23:59:59"),
      },
      {
        name: "Course Fundamental Big Data",
        deadlineAt: new Date("2023-12-25T23:59:59"),
      },
    ];

    await Task.createMany(taskList);

    // Restore foreign key constraints
    await Database.rawQuery("SET FOREIGN_KEY_CHECKS=1");
  }
}
