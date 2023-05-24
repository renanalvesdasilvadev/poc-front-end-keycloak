import React from 'react';
import { Link } from 'react-router-dom';
import Forbidden from '../pages/403';

const hasRole = (role) => {
    const roles = localStorage.getItem("roles");
    if (!roles) {
        return false;
    }
    const rolesObject = JSON.parse(roles);
    return rolesObject.some((item) => item == role);
}

const Page = ({ page, accessPublic, accessRole }) => {
    if (accessPublic) {
        return page;
    }

    const allowedAccess = hasRole(accessRole);

    if (!allowedAccess) {
        return (<Forbidden />);
    }

    return page;
};

export default Page;
