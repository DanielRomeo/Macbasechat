let createGroup = `create table if not exists group(
    id int primary key auto_increment,
    created_id int not null,
    name int not null,
    description longtext not null,
    date_created datetime not null
)`;

let createGroupMessages = `create table if not exists group_messages(
    id int primary key auto_increment,
    sender_id int not null,
    group_id int not null,
    message longtext not null,
    date_created datetime not null
)`;


module.exports= {
	createGroup,
	createGroupMessages
}
