import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Paper,
    IconButton,
    Tooltip,
    FormControlLabel,
    Card,
    CardContent,
    Typography,
    Button,
} from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
import { visuallyHidden } from '@mui/utils';
import FeatherIcon from 'feather-icons-react';
import Breadcrumb from '../../../layouts/full-layout/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import CustomSwitch from '../../../components/forms/custom-elements/CustomSwitch';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getTeam from '../../../actions/TeamActions/getTeamActions';

// const rows = Teams;

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'team_name',
        numeric: false,
        disablePadding: false,
        label: 'Name',
    },
    {
        id: 'team_description',
        numeric: false,
        disablePadding: false,
        label: 'Description',
    },
    {
        id: 'created_date',
        numeric: false,
        disablePadding: false,
        label: 'Created_date',
    },
    {
        id: '',
        numeric: false,
        disablePadding: false,
    },

];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };


    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};


const BCrumb = [
    {
        to: '/dashboards/dashboard',
        title: 'Home',
    },
    {
        title: ' Team List',
    },
];

const TeamLists = () => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rows, setRows] = React.useState([])
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const getTeams = await getTeam(dispatch, "");
                if (getTeams.code === "000") {
                    setRows(getTeams.response?.result);
                }
            } catch (error) {
                console.error('Fetching teams failed:', error.message);
            }
        };

        fetchTeams();
    }, []);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const addTeam = () => {
        navigate('/addTeam')
    }
    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box>
            <PageContainer title="Team List" description="this is Team List page">
                {/* breadcrumb */}
                <Breadcrumb title="Team List" items={BCrumb} />
                {/* end breadcrumb */}
                <Card>
                    <CardContent>
                        <Box>
                            <Paper sx={{ width: '100%', mb: 2 }}>
                                <Tooltip title="Add Team">
                                    <Button style={{ backgroundColor: "#05b2bd", color: "#fff", float: "right" }} onClick={addTeam}> + ADD</Button>
                                </Tooltip>
                                <TableContainer>
                                    <Table
                                        sx={{ minWidth: 750 }}
                                        aria-labelledby="tableTitle"
                                        size={dense ? 'small' : 'medium'}
                                    >
                                        <EnhancedTableHead
                                            order={order}
                                            orderBy={orderBy}
                                            onSelectAllClick={handleSelectAllClick}
                                            onRequestSort={handleRequestSort}
                                            rowCount={rows.length}
                                        />
                                        <TableBody>
                                            {stableSort(rows, getComparator(order, orderBy))
                                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                .map((row) => {
                                                    return (
                                                        <TableRow
                                                            hover
                                                            onClick={(event) => handleClick(event, row.name)}
                                                            team=""
                                                            tabIndex={-1}
                                                            key={row.name}
                                                        >
                                                            <TableCell>
                                                                <Typography color="textSecondary" variant="subtitle2" >
                                                                    {row.team_name}
                                                                </Typography>

                                                            </TableCell>
                                                            <TableCell>
                                                                <Typography color="textSecondary" variant="subtitle2">
                                                                    {row.team_description}
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Typography color="textSecondary" variant="subtitle2">
                                                                    {row.created_date}
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Tooltip title="Edit">
                                                                    <IconButton component={Link} to="/addTeam">
                                                                        <FeatherIcon icon="edit-3" width="18" />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                            {emptyRows > 0 && (
                                                <TableRow
                                                    style={{
                                                        height: (dense ? 33 : 53) * emptyRows,
                                                    }}
                                                >
                                                    <TableCell colSpan={6} />
                                                </TableRow>
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    component="div"
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </Paper>
                            <FormControlLabel
                                control={<CustomSwitch checked={dense} onChange={handleChangeDense} />}
                                label="Dense padding"
                            />
                        </Box>
                    </CardContent>
                </Card>
            </PageContainer>
        </Box>
    );
};

export default TeamLists;
