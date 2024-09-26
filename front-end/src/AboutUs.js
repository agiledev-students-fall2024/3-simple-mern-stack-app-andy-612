import React, {useEffect, useState} from 'react';
import axios from 'axios';

function AboutUs(){
    const [data, setData] = useState({paragraphs: [], image: ""});

    useEffect(() => {
        axios.get('http://localhost:5002/about-us')
        .then(response => setData(response.data))
        .catch(err => console.error(err));
    }, []);

    return(
        <div>
            <h1>About Us</h1>
            {data.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            {data.image && <img src={data.image} alt="me"/>}
        </div>

    );
}

export default AboutUs
