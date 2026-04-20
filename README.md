#  Helping Hand – Home Services Booking Platform

A full-stack web application that helps users easily book essential home services such as plumbing, electrical work, car mechanics, and housekeeping. The platform provides a simple and user-friendly online booking system that reduces the difficulty of finding reliable service providers.

---

## 🌐 Live Links

| Service | URL |
|---|---|
| **Backend API** | https://helping-hand-backend-xuvw.onrender.com |
| **Frontend Repo** | https://github.com/Rahatul-Islam-Rafi/Helping-Hand---FE |
| **Backend Repo** | https://github.com/mir-sakawath-ahmed/Helping-hand-Backend |

---

## Project Objectives

- Reduce the difficulty of finding reliable home service providers
- Offer a simple and user-friendly online booking system
- Allow users to submit service requests digitally instead of using manual or offline methods
- Provide real-time booking confirmation with unique confirmation codes

---

##  Features

- User Registration and Login System
- Service Selection System (Plumber, Electrician, Mechanic, Housekeeping, etc.)
- Online Service Booking Form
- Booking Confirmation System with unique codes
- Comment and Review System with Star Ratings
- Admin Dashboard and Panel
- Worker Management System
- JWT Authentication and Authorization
- Password Encryption with bcrypt
- Responsive Website Design (Mobile and Desktop)

---

##  Built With

| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js** | Web framework |
| **MongoDB Atlas** | Cloud database |
| **Mongoose** | MongoDB object modeling |
| **JWT** | Authentication tokens |
| **bcryptjs** | Password encryption |
| **cors** | Cross-origin resource sharing |
| **morgan** | HTTP request logger |
| **nodemon** | Development auto-restart |
| **dotenv** | Environment variables |

---

## Project Structure

### models/
| File | Feature |
|---|---|
| User.js | Stores user data — name, email, hashed password, phone, address, role (user/admin). Auto-encrypts password before saving |
| Service.js | Stores available services — name, category, description, price, duration, availability |
| Booking.js | Stores bookings — links user and service, stores date, timeslot, address, status, auto-generates confirmation code |
| Review.js | Stores user reviews — links to user, stores star rating (1-5) and comment text |
| Worker.js | Stores worker data — links workers to service categories they provide |

### routes/
| File | Feature |
|---|---|
| auth.js | Routes for register, login, get current user |
| services.js | Routes to get all services, filter by category, get single service, create/update/delete (admin only) |
| bookings.js | Routes to create booking, get my bookings, get single booking, cancel booking |
| users.js | Routes to get and update user profile |
| admin.js | Routes for admin dashboard stats, manage all bookings, users, services |
| reviews.js | Routes to get all reviews, submit review, get my reviews |
| workers.js | Routes to manage workers — add, view, assign to services |

### controllers/
| File | Feature |
|---|---|
| authController.js | Handles register logic (check duplicate email, hash password, return token) and login logic (verify password, return token) |
| serviceController.js | Handles get all services with category filter, get single service, create/update/delete service |
| bookingController.js | Handles create booking, get user bookings, cancel booking, admin get all bookings, update booking status |
| userController.js | Handles get profile, update profile, get all users (admin only) |
| reviewController.js | Handles submit review (any logged in user), get all reviews, get my reviews |

### middleware/
| File | Feature |
|---|---|
| auth.js | Three functions — protect (checks JWT token, blocks if invalid), adminOnly (blocks if not admin role), generateToken (creates 7-day JWT token) |

### config/
| File | Feature |
|---|---|
| db.js | Connects to MongoDB Atlas using MONGO_URI from .env, logs success or exits on failure |

### Root Files
| File | Feature |
|---|---|
| server.js | Main entry point — loads all routes, connects database, sets up middleware, handles 404 and errors |
| seed.js | One-time script — fills database with 6 sample services |
| createAdmin.js | One-time script — creates the admin user with hashed password in database |
| .env | Stores secret config — MongoDB URI, JWT secret key, port number. Never uploaded to GitHub |

---

##  API Endpoints

### Auth Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/auth/register | Public | Register new user |
| POST | /api/auth/login | Public | Login user |
| GET | /api/auth/me | Private | Get logged in user |

### Service Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/services | Public | Get all services |
| GET | /api/services?category=plumber | Public | Filter by category |
| GET | /api/services/:id | Public | Get single service |
| POST | /api/services | Admin | Create service |
| PUT | /api/services/:id | Admin | Update service |
| DELETE | /api/services/:id | Admin | Delete service |

### Booking Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/bookings | Private | Create a booking |
| GET | /api/bookings/my | Private | Get my bookings |
| GET | /api/bookings/:id | Private | Get single booking |
| PUT | /api/bookings/:id/cancel | Private | Cancel a booking |

### Review Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/reviews | Public | Get all reviews |
| POST | /api/reviews | Private | Submit a review |
| GET | /api/reviews/my | Private | Get my reviews |

### User Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/users/profile | Private | Get my profile |
| PUT | /api/users/profile | Private | Update my profile |

### Admin Routes
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/admin/dashboard | Admin | Get dashboard stats |
| GET | /api/admin/bookings | Admin | Get all bookings |
| PUT | /api/admin/bookings/:id | Admin | Update booking status |
| GET | /api/admin/users | Admin | Get all users |
| GET | /api/admin/services | Admin | Get all services |
| POST | /api/admin/services | Admin | Create service |
| DELETE | /api/admin/services/:id | Admin | Delete service |

---

##  User Roles

| Role | Access |
|------|--------|
| **user** | Register, Login, Browse Services, Create and Cancel Bookings, Submit Reviews, View Own Profile |
| **admin** | Everything above plus Manage Services, View All Bookings, Update Booking Status, View All Users, Dashboard Stats |

---

##  Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | 5000 |
| MONGO_URI |  | mongodb://241003812_db_user:Hand123456@ac-wzvzfcr-shard-00-00.lu0o4v2.mongodb.net:27017,ac-wzvzfcr-shard-00-01.lu0o4v2.mongodb.net:27017,ac-wzvzfcr-shard-00-02.lu0o4v2.mongodb.net:27017/Helping_hand?ssl=true&replicaSet=atlas-u4n38h-shard-0&authSource=admin&retryWrites=true&w=majority |

| JWT_SECRET | homeservices_secret_key_2024 |

---

##  Database Collections

| Collection | Description |
|---|---|
| users | Registered users with encrypted passwords |
| services | Available home services with pricing |
| bookings | User service bookings with confirmation codes |
| reviews | User comments and star ratings |
| workers | Service workers and their assigned categories |

---


## License

This project is developed for educational purposes as part of a group project.

---

© 2026 HelpingHand. All rights reserved.
