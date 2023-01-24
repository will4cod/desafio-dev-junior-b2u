export const getVehicles = async () => {
    try{
        const response = await fetch("http://localhost:3003/veiculos")
        return await response.json()

    } catch (error) {
        console.log('error: ', error)
    }
}

export const newVehicle = async (requestData) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }),
    }

    try{
       const response = await fetch("http://localhost:3003/veiculo", requestOptions)
       return await response.json()

    } catch (error) {
        console.log('error: ', error)
    }
}