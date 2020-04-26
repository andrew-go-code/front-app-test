import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";
import {closeGroupDialogAction, getGroupsAction} from "./groupActions";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import {getAllItemsAction} from "../main/mainActions";
import DialogContentText from "@material-ui/core/DialogContentText";

export class GroupDialog extends Component {

    constructor(props) {
        super(props);
        this.props.getItems()
        this.props.getGroups()
    }

    handleClose = () => {
        this.props.closeGroupDialog();
    };

    handleRemove = (id) => {
        this.props.remove(id)
    }

    render() {
        const items = this.props.items;
        const items2 = this.props.items2;
        console.log("items2", items2)
        return (
            <div>
                <Dialog fullWidth={true} maxWidth={"lg"}
                    open={this.props.groupDialogOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Группы"}</DialogTitle>
                    <DialogContent>
                        <Paper>
                            <Table>
                                <TableBody>
                                    <TableRow>

                                        <TableCell align="center" style={{ verticalAlign: 'top' }}>
                                            <DialogContentText id="alert-dialog-description">
                                                Активные
                                            </DialogContentText>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Id</TableCell>
                                                        <TableCell colSpan={2}>Наименование</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {items.map(item => (
                                                        <TableRow key={`tableRow${item.id}`}>
                                                            <TableCell>{item.id}</TableCell>
                                                            <TableCell>{item.name}</TableCell>
                                                            <TableCell>
                                                                <Button variant="outlined" color="secondary"
                                                                        onClick={() => this.handleRemove(item.id)}>
                                                                    Удалить
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableCell>

                                        <TableCell align="center" style={{ verticalAlign: 'top' }}>
                                            <DialogContentText id="alert-dialog-description">
                                                Доступные
                                            </DialogContentText>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Id</TableCell>
                                                        <TableCell colSpan={2}>Наименование</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {items2.map(item => (
                                                        <TableRow key={`tableRow${item.id}`}>
                                                            <TableCell>{item.id}</TableCell>
                                                            <TableCell>{item.name}</TableCell>
                                                            <TableCell>
                                                                <Button variant="outlined" color="primary"
                                                                        onClick={() => this.handleRemove(item.id)}>
                                                                    Добавить
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps state", state)
    return {
        groupDialogOpen: state.group.groupDialogOpen,
        items: state.group.items,
        items2: state.main.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeGroupDialog: () => {
            dispatch(closeGroupDialogAction())
        },
        getGroups: () => {
            dispatch(getGroupsAction(1))
        },
        getItems: () => {
            dispatch(getAllItemsAction())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupDialog)