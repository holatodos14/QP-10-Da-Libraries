import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { InputNumber } from 'primereact/inputnumber'


export default function index() {
    const [quantity, setQuantity] = useState(3)
    const [selectedImage, setSelectedImage] = useState('./image-product-1.jpg')

    const images = ['./image-product-1.jpg', './image-product-2.jpg', './image-product-3.jpg', './image-product-4.jpg'];

    const imageTemplate = (item) => {
        return (
            <img src={item} alt="Sneaker" className="w-full h-auto rounded-lg shadow-lg" />
        );
    };
    return (

        <div className="flex flex-col md:flex-row gap-44 align-middle items-center justify-center min-h-screen p-4">
            <div className="md:w-1/2">
                <img src={selectedImage} alt="Selected Sneaker" className="w-full h-auto rounded-lg shadow-lg mb-4" />
                <div className="flex justify-between">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className={`w-20 h-20 object-cover rounded-md cursor-pointer ${selectedImage === img ? 'border-2 border-orange-500' : ''}`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex-1">
                <h2 className="text-sm text-gray-500">SNEAKER COMPANY</h2>
                <h1 className="text-5xl font-bold mt-6">Fall Limited Edition Sneakers</h1>
                <p className="mt-12">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <div className="flex items-center mt-4">
                    <span className="text-3xl font-bold">$125.00</span>
                    <span className="ml-4 bg-slate-900 text-white px-2 py-1 rounded-md">50%</span>
                </div>
                <span className="block mt-2 text-gray-400 line-through">$250.00</span>
                <div className="flex mt-8 ">
                    <InputNumber
                        value={3}
                        showButtons
                        buttonLayout="horizontal"
                        decrementButtonClassName="p-button-secondary"
                        incrementButtonClassName="p-button-secondary"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                        className='w-48 bg-[#f7f8fd] flex items-center'
                        inputClassName='w-full text-center'
                        pt={{
                            input: { className: 'w-full text-center' },
                            incrementButton: { className: 'px-3 text-orange-500 ' },
                            decrementButton: { className: 'px-3 text-orange-500 ' }
                        }}
                    />
                    <Button
                        type="button"
                        label="Add to cart"
                        icon="pi pi-shopping-cart"
                        className="w-6/12 bg-[#ffac6a] hover:bg-[#ff7d1a] text-black font-bold text-base py-4 px-20 rounded-xl flex items-center justify-center"
                    />
                </div>
            </div>
        </div>

    )
}
