
const UserInputFields = () => {

    const inputFields = [
        'firstName',
        'lastName',
        'cpr',
        'age',
        'chronicDisease',
        'streetName',
        'doorNumber',
        'zipCode',
        'city',
        'region',
        'country'
    ];


    const inputAray = []
    for (let i = 0; i < inputFields.length; i++) {
        inputAray.push(<input type={"text"} key={i} id={inputFields[i]} placeholder={inputFields[i]}/>)
    }

    return inputAray

}

export default UserInputFields