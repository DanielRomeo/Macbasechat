let createUsers = `create table if not exists users(
    id int primary key auto_increment,
    firstname varchar(200) not null,
    lastname varchar(200) not null,
    password varchar(255) not null,
    username varchar(200) not null,
    date_created datetime not null
)`;

module.exports = {createUsers}
