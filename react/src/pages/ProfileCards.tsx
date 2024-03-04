import { UserCards } from "../components"
import React, { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
const ProfileCards = () => {
    const [users, setUsers] = useState<User[]>([])
    const [userName, setUserName] = useState<string>('')
    const [place, setPlace] = useState<string>('')
    const handleSubmit = () => {
        if (userName === '' || place === '') {
            toast.error("username and place shouldn't be empty")
        } else {
            if (userName.trim() === '' || place.trim() === '') {
                toast.error("username and place shouldn't be null value")
            } else {
                setUsers(() => {
                    return [...users, { userName, place }]
                })
                setPlace('')
                setUserName('')
            }
        }
    }
    return (
        <>
            <div className="m-5 gap-5 flex">
                <div className="flex flex-col w-1/6">
                    <label htmlFor="userName">
                        Enter your Name
                    </label>
                    <input
                    value={userName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                        type="text" className="p-3 border-2 border-black" placeholder="enter your name here" />
                </div>
                <div className="flex flex-col w-1/6">
                    <label htmlFor="place">
                        Enter your place
                    </label>
                    <input
                    value={place}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlace(e.target.value)}
                        type="text" className="p-3 border-2 border-black" placeholder="type your place" />
                </div>
                <div className="flex flex-col w-1/6">
                    <label htmlFor="place">'</label>
                    <button
                        onClick={handleSubmit}
                        className="hover:bg-green-600 hover:text-white hover:border-none p-3 border-2 border-black rounded-md">Add user</button>
                </div>
            </div>
            <UserCards users={users} />
            <Toaster />
        </>
    )
}

export default ProfileCards