// src/hooks/useUndoHistory.ts
import { useCallback, useRef, useState } from 'react';

export interface HistoryEntry {
    taskId: string;
    prevStart: Date;
    prevEnd: Date;
    nextStart: Date;
    nextEnd: Date;
}

const MAX_HISTORY = 20;

export function useUndoHistory(onTaskChange?: (taskId: string, start: Date, end: Date) => void) {
    const [canUndo, setCanUndo] = useState(false);
    const [canRedo, setCanRedo] = useState(false);
    const undoStack = useRef<HistoryEntry[]>([]);
    const redoStack = useRef<HistoryEntry[]>([]);

    const sync = useCallback(() => {
        setCanUndo(undoStack.current.length > 0);
        setCanRedo(redoStack.current.length > 0);
    }, []);

    const push = useCallback((entry: HistoryEntry) => {
        undoStack.current.push(entry);
        if (undoStack.current.length > MAX_HISTORY) undoStack.current.shift();
        redoStack.current = [];
        sync();
    }, [sync]);

    const undo = useCallback(() => {
        const entry = undoStack.current.pop();
        if (!entry) return;
        redoStack.current.push(entry);
        onTaskChange?.(entry.taskId, entry.prevStart, entry.prevEnd);
        sync();
    }, [onTaskChange, sync]);

    const redo = useCallback(() => {
        const entry = redoStack.current.pop();
        if (!entry) return;
        undoStack.current.push(entry);
        onTaskChange?.(entry.taskId, entry.nextStart, entry.nextEnd);
        sync();
    }, [onTaskChange, sync]);

    const clear = useCallback(() => {
        undoStack.current = [];
        redoStack.current = [];
        sync();
    }, [sync]);

    return { push, undo, redo, clear, canUndo, canRedo };
}
