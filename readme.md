# API Tugas Besar Pemrograman Mobile

- creator : [Dzakiy Dzakwan](https://github.com/DzakiyDzakwan)
- email : dzakcart@gmail.com
- stack : [AdonisJS](https://adonisjs.com/)

Application Programming Interfacae (API) ini dibuat menggunakan [AdonisJS](https://adonisjs.com/) untuk membantu menyelsaikan tugas besar pemrograman mobile dan juga tugas praktikum pemrograman mobile. API ini terdiri dari 2 modul yang berbeda yaitu :

1. Pengelolaan Tugas
2. Pencatatan Keuangan

## 1. Instalasi API

Untuk instalasi pastikan terlebih dahulu bahwa kalian sudah memiliki **`node js > 14.0`**

- 1.1. Clone Project
  ```bash
  git clone https://github.com/DzakiyDzakwan/TubesMobileApi.git
  ```
- 1.2. Pindah direktori
  ```bash
  cd TubesMobileApi
  ```
- 1.3. Install node package
  ```bash
  npm installl
  ```
- 1.4. Ubah file `.env.example` menjadi `.env`
- 1.5. Buat sebuah database baru dengan nama `tubes-mobile-api`
- 1.6. Jalankan migration
  ```bash
  node ace migration:run
  ```
- 1.7. Jalankan seeder
  ```bash
  node ace db:seed
  ```
- 1.8. Jalankan server api
  ```bash
  node ace serve
  ```
- 1.8. API sudah bisa digunakan

## 2. Modul Pengelolaan Tugas

### 2.1. Tugas

- ### Daftar Seluruh Tugas

  Menampilkan seluruh daftar tugas yang tersedia

  **- Endpoint**

  ```
  GET http://127.0.0.1:3333/api/v1/task
  ```

  **- Parameter**
  | Parameter | Type | Description |
  | :-------- | :--- | :---------- |
  | `-` | `-` | `-` |

  **- Response**

  ```
  "data": [
      {
          "id": 4,
          "name": "Example Task",
          "mark_as_finished": 0,
          "started_at": null,
          "deadline_at": "2023-12-25T16:59:59.000Z",
          "created_at": "2023-12-16T13:24:20.000+07:00",
          "updated_at": "2023-12-16T13:24:20.000+07:00"
      },
  ]
  ```

- ### Menambahkan Tugas

  Menambahkan tugas baru kedalam database

  **- Endpoint**

  ```
  POST http://127.0.0.1:3333/api/v1/task
  ```

  **- Parameter**
  | Parameter | Type | required |
  | :-------- | :--- | :---------- |
  | `name` | `string` | `true` |
  | `deadline_at` | `string` | `false` |

  **- Response**

  ```
   "message": "Tugas baru berhasil ditambahkan",
  "data": {
      "name": "Test Data yang dimasukkan 7",
      "deadline_at": "2023-12-25T16:59:59.000Z",
      "created_at": "2023-12-16T14:30:25.715+07:00",
      "updated_at": "2023-12-16T14:30:25.715+07:00",
      "id": 5
  }
  ```

- ### Melihat Detail Tugas

  Melihat detail tugas berdasarkan id tugas yang dipilih

  **- Endpoint**

  ```
  GET http://127.0.0.1:3333/api/v1/task/{id}
  ```

  **- Parameter**
  | Parameter | Type | Description |
  | :-------- | :--- | :---------- |
  | `-` | `-` | `-` |

  **- Response**

  ```
   {
      "data": {
          "id": 2,
          "name": "Tugas Besar Pemrograman Mobile",
          "mark_as_finished": 0,
          "started_at": null,
          "deadline_at": "2023-12-22T16:59:59.000Z",
          "created_at": "2023-12-16T13:10:01.000+07:00",
          "updated_at": "2023-12-16T13:10:01.000+07:00",
          "activities": [
              {
                  "id": 3,
                  "description": "Membuat API",
                  "mark_as_finished": 0,
                  "started_at": null,
                  "deadline_at": "2023-12-22T16:59:59.000Z",
                  "created_at": "2023-12-16T13:10:01.000+07:00",
                  "updated_at": "2023-12-16T13:10:01.000+07:00"
              },
              {
                  "id": 4,
                  "description": "Membuat Tampilan",
                  "mark_as_finished": 0,
                  "started_at": null,
                  "deadline_at": "2023-12-22T16:59:59.000Z",
                  "created_at": "2023-12-16T13:10:01.000+07:00",
                  "updated_at": "2023-12-16T13:10:01.000+07:00"
              },
              {
                  "id": 5,
                  "description": "Menghubungkan API",
                  "mark_as_finished": 0,
                  "started_at": null,
                  "deadline_at": "2023-12-22T16:59:59.000Z",
                  "created_at": "2023-12-16T13:10:01.000+07:00",
                  "updated_at": "2023-12-16T13:10:01.000+07:00"
              }
          ]
      }
   }
  ```

- ### Mengubah Tugas

  Mengubah tugas yang sudah ada berdasarkan id tugas yang dipilih

  **- Endpoint**

  ```
  PUT/PATCH http://127.0.0.1:3333/api/v1/task/{id}
  ```

  **- Parameter**
  | Parameter | Type | required |
  | :-------- | :--- | :---------- |
  | `name` | `string` | `true` |
  | `deadline_at` | `string` | `false` |

  **- Response**

  ```
  {
      "message": "Tugas berhasil diperbarui",
      "data": {
          "id": 2,
          "name": "Example edit task",
          "mark_as_finished": 0,
          "started_at": null,
          "deadline_at": "2023-12-22T16:59:59.000Z",
          "created_at": "2023-12-16T13:10:01.000+07:00",
          "updated_at": "2023-12-16T14:37:54.265+07:00"
      }
  }
  ```

- ### Hapus Tugas

  Menghapus tugas berdasarkan id yang dipilih

  **- Endpoint**

  ```
  DELETE http://127.0.0.1:3333/api/v1/task/1
  ```

  **- Parameter**
  | Parameter | Type | Description |
  | :-------- | :--- | :---------- |
  | `-` | `-` | `-` |

  **- Response**

  ```
  {
      "message": "Tugas berhasil dihapus"
  }
  ```

### 2.2 Aktivitas

- ### Daftar Seluruh Aktivitas

  Menampilkan seluruh daftar aktivitas yang tersedia

  **- Endpoint**

  ```
  GET http://127.0.0.1:3333/api/v1/activity
  ```

  **- Parameter**
  | Parameter | Type | Description |
  | :-------- | :--- | :---------- |
  | `-` | `-` | `-` |

  **- Response**

  ```
  {
      "data": [
          {
              "id": 1,
              "description": "Membersihkan Kamar Mandi",
              "mark_as_finished": 0,
              "started_at": null,
              "deadline_at": "2023-12-20T16:59:59.000Z",
              "created_at": "2023-12-16T13:10:01.000+07:00",
              "updated_at": "2023-12-16T13:10:01.000+07:00",
              "task": {
                  "id": 1,
                  "name": "Pekerjaan Rumah",
                  "mark_as_finished": 0,
                  "started_at": null,
                  "deadline_at": "2023-12-31T16:59:59.000Z",
                  "created_at": "2023-12-16T13:10:01.000+07:00",
                  "updated_at": "2023-12-16T13:10:01.000+07:00"
              }
          }
      ]
  }
  ```

- ### Menambahkan Aktivitas

  Menambahkan aktivitas baru kedalam database

  **- Endpoint**

  ```
  POST http://127.0.0.1:3333/api/v1/activity
  ```

  **- Parameter**
  | Parameter | Type | required |
  | :-------- | :--- | :---------- |
  | `description` | `string` | `true` |
  | `task_id` | `number` | `true` |
  | `deadline_at` | `string` | `false` |

  **- Response**

  ```
   {
      "message": "Aktivitas baru berhasil ditambahkan",
      "data": {
          "description": "Test Data Aktivitas",
          "created_at": "2023-12-16T14:45:04.373+07:00",
          "updated_at": "2023-12-16T14:45:04.373+07:00",
          "id": 8
      }
  }
  ```

- ### Mengubah Aktivitas

  Mengubah aktivitas yang sudah ada berdasarkan id aktivitas yang dipilih

  **- Endpoint**

  ```
  PUT/PATCH http://127.0.0.1:3333/api/v1/activity/{id}
  ```

  **- Parameter**
  | Parameter | Type | required |
  | :-------- | :--- | :---------- |
  | `description` | `string` | `true` |
  | `task_id` | `number` | `true` |
  | `deadline_at` | `string` | `false` |

  **- Response**

  ```
  {
      "message": "Aktivitas berhasil diperbarui",
      "data": {
          "id": 2,
          "description": "Test Data yang diganti 2",
          "mark_as_finished": 0,
          "started_at": null,
          "deadline_at": "2023-12-31T16:59:59.000Z",
          "created_at": "2023-12-16T13:10:01.000+07:00",
          "updated_at": "2023-12-16T14:55:36.062+07:00"
      }
  }
  ```

- ### Hapus Aktivitas

  Menghapus aktivitas berdasarkan id yang dipilih

  **- Endpoint**

  ```
  DELETE http://127.0.0.1:3333/api/v1/activity/{id}
  ```

  **- Parameter**
  | Parameter | Type | Description |
  | :-------- | :--- | :---------- |
  | `-` | `-` | `-` |

  **- Response**

  ```
  {
      "message": "Aktivitas berhasil dihapus"
  }
  ```

## 3. Modul Pencatatan Keuangan

Coming Soon
