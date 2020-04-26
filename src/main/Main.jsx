import React, {Component} from "react";
import {connect} from "react-redux";
import {findItemsAction, getAllItemsAction, setSearchAction} from "./mainActions"
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { openGroupDialogAction} from "../group/groupActions";
import GroupDialog from "../group/GroupDialog";

const root = {
    padding: '2px 4px',
    display: 'flex',
    width: 200,
    backgroundColor: 'transparent',
    boxShadow: 'none',
}

export class Main extends Component {
    constructor(props) {
        super(props);
        this.handleChangeSearch = this.handleChangeSearch.bind(this)
        this.props.getItems()
    }

    handleFind = (e) => {
        e.preventDefault()
        this.props.findItems(this.props.search)
    }

    handleChangeSearch = (env) => {
        this.props.setSearch(env.target.value)
    }

    handleModal = (id) => {
        this.props.openGroupDialog()
    }


    render() {
        const items = this.props.items;
        return (
            <div>
                <h1>Пользователи</h1>

                <Paper variant="outlined" style={root} >
                    <InputBase
                               onChange={this.handleChangeSearch}
                               placeholder="имя, логин"
                               inputProps={{'aria-label': 'поиск'}}
                    />

                    <IconButton color="primary" type="submit" aria-label="search" onClick={this.handleFind}>
                        <SearchIcon/>
                    </IconButton>

                </Paper>
                <br/><br/>

                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Имя</TableCell>
                                <TableCell colSpan={3}>Договор</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map(item => (
                                <TableRow key={`tableRow${item.id}`}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.contractor.name}</TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="primary"
                                                onClick={() => this.handleModal(item.id)}>
                                            modal
                                        </Button>
                                    </TableCell>
                                    {/*<TableCell>*/}
                                    {/*    <Button variant="outlined" color="primary"*/}
                                    {/*            onClick={() => this.onSaveModal({*/}
                                    {/*                id: item.id,*/}
                                    {/*                name: item.name,*/}
                                    {/*                contractor: item.contractor*/}
                                    {/*            })}>*/}
                                    {/*        Edit*/}
                                    {/*    </Button>*/}
                                    {/*</TableCell>*/}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                <GroupDialog/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.main.items,
        search: state.main.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => {
            dispatch(getAllItemsAction())
        },
        findItems: (id) => {
            dispatch(findItemsAction(id))
        },
        setSearch: (search) => {
            dispatch(setSearchAction(search))
        },
        openGroupDialog: () => {
            dispatch(openGroupDialogAction())
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)