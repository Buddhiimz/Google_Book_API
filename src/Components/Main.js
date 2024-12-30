import React, { useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import Book from "./Book";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            axios
                .get(
                    `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyB9_uIePHOB6qMv74iRECQ8NI-2rTJmEAY&maxResults=40`
                )
                .then((res) => setData(res.data.items || []))
                .catch((err) => console.error("Error fetching data:", err));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 font-poppins">
            <div className="header pt-16 pb-2 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    A world without books is like a 
                        <br /> 
                        <span className="text-blue-400">mind without thoughts.</span>
                    </h1>
                </div>
                
                <div className="max-w-2xl mx-auto relative">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6 text-center">
                        Find Your Book
                    </h2>
                    
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter Your Book Name"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={searchBook}
                            className="w-full px-6 py-4 text-lg rounded-full border border-gray-700 
                                     bg-gray-800 text-white placeholder-gray-400
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                     shadow-lg"
                        />
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2
                                         text-gray-400 hover:text-blue-400 transition-colors">
                            <Search size={24} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-10 max-w-7xl">
                {bookData.length > 0 ? (
                    <Book book={bookData} />
                ) : (
                    <p className="text-center text-gray-400 text-lg">
                        No books found. Try searching for something else.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Main;