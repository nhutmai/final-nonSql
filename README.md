# 📚 Book & Author API

## 📌 Giới thiệu

Đây là API cho hệ thống quản lý sách và tác giả, cung cấp các chức năng lấy danh sách, tìm kiếm, lọc, và tạo mới sách và
tác giả.

## 🌍 Base URL

```
/api/v1/
```

## 📖 API Endpoints

### 📌 Tác giả (Authors)

#### 1️⃣ Lấy danh sách tất cả tác giả hoặc lọc theo số lượng sách

**Endpoint:**

```
GET /api/v1/authors
```

**Query Params:**

- `bookNum` *(optional)*: Lọc các tác giả có ít nhất `bookNum` sách.

**Ví dụ:**

```
GET /api/v1/authors?bookNum=5
```

**Response:**

```json
{
  "success": true,
  "authors": [
    {
      "_id": "65a123456789abcd",
      "full_name": "J.K. Rowling",
      "book_count": 7
    }
  ]
}
```

#### 2️⃣ Lấy thông tin chi tiết một tác giả theo ID

**Endpoint:**

```
GET /api/v1/authors/:authorId
```

**Response:**

```json
{
  "success": true,
  "author": {
    "_id": "65a123456789abcd",
    "full_name": "J.K. Rowling",
    "books": [
      "65b123abc",
      "65b456def"
    ]
  }
}
```

---

### 📚 Sách (Books)

#### 1️⃣ Lấy danh sách sách với bộ lọc

**Endpoint:**

```
GET /api/v1/books
```

**Query Params:**

- `title` *(optional)*: Lọc theo tiêu đề sách (tìm kiếm không phân biệt hoa thường).
- `genre` *(optional)*: Lọc theo thể loại sách.
- `publishYear` *(optional)*: Lọc theo năm xuất bản.
- `page` *(optional, default = 1)*: Trang hiện tại của kết quả.
- `limit` *(optional, default = 10)*: Số lượng sách trên mỗi trang.

**Ví dụ:**

```
GET /api/v1/books?title=harry&genre=Fiction&page=1&limit=5
```

**Response:**

```json
{
  "books": [
    {
      "_id": "65b123abc",
      "title": "Harry Potter and the Sorcerer's Stone",
      "publishing_year": 1997,
      "num_of_favorites": 1000,
      "author_id": {
        "_id": "65a123456789abcd",
        "full_name": "J.K. Rowling"
      }
    }
  ],
  "currentPage": 1,
  "totalPages": 10
}
```

#### 2️⃣ Lấy thông tin chi tiết một sách theo ID

**Endpoint:**

```
GET /api/v1/books/:bookId
```

**Response:**

```json
{
  "book": {
    "_id": "65b123abc",
    "title": "Harry Potter and the Sorcerer's Stone",
    "publishing_year": 1997,
    "num_of_favorites": 1000,
    "author_id": "65a123456789abcd"
  }
}
```

#### 3️⃣ Tạo mới một cuốn sách

**Endpoint:**

```
POST /api/v1/books
```

**Body (JSON):**

```json
{
  "title": "Harry Potter and the Chamber of Secrets",
  "author_id": "65a123456789abcd",
  "genre": "Fiction",
  "publishing_year": 1998
}
```

**Response:**

```json
{
  "success": true,
  "message": "Book created successfully.",
  "book": {
    "_id": "65b789xyz",
    "title": "Harry Potter and the Chamber of Secrets",
    "author_id": "65a123456789abcd",
    "genre": "Fiction",
    "publishing_year": 1998
  }
}
```

---

## 🚀 Cài đặt & Chạy dự án

### 1. Clone Repository

### 2. Cài đặt các package

```sh
npm install
```

### 3. Cấu hình biến môi trường

Tạo file `.env` và thêm các thông tin cần thiết:

```
PORT=8000
MONGO_URI=mongodb://localhost:27017/book_db
```

### 4. Seed data

```sh
npm run seed
```

### 5. Chạy ứng dụng

```sh
npm start
```

Ứng dụng sẽ chạy tại: `http://localhost:8000/api/v1/`

---

## 🛠 Công nghệ sử dụng

- **Node.js** + **Express.js**: Xây dựng API
- **MongoDB + Mongoose**: Lưu trữ dữ liệu


