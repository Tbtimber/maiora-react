import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Feed from './Feed'

import '../styles/InstagramFeed.css'

const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();
        console.log('Token below V')
        console.log(token)
        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${props.token}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        async function fetchInstagramToken () {
            try{
                axios
                    .get(`https://api.instagram.com/oauth/authorize
                        ?client_id=271319565040108|a5a796a41ff0e71f41581acbdce19f18
                        &redirect_uri=localhost
                        &scope=user_profile,user_media
                        &response_type=code
                        &state=1`)
                    .then((resp) => {
                        console.log('Test MD')
                        console.log(resp)
                    })
            } catch (err) {
                console.log('error', err)
            }
        }

        fetchInstagramToken()
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className="container">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))} 
        </div>
    );
}
 
export default InstaFeeds;