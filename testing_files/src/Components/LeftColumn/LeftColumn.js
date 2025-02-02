import React from 'react';

const LeftColumn = () => {
    const tourDates = [
        { date: '12/03/08', location: 'Dublin, Ireland - Dublin National Stadium' },
        { date: '12/06/08', location: 'Ghent, Belgium - Gent Vooruit' },
        { date: '12/07/08', location: 'London, UK - Apollo Victoria Theatre' },
        { date: '12/10/08', location: 'New York, NY - Town Hall w/ The Tallest Man on Earth' },
        { date: '12/11/08', location: 'New York, NY - Town Hall w/ The Tallest Man on Earth' },
        { date: '12/14/08', location: 'Boston, MA - The Wilbur Theatre w/ The Tallest Man on Earth' }
    ];

    return (
        <div style={{ width: '30%', padding: '20px' }}>
            <h2>UPCOMING</h2>
            <h3>JOHN BELTRAN TOUR DATES</h3>
            <p><a href="#">(Click here to view all shows)</a></p>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {tourDates.map((tour, index) => (
                    <li key={index}>
                        <strong>{tour.date}</strong> - {tour.location}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftColumn;