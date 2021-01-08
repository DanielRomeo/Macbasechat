let createMessages = `create table if not exists messages(
    id int primary key auto_increment,
    sender_id int not null,
    reciever_id int not null,
    message longtext not null,
    date_created datetime not null
)`;

/*if its a single message: 
	the group_id
*/

module.exports = {createMessages}