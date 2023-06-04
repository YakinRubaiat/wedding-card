import React from 'react';
import './Profile.scss';

interface ProfileProps {
    data: {
        name: string,
        occupation: string,
        facebookId: string,
        twitterId: string,
        fatherName: string,
        motherName: string,
        details: string,
        image: string
    }
}

const Profile = ({ data }: ProfileProps) => {
    return (
        <div className="profile">
            <img className="profile-image" src={data.image} alt={data.name} />
            <h2>{data.name}</h2>
            <p>{data.occupation}</p>
            <p>Facebook: {data.facebookId}</p>
            <p>Twitter: {data.twitterId}</p>
            <p>Father: {data.fatherName}</p>
            <p>Mother: {data.motherName}</p>
            <p>{data.details}</p>
        </div>
    );
};

export default Profile;
