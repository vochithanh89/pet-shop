const pageSize = 10;

const getList = ({
    page = 1,
    category = 0,
    sort = 0
}) => {
    let result = data.filter((pet) => {
        return pet.categoriesId.includes(category);
    });
    result = data.slice(pageSize * page - 1, pageSize * page + 10);
    // 
    return result.sort();
}

const getPet = (id) => {
    return data.find((pet) => pet.id === id);
}