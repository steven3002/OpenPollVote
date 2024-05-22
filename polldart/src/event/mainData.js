// pages/votes.js

import React from 'react';
import EventContainer from '../components/EventContainer';

const VotesPage = () => {
    // Sample JSON data representing voting options
    const votingOptions = [
        {
            "id": 0,
            "creator": "winning11.testnet",
            "created_at": 1715680360914078200,
            "title": "Frog",
            "estimated_budget": 1,
            "total_votes": 0,
            "description": "Emerald frog, lily throne, nature's poetry.",
            "votes": []
        },
        {
            "id": 1,
            "creator": "winning11.testnet",
            "created_at": 1715680728501030400,
            "title": "Investigator",
            "estimated_budget": 12,
            "total_votes": 1,
            "description": "In gleaming metal, symbols of justice",
            "votes": [
                "winning11.testnet"
            ]
        },
        {
            "id": 2,
            "creator": "winning11.testnet",
            "created_at": 1715680988155916000,
            "title": "Test buying with this!",
            "estimated_budget": 11,
            "total_votes": 0,
            "description": "We'll make this price low to test out the AffiliateDirect process.",
            "votes": []
        }
    ];

    // Sample vote handling function
    const handleVote = (id) => {
        // Implement your vote handling logic here
    };

    return (
        <div className="container events-container vote-main">
            <div id="events-list">
                {votingOptions.map(option => (
                    <EventContainer
                        key={option.id}
                        title={option.title}
                        description={option.description}
                        handleVote={() => handleVote(option.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default VotesPage;
