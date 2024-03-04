const UserCards = ({ users }: { users: User[] }) => {
    console.log('here', users)
    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full gap-4 mb-2 px-12">
                {
                    users.map((user: User, index: number) => (
                        <div key={index}
                            className={`m-5 
                                    ${(index + 1) % 7 === 0 ? 'bg-violet-600' :
                                    (index + 1) % 6 === 0 ? 'bg-indigo-600' :
                                        (index + 1) % 5 === 0 ? 'bg-blue-600' :
                                            (index + 1) % 4 === 0 ? 'bg-green-600' :
                                                (index + 1) % 3 === 0 ? 'bg-yellow-600' :
                                                    (index + 1) % 2 === 0 ? 'bg-orange-600' :
                                                        (index + 1) % 1 === 0 ? 'bg-red-600' :
                                                            'bg-white'} 
                                    h-40 inline-block cursor-pointer border p-2 text-center text-white`}
                        >
                            <span className='text-2xl'>{user.userName}</span> <br />
                            <span className='text-2xl'> from {user.place}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default UserCards