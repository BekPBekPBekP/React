import sampleData from "./sample_data.json"

const Content = () => {

    return (
        <>
            {sampleData.map((person) => (
                <p>Hello, {person.name} from {person.address.city}!</p>
            ))}
        </>

    );


}

export default Content;