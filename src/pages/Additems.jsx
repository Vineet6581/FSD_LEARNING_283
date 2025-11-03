import React, { useState, useRef } from 'react';

const AddItems = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        price: '',
        publication: '',
        publicationDate: '',
        description: ''
    });

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const fileInputRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
        } else {
        setImagePreview(null);
        }
    };

    const handleFileButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        console.log('Selected Image File:', imageFile);
        alert('Item Added Successfully!');
        setFormData({
        title: '',
        author: '',
        price: '',
        publication: '',
        publicationDate: '',
        description: ''
        });
        setImageFile(null);
        setImagePreview(null);
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add a New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

            <div>
            <label htmlFor="title" className="block font-medium mb-1">Title</label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded"
            />
            </div>

            <div>
            <label htmlFor="author" className="block font-medium mb-1">Author</label>
            <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
            />
            </div>

            <div>
            <label htmlFor="price" className="block font-medium mb-1">Price (₹)</label>
            <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded"
            />
            </div>

            <div>
            <label htmlFor="publication" className="block font-medium mb-1">Publication</label>
            <input
                type="text"
                id="publication"
                name="publication"
                value={formData.publication}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
            />
            </div>

            <div>
            <label htmlFor="publicationDate" className="block font-medium mb-1">Publication Date</label>
            <input
                type="text"
                id="publicationDate"
                name="publicationDate"
                value={formData.publicationDate}
                onChange={handleChange}
                placeholder="e.g. 2021"
                className="w-full border border-gray-300 p-2 rounded"
            />
            </div>

            <div>
            <label className="block font-medium mb-1">Select Image</label>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
            />
            <button
                type="button"
                onClick={handleFileButtonClick}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Upload Image
            </button>
            {imageFile && (
                <span className="ml-4 text-gray-700">{imageFile.name}</span>
            )}
            </div>

            {imagePreview && (
            <div className="mt-4 text-center">
                <img
                src={imagePreview}
                alt="Selected Preview"
                className="mx-auto rounded max-h-48"
                />
            </div>
            )}

            <div>
            <label htmlFor="description" className="block font-medium mb-1">Description</label>
            <textarea
                id="description"
                name="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
            ></textarea>
            </div>

            <div className="text-center">
            <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
                Add Book
            </button>
            </div>
        </form>
        </div>
    );
};

export default AddItems;
