export const getVehicles = async () => {
    try{
        const response = await fetch("http://localhost:3003/veiculos")
        return await response.json()

    } catch (error) {
        console.log('error: ', error)
    }
}