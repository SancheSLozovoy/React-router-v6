import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { data } from "../data";

const EntityDetailPage: React.FC = () => {
    const { name } = useParams<{ name: string }>(); 
    const entity = data.find(el => el.name === name);

    if (!entity) {
        return <Navigate to='/404' />;
    }

    return ( 
        <div>
            <h1>{entity.name}</h1>
            <p>{entity.text}</p>
        </div>
    );
}

export default EntityDetailPage;
