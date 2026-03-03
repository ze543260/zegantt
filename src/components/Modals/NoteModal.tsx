import { useState, useEffect, useRef } from "react";
import { Loader2, Link2, Upload, Paperclip, X } from "lucide-react";
import type { PredecessorType, DependencyType } from "../../types";

export interface NoteModalProps {
    isOpen: boolean;
    onClose: () => void;

    availableMilestones?: { id: string; name: string }[];
    initialDate?: string;
    onSaveNote: (data: {
        title: string;
        description: string;
        color: string;
        date: string;
        predecessorId: string;
        dependencyType: DependencyType;
        files: File[];
    }) => Promise<void>;
}

const COLOR_OPTIONS = [
    { label: "Amarelo", value: "#FEF08A" },
    { label: "Verde", value: "#BBF7D0" },
    { label: "Azul", value: "#BFDBFE" },
    { label: "Rosa", value: "#FBCFE8" },
    { label: "Roxo", value: "#E9D5FF" },
    { label: "Laranja", value: "#FED7AA" },
    { label: "Branco", value: "#FFFFFF" },
];

const DEPENDENCY_TYPE_LABELS: Record<DependencyType, string> = {
    FS: "Fim → Início (FS)",
    SS: "Início → Início (SS)",
    FF: "Fim → Fim (FF)",
    SF: "Início → Fim (SF)",
};

