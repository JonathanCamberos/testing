import React from 'react';

const BlogPost = ({ title, body, date, locations }) => {
    return (
        <div style={{ marginBottom: '40px' }}>
            <h3>{title}</h3>
            <p>{body}</p>
            <p><strong>Tour Dates:</strong></p>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {locations.map((location, index) => (
                    <li key={index}>{location}</li>
                ))}
            </ul>
            <p><strong>Posted on:</strong> {date}</p>
            <hr />
        </div>
    );
};

export default BlogPost;