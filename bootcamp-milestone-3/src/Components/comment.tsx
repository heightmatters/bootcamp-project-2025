import style from "./comment.module.css";
import type { IComment } from "@/database/blogPageSchema";
{
  /* When we pass props, the name that we use to pass values
		is the key for the type
*/
}

type CommentProps = {
  comment: IComment;
};

{
  /* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/
}
function parseCommentTime(time: Date) {
  /*converting the date to JS*/
  const date = new Date(time);

  /*telling it what values the date should be in*/
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={style.commentbox}>
      <h4 className={style.user}>{comment.user}</h4>
      <p className={style.text}>{comment.comment}</p>
      <span className={style.date}>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
