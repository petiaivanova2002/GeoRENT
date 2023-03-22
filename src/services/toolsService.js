const baseUrl = "http://localhost:3030/jsonstore/tools"

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    // console.log(result)

    return result;
};

export const getOne = async (toolId) => {
    const response = await fetch(`${baseUrl}/${toolId}`);
    const result = await response.json();
    console.log(result);

    return result;
};

export const create = async (toolData) => {
    const { ...data } = toolData;
    // console.log(data);

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
};

export const remove = async (toolId) => {
    const response = await fetch(`${baseUrl}/${toolId}`, {
        method: 'DELETE'
    })
    const result = await response.json();
//    console.log(result)

    return result;
}

export const update = async (toolId, toolData) => {
    const {...data} = toolData
    const response = await fetch(`${baseUrl}/${toolId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result)

    return result;
}