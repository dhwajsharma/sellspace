// import { useSelector } from "react-redux";
// import { useHistory } from "react-router";
// import { selectpostIsOpen } from "../../features/postSlice";
// import "./OpenPost.css"

// const OpenPost = () => {
//     const history = useHistory();
//     const selectedPost = useSelector(selectpostIsOpen);

//     return (
//         <div className="openpost">
//             <div className="openpost__left">
//                 <img src={selectedPost?.postImage} alt="" />
//             </div>

//             <div className="openpost__right">
//                 <h2>{selectedPost?.name}</h2>
//                 <div className="openpost__subHeading">
//                     <p>{selectedPost?.email}</p>
//                 </div>
//                 <div className="openpost__message">

//                     <h2>Title: </h2>
//                     <p>{selectedPost?.title}</p>

//                     <h2>Description: </h2>
//                     <p>{selectedPost?.description}</p>

//                     <h2>Price: </h2>
//                     <p>{"₹ "}{selectedPost?.price}</p>

//                     <h2>Contact Number: </h2>
//                     <p>{selectedPost?.number}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OpenPost

import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectpostIsOpen } from "../../features/postSlice";
import "./OpenPost.css"

const OpenPost = () => {
    const history = useHistory();
    const selectedPost = useSelector(selectpostIsOpen);

    return ( 
        
        
         <div  className="openpost">
            <div className=" col-lg-6  openpost__left">
                <img src={selectedPost?.postImage} alt="" />
            </div>

            <div className=" col-lg-6 openpost__right">
                <h2>{selectedPost?.name}</h2>
                <div className="openpost__subHeading">
                    <p>{selectedPost?.email}</p>
                </div>
                <div className="openpost__message">

                    <h2>Title: </h2>
                    <p>{selectedPost?.title}</p>

                    <h2>Description: </h2>
                    <p>{selectedPost?.description}</p>

                    <h2>Price: </h2>
                    <p>{"₹ "}{selectedPost?.price}</p>

                    <h2>Contact Number: </h2>
                    <p>{selectedPost?.number}</p>
                </div>
            </div>
         </div>
        
    )
}

export default OpenPost




