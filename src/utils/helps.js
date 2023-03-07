export const formatPrice = (number) => {
    const newNumber = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return newNumber.format(number/100)
}

export const getUniqueValue = (data, type) => {
    let unique= data.map((item) => item[type])
    if(type ==='colors'){
        unique = unique.flat()
    }
    return ['all', ...new Set(unique)]
}