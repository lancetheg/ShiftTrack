CREATE DATABASE shifttrack;
USE shifttrack;

-- USERS

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,

    role ENUM('Administrator','Worker')
    DEFAULT 'Worker',

    status ENUM('Active','Inactive')
    DEFAULT 'Active',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SHIFTS

CREATE TABLE shifts (
    shift_id INT AUTO_INCREMENT PRIMARY KEY,

    shift_name VARCHAR(100) NOT NULL,

    start_time TIME NOT NULL,
    end_time TIME NOT NULL,

    break_minutes INT DEFAULT 0,

    grace_period INT DEFAULT 15
);

-- SHIFT ASSIGNMENTS

CREATE TABLE shift_assignments (
    assignment_id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,
    shift_id INT NOT NULL,

    assigned_date DATE NOT NULL,

    FOREIGN KEY (user_id)
    REFERENCES users(user_id),

    FOREIGN KEY (shift_id)
    REFERENCES shifts(shift_id)
);

-- ATTENDANCE

CREATE TABLE attendance (
    attendance_id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    clock_in DATETIME NULL,
    clock_out DATETIME NULL,

    status VARCHAR(20),

    worked_hours DECIMAL(5,2),

    FOREIGN KEY (user_id)
    REFERENCES users(user_id)
);

-- ATTENDANCE CORRECTIONS

CREATE TABLE attendance_corrections (
    correction_id INT AUTO_INCREMENT PRIMARY KEY,

    attendance_id INT NOT NULL,

    admin_id INT NOT NULL,

    correction_reason TEXT,

    correction_date TIMESTAMP
    DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (attendance_id)
    REFERENCES attendance(attendance_id),

    FOREIGN KEY (admin_id)
    REFERENCES users(user_id)
);

-- AUDIT LOGS

CREATE TABLE audit_logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,

    admin_id INT NOT NULL,

    action TEXT NOT NULL,

    action_time TIMESTAMP
    DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (admin_id)
    REFERENCES users(user_id)
);


INSERT INTO users
(first_name,last_name,email,password_hash,role)
VALUES
('Raymond','Kigen',
'raymond@gmail.com',
'123456',
'Worker'),

('Admin',
'User',
'admin@gmail.com',
'123456',
'Administrator');

INSERT INTO shifts
(shift_name,start_time,end_time,break_minutes)
VALUES
('Morning Shift',
'08:00:00',
'17:00:00',
60);