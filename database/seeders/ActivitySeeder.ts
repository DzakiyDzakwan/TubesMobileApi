import Database from "@ioc:Adonis/Lucid/Database";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Activity from "App/Models/Activity";

export default class extends BaseSeeder {
  public async run() {
    await Database.rawQuery("SET FOREIGN_KEY_CHECKS=0");

    await Activity.truncate();

    const activityList = [
      [
        {
          taskId: 1,
          description: "Membersihkan Kamar Mandi",
          deadlineAt: new Date("2023-12-20T23:59:59"),
        },
        {
          taskId: 1,
          description: "Membersihkan Tempat Tidur",
          deadlineAt: new Date("2023-12-18T23:59:59"),
        },
      ],
      [
        {
          taskId: 2,
          description: "Membuat API",
          deadlineAt: new Date("2023-12-22T23:59:59"),
        },
        {
          taskId: 2,
          description: "Membuat Tampilan",
          deadlineAt: new Date("2023-12-22T23:59:59"),
        },
        {
          taskId: 2,
          description: "Menghubungkan API",
          deadlineAt: new Date("2023-12-22T23:59:59"),
        },
      ],
    ];

    activityList.forEach(async (element) => {
      await Activity.createMany(element);
    });

    // Restore foreign key constraints
    await Database.rawQuery("SET FOREIGN_KEY_CHECKS=1");
  }
}
