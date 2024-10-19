import { useContext, useEffect, useRef, useState } from "react";
import { loggedinUserContext } from "./consts";
import { useDispatch, useSelector } from "react-redux";
import { getALLUsers } from "./store/actions";

export const TableFill = (props) => {
    return (
        <>
            {
                <table>
                    <thead>
                        <tr>
                            {
                                (Object.keys(props.posts[0])).map((key) => <th> {key}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.posts.map((post) => {
                                return <tr>
                                    {
                                        Object.values(post).map((value) => {
                                            return <td>{`${JSON.stringify(value)}`}</td>
                                        })
                                    }</tr>
                            })
                        }
                    </tbody>
                </table>

            }
        </>
    )
}

export const listFill = () => {
    let students = [{
        id: 1,
        name: "Sindhuja"
    },
    {
        id: 2,
        name: "Simmran"
    }]

    return (
        <ul>
            {
                students.map((item) => {
                    <li>{item.name}</li>
                })
            }
        </ul>
    )
}
export function Posts1(props) {
    const context = useContext(loggedinUserContext);
    const { data, loading, error} = useSelector((state)=>state);
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loggedinUser, setLoggedInuser] = useState(context);
    const inputRef = useRef();
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Sindhuja"
        },
        {
            id: 2,
            name: "Simmran"
        }
    ]);


    useEffect(() => {
        const fetchData = async () => {
            //https://dummyjson.com/comments
            //https://dummyjson.com/products
            const response = await fetch("https://dummyjson.com/comments");
            if (!response.ok) {
                alert("Error", response);
            } else {
                console.log("Called and got data")
                const data = await response.json();
                setPosts(data.comments);
            }
        }
        fetchData();
        dispatch(getALLUsers());
    }, []); // To restrict for only once on reload


    const handleClick = (e) => {
        setCount(count + 1)
    }

    const handleChangeRef = () => {
        alert(inputRef.current.value)
    }
    const handStateSelection = (e) => {
        const { value, name } = e.target;
        alert(name + ":" + value)
    }

    const handleSubmit = () => {
        alert("from submiited")
    }
    return (
        <div>
            <p>{JSON.stringify(loggedinUser)}</p>
            {/* {
                JSON.stringify(students)
            } */}
            <ul>

                {students.map((student) => {
                    return <li>{JSON.stringify(student)}</li>
                })
                }

            </ul>
            {
                data !== null && data.length > 0 ? <TableFill posts={data}></TableFill> : ''
            }
            <p>{props.name}</p>
            <>{listFill}</>
            {
                posts !== null && posts.length > 0 ? <TableFill posts={posts}></TableFill> : ''
            }
            <button onClick={()=>dispatch(getALLUsers())}>Call Again</button>
            <p>{props.graduation}</p>
            <select name="state" onKeyDown={handStateSelection}>
                <optgroup>
                    <option value={'KA'}>AP</option>
                    <option value={'KA'}>TS</option>
                    <option value={'KA'}>TN</option>
                    <option value={'KA'}>KA</option>
                    <option value={'KL'}>KL</option>
                </optgroup>
            </select>
            <loggedinUserContext.Provider value={{ email: "Sikindar@gmail.com", token: "adadd" }}>

            </loggedinUserContext.Provider>
            {/* <loggedinUserContext.Consumer>
                
            </loggedinUserContext.Consumer> */}
            <input type="text" defaultValue={"sagar"} ref={inputRef} onChange={handleChangeRef} />
            <p>COunter :{count}</p>
            <button onClick={handleClick} className="btn btn-primary">InCrement</button>
            <h1>Posts Hello</h1>
            <button onClick={handleSubmit}>Singup</button>
        </div>
    )
};

export default Posts1;