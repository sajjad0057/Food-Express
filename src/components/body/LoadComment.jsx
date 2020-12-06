import dateFormat from "dateformat"
import Loading from "./Loading.js";


const LoadComment = (props) => {
  //console.log("LoadCommets.jsx--props---->",props);
  if(props.commentsIsLoading){
    return <Loading/>
  }
  else{
    return props.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <h4>{comment.author}</h4>
          <h5 className="text-muted">{comment.comment}</h5>
          <h6>Rating : {comment.rating}</h6>        
          {dateFormat(comment.date, "dddd, mmmm dS, yyyy")}
          <hr/>
        </div>
      );
    });

  }

};

export default LoadComment;
 