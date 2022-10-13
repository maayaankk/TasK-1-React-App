import React, {useState, useEffect} from 'react'
import { Button, Input, Typography } from '@mui/material';
import axios from '../axios';
import Card from '../components/Card'
import TextField from '@mui/material/TextField';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function DataFetching(props) {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});

    // const [userId, setUserId] = useState({});
    const [id, setID] = useState()

    useEffect(() => {
        const getAllUserByID = async () => {
            const url = `get-user-data-byId/${id}`
            await axios.get(url
            //     , {
            //     headers: {
            //         'Authorization': props.token
            //     }
            // }
            )
                .then(res => {
                    console.log(res);
                    setPost(res.data.data);
                })
                .catch(err => {
                    console.log(err)
                })
            
        }
        // getAllUserData();
        getAllUserByID();
    }, [id])

        const deleteAllUserByID = async () => {
            const url = `/delete-user-data-byId/${id}`
            await axios.delete(url 
                , {
                headers: {
                    'Authorization': props.token
                }
            })
                .then(res => {
                    console.log(res);
                    setPost(res.data.data);
                })
                .catch(err => {
                    console.log(err)
                })
        }

    useEffect(() => {
        const getAllUserData = async () => {
            const url = '/get-user';
            await axios.get(url
                , {
                    headers: {
                        'Authorization': props.token,
                    }
                }
                )
                    .then(res => {
                        console.log(res)
                        console.log(props.token)
                        setPosts(res.data.data.dataReceived);
                    })
                    .catch(err => {
                        console.log(err)
                    })

        }
        getAllUserData();
    }, [])

  return (
    <>
    <div style={{display: "flex",flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
    <TextField label={'Search Id...'}  id="outlined-basic" variant="outlined" type="text" value={id} onChange={e => setID(e.target.value)}/>
    <Typography>{post.email}</Typography>
    </div>
    <div style={{display: "flex" ,flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", marginBottom: 20}}>
        {console.log(posts)}
                {
                    posts.map(res => (
                        <>
                            <Card 
                            key={res.ID}
                            id={res.ID}
                            email={res.email}
                            />
                           {/* <button onClick={deleteAllUserByID}>delete</button> */}
                        </>
                            // {/* <div>
                            //     <h4>ID:{res.ID}</h4>
                            // </div>
                            // <div>
                            //     <h4>Email:{res.email}</h4>
                            // </div>
                            // <div>
                            //     <h4>Password:{res.password}</h4>
                            // </div> */}
                        
                    ))
                }
         </div>
        {/* <Input outlined /> */}
            {/* {console.log(post)} */}
        
        {/* </div> */}
     {/* </div> */}
    </>
  )
}

export default DataFetching
