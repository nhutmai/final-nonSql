# Student API

## Giới thiệu

Student API cung cấp các chức năng CRUD cho sinh viên, bao gồm lọc theo chuyên ngành và điểm số.

## Cấu hình

### Cài đặt

Yêu cầu Node.js và MongoDB. Cài đặt dependencies:

```sh
npm install
```

### Add data bằng seeder

```sh
npm run seed
```

### Chạy server

```sh
npm start
```

## API Endpoints

### 1. Lấy danh sách sinh viên với bộ lọc

**Endpoint:** `GET /students`

**Query Params:**

| Tham số      | Kiểu dữ liệu | Mô tả                               |
| ------------ | ------------ | ----------------------------------- |
| `major`      | string       | Tìm kiếm gần đúng theo chuyên ngành |
| `gradesFrom` | number       | Điểm thấp nhất (mặc định: 0)        |
| `gradesTo`   | number       | Điểm cao nhất (mặc định: 10)        |

**Ví dụ:**

```sh
GET /students?major=marketing&gradesFrom=5&gradesTo=10
```

### 2. Lấy thông tin sinh viên theo ID

**Endpoint:** `GET /students/:studentId`

**Ví dụ:**

```sh
GET /students/1
```

### 3. Thêm sinh viên mới

**Endpoint:** `POST /students`

**Request Body:**

```json
{
  "name": "John Doe",
  "age": 22,
  "gender": "male",
  "dateOfBirth": "2001-06-15",
  "major": "Computer Science",
  "grades": 8.5
}
```

### 4. Cập nhật thông tin sinh viên

**Endpoint:** `PUT /students/:studentId`

**Ví dụ:**

```sh
PUT /students/1
```

**Request Body:**

```json
{
  "major": "Physics",
  "age": 23
}
```

### 5. Xóa sinh viên

**Endpoint:** `DELETE /students/:studentId`

**Ví dụ:**

```sh
DELETE /students/1
```
