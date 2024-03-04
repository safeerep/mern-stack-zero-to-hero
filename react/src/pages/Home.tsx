import { useNavigate } from "react-router";

const Home = () => {
    const pages = ['profile-cards', 'count', 'a', 'f', 'd'];
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full text-center">
                <span className="text-3xl font-semibold">Select route to move on</span>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full gap-4 mb-2 px-12">
                {pages.length &&
                    pages.map((page, index) => {
                        return (
                            <div
                                onClick={() => {
                                    navigate(`/${page}`)
                                }}
                                key={page}
                                className={`m-5 
                                    ${(index + 1) % 7 === 0 ? 'bg-violet-600' :
                                        (index + 1) % 6 === 0 ? 'bg-indigo-600' :
                                            (index + 1) % 5 === 0 ? 'bg-blue-600' :
                                                (index + 1) % 4 === 0 ? 'bg-green-600' :
                                                    (index + 1) % 3 === 0 ? 'bg-yellow-600' :
                                                        (index + 1) % 2 === 0 ? 'bg-orange-600' :
                                                            (index + 1) % 1 === 0 ? 'bg-red-600' :
                                                                'bg-white'} 
                                    h-60 inline-block cursor-pointer border p-2`}
                            >
                                <div className="flex flex-col justify-center items-center w-full h-full">
                                    <span>Go to</span>
                                    <div className="text-center font-bold">
                                        <span>{page}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    )
}

export default Home