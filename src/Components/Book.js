import React, { useState } from "react";
import Details from "./Details";

const Book = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState(null);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {book.map((item, index) => {
                    let thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;

                    return (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer border border-gray-700"
                            onClick={() => {
                                setShow(true);
                                setItem(item);
                            }}
                        >
                            <div className="flex flex-col h-full">
                                <div className="relative pt-[60%] bg-gray-900">
                                    {thumbnail && (
                                        <img
                                            src={thumbnail}
                                            alt={`${item.volumeInfo.title} cover`}
                                            className="absolute top-0 left-0 w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-2 line-clamp-2">
                                        {item.volumeInfo.title}
                                    </h3>
                                    {/* <div className="mt-2">
                                        <p className={`text-lg font-bold ${amount ? 'text-emerald-400' : 'text-gray-400'}`}>
                                            {amount ? `₹${amount}` : "Price Not Available"}
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {show && bookItem && (
                <Details show={show} item={bookItem} onClose={() => setShow(false)} />
            )}
        </>
    );
};

export default Book;