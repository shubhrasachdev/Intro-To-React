import './Pets.css';

function Pet(pet) {
    return (
      <div className="pet">
        <div className="petName">{pet.name}</div>
        <div className="petImg"><img src={pet.image} alt="NA" width="50px" height="50px"/></div>
        <div className="info">
            <ul>
                <li>Name: {pet.name}</li>
                
                <li>Type: {pet.type}</li>
                <li>description: {pet.description}</li>
                <li>Skills:
                    <ul>
                    {pet.skills.map((skill) => {
                        return <li>{skill}</li>;
                    })}
                    </ul>
                </li>
            </ul>
        </div>
      </div>
    )
  }
  
function Pets() {
    const data = [
        {
            name: 'Dolly',
            type: 'cat',
            description: 'Dolly is funny and loves to be around people',
            skills: ['fetch', 'play dead', 'roll over'],
            image: 'https://res.cloudinary.com/atapas/image/upload/v1604829788/cats/remi-remino-E9kVmtiqqGE-unsplash_uivwfy.jpg',
        },
        {
            name: 'Molly',
            type: 'cat',
            description: 'Molly is a sweet and cuddly cat stretch a lot!',
            skills: ['play dead', 'meow', 'purr'],
            image: 'https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg',
        },
        {
            name: 'Molly1',
            type: 'cat',
            description: 'Molly is a sweet and cuddly cat stretch a lot!',
            skills: ['play dead', 'meow', 'purr'],
            image: 'https://res.cloudinary.com/atapas/image/upload/v1604829829/cats/timo-volz-ZlFKIG6dApg-unsplash_x3xifk.jpg',
        },
    ];

    return (
        <div className="container">
        {
            data.map((pet) => {
                return Pet(pet);
            })
        }
        </div>
    );

}
  
export default Pets;
  