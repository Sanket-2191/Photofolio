import React from 'react'

const Image = ({ image, setIndex, index }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" onClick={() => setIndex(index)}>
            {/* Image */}
            <img className="w-full" src={image.url} alt={image.title} />

            {/* Image Title */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{image.title}</div>
            </div>
        </div>
    )
}

export default Image
