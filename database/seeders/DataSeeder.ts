import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Task from "App/Models/Task";

export default class extends BaseSeeder {
  public async run() {
    await Task.truncate();

    await Task.createMany([
      {
        name: "Mengerjakan tugas fundamental big data",
        isFinished: false,
      },
      {
        name: "Mengerjakan tugas besar praktikum mobil",
        isFinished: false,
      },
      {
        name: "Berburu di sawah",
        isFinished: false,
      },
    ]);
  }
}
