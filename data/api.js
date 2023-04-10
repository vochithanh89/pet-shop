const pageSize = 10;

const getProducts = ({
    page = 1,
    category = 0,
    sort = 0
}) => {
    let result = products.filter((product) => {
        return product.categoriesId.includes(category);
    });
    result = products.slice(pageSize * page - 1, pageSize * page + 10);
    // 
    return result.sort();
}

const getProduct = (id) => {
    return products.find((product) => product.id === id);
}

const getCategory = (id) => {
    return products.find((product) => product.id === id);
}