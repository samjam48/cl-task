import React from 'react';
import axios from 'axios';

export default function initialData() {            // retrieve information from each data source and map to global DB

        axios.get('/api/projects.json')
            .then(function (response) {
                for(var i in response.data){
                    DB.project[response.data[i].id] = response.data[i]
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('/api/project_stats.json')
            .then(function (response) {
                for(var i in response.data){
                    DB.project_stats[response.data[i].projectId] = response.data[i]
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get('/api/tags.json')
            .then(function (response) {
                for(var i in response.data){
                    DB.tags[i] = response.data[i]
                }
            })
            .catch(function (error) {
                console.log(error);
            });
            
        axios.get('/api/trending_ideas.json')
            .then(function (response) {
                for(var i in response.data){
                    DB.trending_ideas[response.data[i]._id] = response.data[i]
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
