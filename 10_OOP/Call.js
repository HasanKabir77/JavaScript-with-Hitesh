function setUserName(userName)
{
    this.userName = userName
}

function createUser(userName, email, password)
{
    setUserName.call(this, userName)

    this.email = email
    this.password = password
}

const userHasan = new createUser('Hasan', 'hasan78@gmail.com', '123')
console.log(userHasan);