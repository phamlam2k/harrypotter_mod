import React, { useState, MouseEvent } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Menu, MenuItem, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReactFlow, { MiniMap, Controls, Background, Node, Edge } from 'react-flow-renderer';
import 'react-flow-renderer/dist/style.css';

interface Chapter {
  id: string;
  label: string;
  content: string;
}

const chapters: Chapter[] = [
  { id: '1', label: 'Chapter 1', content: 'Content of Chapter 1' },
  { id: '2', label: 'Chapter 2', content: 'Content of Chapter 2' },
  { id: '3', label: 'Chapter 3', content: 'Content of Chapter 3' },
  { id: '4', label: 'Chapter 4', content: 'Content of Chapter 4' },
  { id: '5', label: 'Chapter 5', content: 'Content of Chapter 5' },
  { id: '6', label: 'Chapter 6', content: 'Content of Chapter 6' },
];

const TestTemplate = () => {
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

  const nodes: Node[] = chapters.map(chapter => ({
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
    <div>
      <h1>Harry Potter Chapters</h1>

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
    </div>
  );
};

export default TestTemplate;