export function NoteModal({
    isOpen,
    onClose,
    availableMilestones = [],
    initialDate,
    onSaveNote
}: NoteModalProps) {
    const [formTitle, setFormTitle] = useState("");
    const [formContent, setFormContent] = useState("");
    const [formColor, setFormColor] = useState("#FEF08A"); // Default to Amarelo
    const [formDate, setFormDate] = useState("");
    const [formPredecessorId, setFormPredecessorId] = useState("");
    const [formDependencyType, setFormDependencyType] = useState<DependencyType>("FS");
    const [formSubmitting, setFormSubmitting] = useState(false);
    const [formFiles, setFormFiles] = useState<File[]>([]);
    const [errorMsg, setErrorMsg] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setFormTitle("");
            setFormContent("");
            setFormColor("#FEF08A");
            setFormDate(initialDate ?? new Date().toISOString().split("T")[0]);
            setFormPredecessorId("");
            setFormDependencyType("FS");
            setFormFiles([]);
            setErrorMsg("");
        }
    }, [isOpen, initialDate]);

    const dependencyOptions = [
        ...availableMilestones.map(m => ({ id: m.id, name: m.name, type: "MILESTONE" as PredecessorType })),
    ];

    const handleCreate = async () => {
        if (!formTitle.trim() && !formContent.trim()) {
            setErrorMsg("Informe o título ou conteúdo da nota.");
            return;
        }
        setErrorMsg("");

        try {
            setFormSubmitting(true);
            await onSaveNote({
                title: formTitle || "Sem título",
                description: formContent,
                color: formColor,
                date: formDate ? `${formDate}T00:00:00` : new Date().toISOString(),
                predecessorId: formPredecessorId,
                dependencyType: formDependencyType,
                files: formFiles,
            });
            onClose();
        } catch (error) {
            console.error(error);
            setErrorMsg("Erro ao criar nota.");
        } finally {
            setFormSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center z-[9999] p-4" onClick={onClose}>
            <div onClick={(e) => e.stopPropagation()} style={{
                width: 400, maxHeight: '90vh', background: formColor || '#FFFACD', borderRadius: 4,
                boxShadow: '4px 6px 20px rgba(0,0,0,0.18), 1px 1px 4px rgba(0,0,0,0.08)',
                transform: 'rotate(-1deg)', position: 'relative', display: 'flex', flexDirection: 'column',
                fontFamily: "'Inter', sans-serif", overflow: 'hidden', transition: 'background 0.3s',
            }}>
                <div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', width: 64, height: 16, background: 'rgba(255,255,255,0.55)', borderRadius: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }} />
                <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10, width: 24, height: 24, borderRadius: '50%', background: 'rgba(0,0,0,0.08)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 14, color: '#3a3a3a' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.15)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.08)')}>✕</button>
                <div style={{ padding: '28px 24px 20px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>

                    {errorMsg && (
                        <div style={{ background: 'rgba(255,0,0,0.1)', color: '#d32f2f', padding: '8px 12px', borderRadius: 6, fontSize: 12, marginBottom: 12, border: '1px solid rgba(255,0,0,0.2)' }}>
                            {errorMsg}
                        </div>
                    )}

                    <input
                        type="text"
                        value={formTitle}
                        onChange={e => setFormTitle(e.target.value)}
                        placeholder="Título da nota..."
                        style={{
                            width: '100%', background: 'transparent', border: 'none', outline: 'none',
                            fontSize: 20, fontWeight: 800, color: '#2a2a2a', lineHeight: '1.3',
                            padding: 0, margin: 0, marginBottom: 14, fontFamily: 'inherit',
                        }}
                    />

                    <div style={{ width: '100%', height: 1, background: 'rgba(0,0,0,0.08)', marginBottom: 14 }} />

                    <textarea
                        value={formContent}
                        onChange={e => setFormContent(e.target.value)}
                        rows={6}
                        placeholder="Escreva sua nota aqui..."
                        style={{
                            width: '100%', background: 'transparent', border: 'none', outline: 'none',
                            fontSize: 14, color: '#3a3a3a', lineHeight: '1.6', resize: 'vertical',
                            padding: 0, margin: 0, fontFamily: 'inherit', flex: 1, minHeight: 100,
                        }}
                    />

                    <div style={{ marginTop: 14, paddingTop: 10, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                        <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            onChange={(e) => {
                                const selected = e.target.files ? Array.from(e.target.files) : [];
                                if (selected.length > 0) {
                                    setFormFiles(prev => [...prev, ...selected]);
                                }
                                if (fileInputRef.current) fileInputRef.current.value = '';
                            }}
                            style={{ display: 'none' }}
                        />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 6,
                                padding: '6px 12px', borderRadius: 6,
                                background: 'rgba(0,0,0,0.05)', border: '1px dashed rgba(0,0,0,0.15)',
                                cursor: 'pointer', fontSize: 12, color: '#3a3a3a', fontWeight: 500,
                                transition: 'background 0.15s', width: '100%', justifyContent: 'center',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.08)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
                        >
                            <Upload size={13} />
                            Anexar arquivos
                        </button>

                        {formFiles.length > 0 && (
                            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                                {formFiles.map((f, i) => (
                                    <div key={`file-${i}`} style={{
                                        display: 'flex', alignItems: 'center', gap: 6,
                                        padding: '4px 8px', borderRadius: 4,
                                        background: 'rgba(255,255,255,0.5)',
                                        fontSize: 11, color: '#3a3a3a',
                                    }}>
                                        <Paperclip size={10} style={{ flexShrink: 0 }} />
                                        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>
                                        <span style={{ fontSize: 9, color: 'rgba(58,58,58,0.4)', flexShrink: 0 }}>
                                            {(f.size / 1024).toFixed(0)}KB
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => setFormFiles(prev => prev.filter((_, idx) => idx !== i))}
                                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, display: 'flex', color: '#ef4444' }}
                                            title="Remover"
                                        >
                                            <X size={12} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                        <input
                            type="date"
                            value={formDate}
                            onChange={e => setFormDate(e.target.value)}
                            style={{
                                background: 'transparent', border: 'none', outline: 'none',
                                fontSize: 12, color: 'rgba(58,58,58,0.5)', fontWeight: 500,
                                fontFamily: 'inherit', padding: 0, cursor: 'pointer', width: 'auto'
                            }}
                        />
                        <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                            {COLOR_OPTIONS.map(color => (
                                <button
                                    key={color.value}
                                    type="button"
                                    onClick={() => setFormColor(color.value)}
                                    style={{
                                        width: 22, height: 22, borderRadius: '50%', border: formColor === color.value ? '2px solid #1A3C30' : '1.5px solid rgba(0,0,0,0.12)',
                                        backgroundColor: color.value, cursor: 'pointer', padding: 0,
                                        transform: formColor === color.value ? 'scale(1.15)' : 'scale(1)',
                                        transition: 'all 0.15s', boxShadow: formColor === color.value ? '0 1px 4px rgba(0,0,0,0.15)' : 'none',
                                    }}
                                    title={color.label}
                                />
                            ))}
                        </div>
                    </div>

                    {dependencyOptions.length > 0 && (
                        <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                                <Link2 size={14} style={{ color: 'rgba(58,58,58,0.5)' }} />
                                <span style={{ fontSize: 11, color: 'rgba(58,58,58,0.5)', fontWeight: 600 }}>Dependência</span>
                            </div>
                            <select
                                value={formPredecessorId}
                                onChange={e => setFormPredecessorId(e.target.value)}
                                style={{
                                    width: '100%', background: 'rgba(255,255,255,0.3)', border: '1px solid rgba(0,0,0,0.08)',
                                    borderRadius: 6, fontSize: 12, color: '#3a3a3a', padding: '6px 8px',
                                    outline: 'none', fontFamily: 'inherit', cursor: 'pointer',
                                }}
                            >
                                <option value="">Nenhuma</option>
                                {availableMilestones.length > 0 && (
                                    <optgroup label="Marcos">
                                        {availableMilestones.map(m => (
                                            <option key={m.id} value={m.id}>{m.name}</option>
                                        ))}
                                    </optgroup>
                                )}
                            </select>
                            {formPredecessorId && (
                                <select
                                    value={formDependencyType}
                                    onChange={e => setFormDependencyType(e.target.value as DependencyType)}
                                    style={{
                                        width: '100%', background: 'rgba(255,255,255,0.3)', border: '1px solid rgba(0,0,0,0.08)',
                                        borderRadius: 6, fontSize: 12, color: '#3a3a3a', padding: '6px 8px',
                                        outline: 'none', fontFamily: 'inherit', cursor: 'pointer', marginTop: 6,
                                    }}
                                >
                                    {(Object.keys(DEPENDENCY_TYPE_LABELS) as DependencyType[]).map(dt => (
                                        <option key={dt} value={dt}>{DEPENDENCY_TYPE_LABELS[dt]}</option>
                                    ))}
                                </select>
                            )}
                        </div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, paddingTop: 16, marginTop: 12, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                        <button onClick={onClose}
                            style={{ padding: '8px 16px', fontSize: 13, color: '#3a3a3a', background: 'rgba(255,255,255,0.5)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 8, cursor: 'pointer' }}>
                            Cancelar
                        </button>
                        <button onClick={handleCreate} disabled={formSubmitting}
                            style={{ padding: '8px 20px', fontSize: 13, color: '#fff', background: '#1A3C30', border: 'none', borderRadius: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, opacity: formSubmitting ? 0.5 : 1 }}>
                            {formSubmitting && <Loader2 className="animate-spin" size={16} />}
                            Criar Nota
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
