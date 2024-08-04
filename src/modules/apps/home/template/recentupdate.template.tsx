import React from 'react';
import { Box, Card, CardContent, CardMedia, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Pagination, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBar } from '../_styled/home.styled';
import useRecentController from '../controllers/recentupdate.controller';


const RecentlyUpdatedPage = () => {
    const stories = useRecentController();

    return (
        <Box sx={{ backgroundColor: '#f4f6f8', minHeight: '100vh', padding: '20px' }}>
            <SearchBar>
                <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Search the Recently Updated Stories..."
                    InputProps={{
                        startAdornment: <SearchIcon />,
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginLeft: '8px' }}
                >
                    Search
                </Button>
            </SearchBar>

            <Typography variant="h5" component="div" sx={{ margin: '20px 0', textAlign: 'center', fontWeight: 'bold' }}>
                The Library's Recently Updated Stories
            </Typography>
            
            <TableContainer component={Paper} sx={{ marginBottom: '20px', borderRadius: '8px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: '#3f51b5' }}>Story</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: '#3f51b5' }}>Chapters</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: '#3f51b5' }}>Reads</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: '#3f51b5' }}>Time Updated</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stories.map((book:any, index:any) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Card sx={{ display: 'flex', alignItems: 'center', boxShadow: 'none', cursor:'pointer' }}>
                                        <CardMedia
                                            component="img"
                                            image={book.img}
                                            alt={book.title}
                                            sx={{ width: '70px', height: '100px', marginRight: '10px' }}
                                        />
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography variant="h6">
                                                <strong>{book.title}</strong> by {book.author}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {book.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </TableCell>
                                <TableCell>{book.chapters}</TableCell>
                                <TableCell>{book.reads.toLocaleString()}</TableCell>
                                <TableCell>{book.updated}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={290} sx={{ margin: '20px auto', display: 'flex', justifyContent: 'center' }} />
        </Box>
    );
};

export default RecentlyUpdatedPage;
