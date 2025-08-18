import React from 'react';

const Profile = ({name, age, city}) => {
    return (
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>city: {city}</p>
        </div>
    );
};

export default Profile;