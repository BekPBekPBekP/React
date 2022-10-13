const Address = () => {

const homeAdd = {
    firstName: "Rebekah",
    surname: "Palethorpe",
    line1: "6 Eastleigh Dr",
    city: "Manchester"
}

return (
    <div>
    <h4>{homeAdd.firstName}</h4>
    <h4>{homeAdd.surname}</h4>
    <h4>{homeAdd.line1}</h4>
    <h4>{homeAdd.city}</h4>
    </div>
);
}

