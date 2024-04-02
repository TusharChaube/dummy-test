import React, { forwardRef ,useState} from "react";
import "./Post.css";
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";
import DeleteIcon from '@material-ui/icons/Delete';

const Post = forwardRef(
  ({ displayName, text, personal, onClick }, ref) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
      setIsClicked(!isClicked);
    };
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar
            style={{ width: '100px', height: '100px' }}
            avatarStyle='Circle'
            {...generateRandomAvatarOptions() }
          />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            {isClicked ? (
        <FavoriteIcon
          fontSize="small"
          style={{ color: "red", cursor: "pointer" }}
          onClick={handleClick}
        />
      ) : (
        <FavoriteBorderIcon
          fontSize="small"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        />
      )}
            <PublishIcon fontSize="small" />
            {personal ? (
              <DeleteIcon fontSize="small" onClick={onClick}/>
            ) : ("")}
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
