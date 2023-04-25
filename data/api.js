const products = JSON.parse(localStorage.getItem('products'));
const categories = JSON.parse(localStorage.getItem('categories'));
const users = JSON.parse(localStorage.getItem('users'));
const roles = JSON.parse(localStorage.getItem('roles'));

const pageSize = 5;

const getProducts = ({
    categoryId = 0,
    page = 1,
}) => {
    let result = products;
    if (categoryId !== 0) {
        result = result.filter((product) => {
            return product.categoryId === categoryId;
        });
    }
    result = result.slice(pageSize * (page - 1), pageSize * page);
    return result;
}

const getCategories = () => {
    return categories;
}

const getProduct = (id) => {
    return products.find((product) => product.id === id);
}

const getCategory = (id) => {
    return categories.find((category) => category.id === id);
}

const getUsers = () => {
    return users;
}

const getRoles = () => {
    return roles;
}

const authentication = (userName, password) => {
    const user = users.find(user => {
        return user.name === userName && user.password == password;
    })

    return {
        isSuccess: !!user,
        userId: user ? user.id : null,
        roles: user ? user.roleId : null,
    }
}
