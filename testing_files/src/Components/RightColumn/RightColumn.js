import React from 'react';
import BlogPost from './BlogPost';

const RightColumn = () => {
    const blogPosts = [
        {
            title: "BON IVER Releases 7\" In The UK",
            body: "BON IVER recently released a 7\" single of 'For Emma' in the UK via 4AD. The release also contains a non album track, 'Wisconsin,' on the b-side.",
            date: "09/22/08",
            locations: [
                "09/23/08 Stockholm, Sweden - Berns",
                "09/24/08 Gothenburg, Sweden - Pusterviksbaren",
                "09/25/08 Copenhagen, Denmark - Vega-Small Hall",
                "09/26/08 Hamburg, Germany - Theater @ Reeperbahn Festival",
                "09/28/08 Berlin, Germany - Postbahnhof",
                "09/29/08 Munich, Germany - Ampere",
                "09/30/08 Koln, Germany - Gebaude 9",
                "10/02/08 Paris, France - Maroquinerie",
                "10/03/08 Brussels, Belgium - Botanique",
                "10/04/08 Groningen, Netherlands - Take Root Festival Osterpoort",
                "10/05/08 Tourcoing, France - Grand Mix",
                "10/07/08 Dublin, Ireland - Tripod",
                "12/07/08 London, UK - Apollo Victoria Theatre"
            ]
        },
        {
            title: "BON IVER Performs For Myspace's Transmissions",
            body: "BON IVER have been all over the place recently. Not long ago they finished up a US tour, made their US television debut with Conan (see below), and are about to head overseas for yet another tour.",
            date: "09/10/08",
            locations: [
                "09/23/08 Stockholm, Sweden - Berns",
                "09/24/08 Gothenburg, Sweden - Pusterviksbaren",
                "09/25/08 Copenhagen, Denmark - Vega-Small Hall",
                "09/26/08 Hamburg, Germany - Theater @ Reeperbahn Festival"
            ]
        },
        {
            title: "BON IVER On Conan",
            body: "Last night BON IVER made their US television debut on Late Night with Conan O'Brien. The guys performed 'Flume' from For Emma, Forever Ago. Conan and the crowd seemed to enjoy themselves.",
            date: "09/09/08",
            locations: []
        }
    ];

    return (
        <div style={{ width: '70%', padding: '20px' }}>
            {blogPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
            ))}
        </div>
    );
};

export default RightColumn;