import React, { useState, MouseEvent } from 'react';
import { 
  Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, 
  Menu, MenuItem, IconButton, Box, Typography, Container, Paper, Grid, 
  Card, CardContent, CardMedia 
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReactFlow, { MiniMap, Controls, Background, Node, Edge } from 'react-flow-renderer';
import 'react-flow-renderer/dist/style.css';
import books from './data.book';

const book = books[0]; 

const BookTemplate = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<'rewrite' | 'readmore' | ''>('');
  const [newChapterContent, setNewChapterContent] = useState('');

  const handleOpenMenu = (event: MouseEvent<HTMLElement>, chapter: Chapter) => {
    setSelectedChapter(chapter);
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleOpenDialog = (type: 'rewrite' | 'readmore') => {
    setDialogType(type);
    setDialogOpen(true);
    setMenuAnchorEl(null);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedChapter(null);
    setNewChapterContent('');
  };

  const handleSave = () => {
    if (selectedChapter) {
      console.log(`New content for ${selectedChapter.label}:`, newChapterContent);
    }
    handleCloseDialog();
  };

  const nodes: Node[] = book.chapters.map(chapter => ({
    id: chapter.id,
    data: { label: (
      <>
        <span>{chapter.label}</span>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={(event) => handleOpenMenu(event, chapter)}
        >
          <MoreVertIcon />
        </IconButton>
      </>
    )},
    position: { x: 250, y: (parseInt(chapter.id) - 1) * 100 },
  }));

  const edges: Edge<any>[] | undefined = [];

  return (
    <Container>
      <Box display="flex" alignItems="center" mb={4}>
        <CardMedia
          component="img"
          alt={book.title}
          image={book.image}
          title={book.title}
          style={{ width: '200px', marginRight: '20px' }}
        />
        <Box>
          <Typography variant="h4">{book.title}</Typography>
          <Typography variant="h6">Author: {book.author}</Typography>
          <Typography variant="body1">Genre: {book.genre}</Typography>
          <Typography variant="body1">Age: 8 & Up</Typography>
          <Typography variant="body1" paragraph>{book.description}</Typography>
          <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
            Get This Book
          </Button>
          <Button variant="contained" color="secondary">
            Read Excerpt
          </Button>
        </Box>
      </Box>
      
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          {dialogType === 'rewrite' ? `Rewrite ${selectedChapter?.label}` : `Read More ${selectedChapter?.label}`}
        </DialogTitle>
        <DialogContent>
          {dialogType === 'rewrite' ? (
            <TextField
              autoFocus
              margin="dense"
              label="New Chapter Content"
              type="text"
              fullWidth
              multiline
              rows={4}
              value={newChapterContent}
              onChange={(e) => setNewChapterContent(e.target.value)}
            />
          ) : (
            <div>{selectedChapter?.content}</div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          {dialogType === 'rewrite' && (
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          )}
        </DialogActions>
      </Dialog>

      <Menu
        anchorEl={menuAnchorEl}
        keepMounted
        open={Boolean(menuAnchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleOpenDialog('readmore')}>Read More</MenuItem>
        <MenuItem onClick={() => handleOpenDialog('rewrite')}>Rewrite</MenuItem>
      </Menu>

      <div style={{ height: 600 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          style={{ width: '100%', height: '100%' }}
        >
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </Container>
  );
};

export default BookTemplate;
