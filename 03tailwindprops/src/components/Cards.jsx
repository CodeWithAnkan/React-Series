import React from 'react'

function Cards({username, header="Visit me"}) { // Can be used props and props.username but since we know what we need, we can directly destructure using {}. For default value, if someone didn't pass header in App then we can set header = "" as default value
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
                <img
                    src="https://images.pexels.com/photos/27869832/pexels-photo-27869832/free-photo-of-a-woman-laying-on-a-couch-with-her-hair-blowing-in-the-wind.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
                <div className="mt-6 mb-2">
                    <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                        {username}
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">{header}</h2>
                </div>
                <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
                    amet
                </p>
            </div>
        </div>
    )
}

export default Cards
