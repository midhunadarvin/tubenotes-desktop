'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Calendar, User, Save } from 'lucide-react';
import { VideoNote } from '@/types';
import { getYouTubeThumbnail } from '@/lib/youtube';
import { format } from 'date-fns';
import Editor from '@/components/Editor';

interface NotePageProps {
  note: VideoNote;
  onUpdate: (content: string) => void;
  onBack: () => void;
}

export default function NotePage({ note, onUpdate, onBack }: NotePageProps) {
  const [content, setContent] = useState(note.content);
  const [isSaving, setIsSaving] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const saveInterval = setInterval(() => {
      if (content !== note.content) {
        handleSave();
      }
    }, 3000); // Auto-save every 3 seconds

    return () => clearInterval(saveInterval);
  }, [content, note.content]);

  const handleSave = async () => {
    setIsSaving(true);
    onUpdate(content);
    setTimeout(() => setIsSaving(false), 500);
  };

  return (
    <div className="flex-1 h-screen flex flex-col bg-[var(--background)]">
      {/* Header with Thumbnail */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        {/* Background Thumbnail with Parallax Effect */}
        <div className="relative h-[300px] overflow-hidden border-b-3 border-[var(--border)]">
          {!imageError ? (
            <Image
              src={getYouTubeThumbnail(note.url)}
              alt={note.title}
              fill
              className="object-cover opacity-20"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-[var(--surface)]" />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/80 to-[var(--background)]" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="max-w-[1200px] w-full mx-auto">
              {/* Back Button */}
              <motion.button
                whileHover={{ x: -4 }}
                onClick={onBack}
                className="flex items-center gap-2 mb-6 text-[var(--foreground-muted)] hover:text-[var(--accent-primary)] transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-mono text-sm">BACK TO LIBRARY</span>
              </motion.button>

              {/* Title */}
              <h1 className="text-display text-5xl mb-4 text-[var(--foreground)]">
                {note.title}
              </h1>

              {/* Metadata */}
              <div className="flex items-center gap-6 text-sm font-mono text-[var(--foreground-muted)]">
                {note.channelName && (
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{note.channelName}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{format(new Date(note.createdAt), 'dd MMM yyyy')}</span>
                </div>
                <a
                  href={note.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[var(--accent-primary)] transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>WATCH ON YOUTUBE</span>
                </a>
                {isSaving && (
                  <div className="flex items-center gap-2 text-[var(--accent-secondary)]">
                    <Save size={16} />
                    <span>SAVING...</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Editor Container */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-[1200px] w-full mx-auto h-full">
          <Editor content={content} onChange={setContent} />
        </div>
      </div>
    </div>
  );
}
