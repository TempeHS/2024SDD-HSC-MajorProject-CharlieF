-- CREATE TABLE sddstudents (nesaID INTEGER NOT NULL PRIMARY KEY, name TEXT NOT NULL, age INTEGER NOT NULL);

-- INSERT INTO sddstudents (nesaID, name, age) VALUES (1234,"David Smith","17");

-- INSERT INTO sddstudents (nesaID, name, age) VALUES (45678,"Marty Davis","17");

SELECT * FROM sddstudents;

SELECT * FROM sddstudents WHERE name LIKE 'David Smith';