import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';

// Styles
import styles from "./styles.module.scss";

interface Props {
  imageUrl: string;
  tags: string;
  comments: number;
  likes: number;
  id: number;
}

const ImageCard: React.FC<Props> = ({ 
  imageUrl,
  tags,
  comments,
  likes,
  id,
}) => {
  return (
    <Card className={styles.card}>
      <Link className={styles.link} to={`images/${id}`} />
      <CardActionArea>
        <CardMedia
          image={imageUrl}
          className={styles.image}
        />
        <CardContent className={styles.content}>
          <div>
            <FavoriteIcon />
            <Typography variant="body2" color="textSecondary" component="p">
              {likes}
            </Typography>
          </div>
          <div>
            <CommentIcon />
            <Typography variant="body2" color="textSecondary" component="p">
              {comments}
            </Typography>
          </div>
          <ul className={styles.tags}>
            {
              tags.split(',').map(tag => <li key={tag}>
                <Chip label={tag} />
              </li>)
            }
          </ul>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ImageCard;