import sampleData from "./sample_data.json"
import Person from "./person";

const SubContent = () => {
    return (
        <>
        {sampleData.map(person => (
            <Person key={person.id} name={person.name} city={person.address.city}/>

        ))};
        
        </>
    )
}



export default SubContent;
