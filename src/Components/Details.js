import React from 'react';
import { X } from 'lucide-react';

const Details = ({ show, item, onClose }) => {
    if (!show) return null;
    
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    
    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
                <button 
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>
                
                <div className="flex flex-col md:flex-row gap-6">
                    <img 
                        src={thumbnail} 
                        alt={item.volumeInfo.title}
                        className="w-48 h-64 object-cover rounded-lg"
                    />
                    <div className="flex-1 text-gray-200">
                        <h1 className="text-2xl font-bold mb-2">{item.volumeInfo.title}</h1>
                        <h3 className="text-lg text-gray-300 mb-2">{item.volumeInfo.authors}</h3>
                        <h4 className="text-gray-400">
                            {item.volumeInfo.publisher}
                            <span className="ml-2">{item.volumeInfo.publishedDate}</span>
                        </h4>
                        <a 
                            href={item.volumeInfo.previewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4"
                        >
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                                More
                            </button>
                        </a>
                    </div>
                </div>
                
                <p className="text-gray-300 mt-6 leading-relaxed">
                    {item.volumeInfo.description}
                </p>
            </div>
        </div>
    );
};

export default Details;