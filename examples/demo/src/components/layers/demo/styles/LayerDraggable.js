import {makeStyles} from "@material-ui/core";
import combineStyles from "../../../builder/styles"

const draggableStyles = ({
    draggable: ({
        touchAction: 'none'
    }),
});

const useStyle = makeStyles(combineStyles(
    draggableStyles,
));

export default useStyle;
