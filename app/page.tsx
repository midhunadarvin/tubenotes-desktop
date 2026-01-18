'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import NotePage from '@/components/NotePage';
import ErrorMessage from '@/components/ErrorMessage';
import LoadingSpinner from '@/components/LoadingSpinner';
import { storage } from '@/lib/storage';
import { fetchYouTubeMetadata } from '@/lib/youtube';
import { VideoNote, Folder } from '@/types';

export default function Home() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [notes, setNotes] = useState<VideoNote[]>([]);
  const [selectedFolderId, setSelectedFolderId] = useState('root');
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quickFilter, setQuickFilter] = useState<'all' | 'important' | 'completed' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Load initial data
  useEffect(() => {
    try {
      const data = storage.getData();
      setFolders(data.folders);
      setNotes(data.notes);
    } catch (err) {
      setError('Failed to load data. Please refresh the page.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Add new folder
  const handleAddFolder = (name: string, parentId: string | null) => {
    try {
      const newFolder = storage.addFolder({ name, parentId });
      setFolders([...folders, newFolder]);
    } catch (err) {
      setError('Failed to create folder. Please try again.');
    }
  };

  // Delete folder
  const handleDeleteFolder = (folderId: string) => {
    if (folderId === 'root') return;
    if (confirm('Are you sure you want to delete this folder and all its notes?')) {
      try {
        storage.deleteFolder(folderId);
        const data = storage.getData();
        setFolders(data.folders);
        setNotes(data.notes);
        if (selectedFolderId === folderId) {
          setSelectedFolderId('root');
        }
      } catch (err) {
        setError('Failed to delete folder. Please try again.');
      }
    }
  };

  // Add new note
  const handleAddNote = async (url: string) => {
    try {
      const metadata = await fetchYouTubeMetadata(url);
      if (!metadata) {
        setError('Failed to fetch video metadata. Please check the URL and try again.');
        return;
      }

      const newNote = storage.addNote({
        url,
        title: metadata.title,
        channelName: metadata.channelName,
        folderId: selectedFolderId,
        content: '',
        status: 'unwatched',
      });

      setNotes([...notes, newNote]);
    } catch (err) {
      setError('Failed to add video. Please check the URL and try again.');
      console.error('Error adding note:', err);
    }
  };

  // Update note
  const handleUpdateNote = (noteId: string, updates: Partial<VideoNote>) => {
    try {
      storage.updateNote(noteId, updates);
      setNotes(notes.map(n => n.id === noteId ? { ...n, ...updates } : n));
    } catch (err) {
      setError('Failed to update note. Please try again.');
    }
  };

  // Update note status
  const handleStatusChange = (noteId: string, status: VideoNote['status']) => {
    handleUpdateNote(noteId, { status });
  };

  // Delete note
  const handleDeleteNote = (noteId: string) => {
    try {
      storage.deleteNote(noteId);
      setNotes(notes.filter(n => n.id !== noteId));
    } catch (err) {
      setError('Failed to delete note. Please try again.');
    }
  };

  // Handle quick filter
  const handleQuickFilter = (filter: 'all' | 'important' | 'completed') => {
    setQuickFilter(filter);
    setSelectedFolderId('root'); // Switch to root for filtered view
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Get notes for selected folder with filters
  const getFilteredNotes = () => {
    let filtered = notes;

    // Apply folder filter - if root, show all notes
    if (selectedFolderId !== 'root') {
      filtered = filtered.filter(n => n.folderId === selectedFolderId);
    }

    // Apply quick filter
    if (quickFilter === 'important') {
      filtered = filtered.filter(n => n.status === 'important');
    } else if (quickFilter === 'completed') {
      filtered = filtered.filter(n => n.status === 'watched');
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(n => 
        n.title.toLowerCase().includes(query) ||
        n.channelName?.toLowerCase().includes(query) ||
        n.content.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  const filteredNotes = getFilteredNotes();
  const selectedNote = notes.find(n => n.id === selectedNoteId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <LoadingSpinner size="lg" text="LOADING TUBENOTES..." />
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <AnimatePresence>
        {error && (
          <ErrorMessage
            message={error}
            onDismiss={() => setError(null)}
          />
        )}
      </AnimatePresence>

      <Sidebar
        folders={folders}
        selectedFolderId={selectedFolderId}
        onFolderSelect={(id) => {
          setSelectedFolderId(id);
          setQuickFilter(null); // Clear quick filter when selecting folder
        }}
        onAddFolder={handleAddFolder}
        onDeleteFolder={handleDeleteFolder}
        totalNotes={notes.length}
        onQuickFilter={handleQuickFilter}
        onSearch={handleSearch}
      />

      <AnimatePresence mode="wait">
        {selectedNoteId && selectedNote ? (
          <motion.div
            key="note"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="flex-1"
          >
            <NotePage
              note={selectedNote}
              onUpdate={(content) => handleUpdateNote(selectedNote.id, { content })}
              onBack={() => setSelectedNoteId(null)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1"
          >
            <Dashboard
              notes={filteredNotes}
              onAddNote={handleAddNote}
              onNoteClick={setSelectedNoteId}
              onStatusChange={handleStatusChange}
              onDeleteNote={handleDeleteNote}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
