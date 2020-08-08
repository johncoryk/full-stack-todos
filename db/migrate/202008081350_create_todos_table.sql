CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  category VARCHAR(255),
  description VARCHAR(255),
  is_complete BOOLEAN
);
-- initial seed data

INSERT INTO todos 
(title, category, description, is_complete)
VALUES 
('Get Groceries', 'Shopping', 'Find list with new recipes to try. Do not forget the pesto!', false);