import {UserModel} from "../models/UserModel";
import {FC} from "react";
import users from "./Users";

interface UserProps {
    user: UserModel;
    lift:(users:UserModel) => void
};
const User:FC<UserProps> = ({user, lift}) =>{
return(
    <div className="User">
        <h2>{user.firstName} {user.lastName} (Username: {user.username})</h2>
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} style={{ width: '150px' }} />
            <button onClick={() => {
                    lift(user);
            }}>choose
            </button>
        <h3>Personal Information</h3>
        <p><strong>Full Name:</strong> {user.firstName} {user.maidenName} {user.lastName}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Date of Birth:</strong> {user.birthDate}</p>
        <p><strong>Blood Group:</strong> {user.bloodGroup}</p>
        <p><strong>Height:</strong> {user.height} cm</p>
        <p><strong>Weight:</strong> {user.weight} kg</p>
        <p><strong>Eye Color:</strong> {user.eyeColor}</p>
        <p><strong>Hair:</strong> {user.hair.color} ({user.hair.type})</p>

        <h3>Address Information</h3>
        <p><strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state}, {user.address.country} {user.address.postalCode}</p>
        <p><strong>Coordinates:</strong> ({user.address.coordinates.lat}, {user.address.coordinates.lng})</p>

        <h3>Company Information</h3>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Department:</strong> {user.company.department}</p>
        <p><strong>Title:</strong> {user.company.title}</p>
        <p><strong>Company Address:</strong> {user.company.address.address}, {user.company.address.city}, {user.company.address.state}, {user.company.address.country} {user.company.address.postalCode}</p>

        <h3>Bank Information</h3>
        <p><strong>Card Type:</strong> {user.bank.cardType}</p>
        <p><strong>Card Number:</strong> {user.bank.cardNumber}</p>
        <p><strong>Card Expiry:</strong> {user.bank.cardExpire}</p>
        <p><strong>IBAN:</strong> {user.bank.iban}</p>
        <p><strong>Currency:</strong> {user.bank.currency}</p>

        <h3>Other Information</h3>
        <p><strong>IP Address:</strong> {user.ip}</p>
        <p><strong>MAC Address:</strong> {user.macAddress}</p>
        <p><strong>University:</strong> {user.university}</p>
        <p><strong>EIN:</strong> {user.ein}</p>
        <p><strong>SSN:</strong> {user.ssn}</p>
        <p><strong>User Agent:</strong> {user.userAgent}</p>

        <h3>Crypto Information</h3>
        <p><strong>Coin:</strong> {user.crypto.coin}</p>
        <p><strong>Wallet:</strong> {user.crypto.wallet}</p>
        <p><strong>Network:</strong> {user.crypto.network}</p>

        <p><strong>Role:</strong> {user.role}</p>
    </div>
)
}

export default User;