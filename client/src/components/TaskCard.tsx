import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
require("dotenv").config();
const axios = require("axios").default;

const { REACT_APP_BACKEND_URL } = process.env;

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: 10,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 25,
    },
    pos: {
        marginBottom: 12,
    },
});

function SimpleCard(props: any) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const handleDelete = () => {
        console.log(`localhost:8000/api/tasks/${props.task._id}`);
        axios
            .delete(`${REACT_APP_BACKEND_URL}/api/tasks/${props.task._id}`)
            .then((response: any) => {
                console.log(response);
                props.forceUpdateFunc();
            })
            .catch((error: any) => {
                console.log("not successful");
                console.log(error);
            });
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textPrimary"
                    gutterBottom
                >
                    {props.task.title}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    {props.task.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default SimpleCard;
