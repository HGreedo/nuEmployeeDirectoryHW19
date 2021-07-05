import React from "react";

function DataBody({ users }) {
    
return (
    <tBody>
        {users[0] !== undefined && users[0].name !==undefined ? (
            users.map(({ login, name, picture, phone, email, dob }) => {
                return (
                    <tr key={login.uuid}>
                        <td data-th="Image">
        <img src={picture.medium} alt={"profile image for " + name.first + " " + name.last} />
                         </td>
                         <td data-th="Name"> {name.first} {name.last}
                        </td>
                        <td data-th="Phone"> {phone}
                        </td>
                        <td data-th="Email">
                        <a href={"mailto:" + email} target="__blank"> {email}</a>
                        </td>
                    </tr>
                );
            })
        ) : (
            <></>
        )} 
    </tBody>
);
}
export default DataBody;