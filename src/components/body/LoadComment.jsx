import dateFormat from "dateformat"
const LoadComment = (props) => {
  console.log(props);
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
};

export default LoadComment;
