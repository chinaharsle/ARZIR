"use client";

import React, { useRef, useEffect, useCallback } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
  height?: number;
}

export function RichTextEditor({ 
  value, 
  onChange, 
  placeholder = "Start writing your content...",
  height = 500 
}: RichTextEditorProps) {
  const editorRef = useRef<unknown>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onChangeRef = useRef(onChange);

  // Keep onChange ref up to date
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  const stableOnChange = useCallback((content: string) => {
    onChangeRef.current(content);
  }, []);

  useEffect(() => {
    let editorInstance: unknown = null;
    
    // Load TinyMCE script if not already loaded
    const loadTinyMCE = async () => {
      if (typeof window !== 'undefined' && !(window as unknown as { tinymce?: unknown }).tinymce) {
        const script = document.createElement('script');
        script.src = '/tinymce/tinymce.min.js';
        script.onload = () => {
          initEditor();
        };
        document.head.appendChild(script);
      } else if ((window as unknown as { tinymce?: unknown }).tinymce) {
        initEditor();
      }
    };

    const initEditor = () => {
      if (containerRef.current && (window as unknown as { tinymce?: { init: (config: unknown) => void } }).tinymce) {
        (window as unknown as { tinymce: { init: (config: unknown) => void } }).tinymce.init({
          target: containerRef.current,
          height: height,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'help', 'wordcount',
            'paste', 'emoticons', 'autoresize'
          ],
          toolbar: [
            'undo redo | formatselect | bold italic forecolor backcolor |',
            'alignleft aligncenter alignright alignjustify |',
            'bullist numlist outdent indent | link image media |',
            'table | code fullscreen | help'
          ].join(' '),
          content_style: `
            body { 
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; 
              font-size: 14px; 
              line-height: 1.6;
              color: #374151;
              margin: 1rem;
            }
            h1, h2, h3, h4, h5, h6 {
              font-weight: 600;
              margin-top: 1.5em;
              margin-bottom: 0.5em;
              color: #111827;
            }
            h1 { font-size: 2em; }
            h2 { font-size: 1.5em; }
            h3 { font-size: 1.25em; }
            p { margin-bottom: 1em; }
            ul, ol { margin-left: 1.5em; margin-bottom: 1em; }
            blockquote { 
              border-left: 4px solid #e5e7eb; 
              padding-left: 1em; 
              margin: 1em 0; 
              font-style: italic;
              color: #6b7280;
            }
            code { 
              background-color: #f3f4f6; 
              padding: 0.125em 0.25em; 
              border-radius: 0.25em; 
              font-family: ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace;
            }
            pre { 
              background-color: #f3f4f6; 
              padding: 1em; 
              border-radius: 0.5em; 
              overflow-x: auto;
              margin: 1em 0;
            }
            img { max-width: 100%; height: auto; }
            table { border-collapse: collapse; width: 100%; margin: 1em 0; }
            table, th, td { border: 1px solid #e5e7eb; }
            th, td { padding: 0.5em; text-align: left; }
            th { background-color: #f9fafb; font-weight: 600; }
          `,
          placeholder: placeholder,
          paste_data_images: true,
          automatic_uploads: false,
          file_picker_types: 'image',
          file_picker_callback: (cb: (url: string, meta?: { title?: string }) => void, value: string, meta: { filetype: string }) => {
            if (meta.filetype === 'image') {
              const input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              
              input.addEventListener('change', (e: Event) => {
                const file = (e.target as HTMLInputElement).files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.addEventListener('load', () => {
                    const id = 'blobid' + (new Date()).getTime();
                    const editor = (window as unknown as { tinymce: { activeEditor: { editorUpload: { blobCache: { create: (id: string, file: File, base64: string) => unknown; add: (blob: unknown) => void } } } } }).tinymce.activeEditor;
                    const blobCache = editor.editorUpload.blobCache;
                    const base64 = (reader.result as string).split(',')[1];
                    const blobInfo = blobCache.create(id, file, base64) as { blobUri: () => string };
                    blobCache.add(blobInfo);
                    
                    cb(blobInfo.blobUri(), { title: file.name });
                  });
                  reader.readAsDataURL(file);
                }
              });
              
              input.click();
            }
          },
          // Media plugin configuration for YouTube and other videos
          media_live_embeds: true,
          media_url_resolver: (data: { url: string }, resolve: (result: { html: string }) => void) => {
            if (data.url.indexOf('youtu.be') !== -1 || data.url.indexOf('youtube.com') !== -1) {
              let videoId = '';
              
              if (data.url.indexOf('youtu.be') !== -1) {
                videoId = data.url.split('youtu.be/')[1].split('?')[0];
              } else if (data.url.indexOf('youtube.com') !== -1) {
                if (data.url.indexOf('watch?v=') !== -1) {
                  videoId = data.url.split('watch?v=')[1].split('&')[0];
                } else if (data.url.indexOf('embed/') !== -1) {
                  videoId = data.url.split('embed/')[1].split('?')[0];
                }
              }
              
              if (videoId) {
                resolve({
                  html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`
                });
              } else {
                resolve({ html: '' });
              }
            } else {
              resolve({ html: '' });
            }
          },
          skin: 'oxide',
          branding: false,
          promotion: false,
          statusbar: true,
          resize: true,
          autoresize_bottom_margin: 20,
          autoresize_max_height: 800,
          autoresize_min_height: height,
          block_formats: 'Paragraph=p; Header 1=h1; Header 2=h2; Header 3=h3; Header 4=h4; Header 5=h5; Header 6=h6',
          setup: (editor: unknown) => {
            editorRef.current = editor;
            editorInstance = editor;
            
            (editor as { on: (event: string, callback: () => void) => void }).on('init', () => {
              // Set initial content if provided
              if (value) {
                (editor as { setContent: (content: string) => void }).setContent(value);
              }
            });
            
            (editor as { on: (event: string, callback: () => void) => void }).on('change keyup paste input', () => {
              const content = (editor as { getContent: () => string }).getContent();
              stableOnChange(content);
            });
          }
        });
      }
    };

    loadTinyMCE();

    return () => {
      if (editorInstance && (window as unknown as { tinymce?: { remove: (instance: unknown) => void } }).tinymce) {
        try {
          (window as unknown as { tinymce: { remove: (instance: unknown) => void } }).tinymce.remove(editorInstance);
        } catch {
          // Editor might already be removed
        }
      }
    };
  }, [height, placeholder, stableOnChange, value]); // Use stable onChange reference

  // Update content when value prop changes
  useEffect(() => {
    if (editorRef.current && (editorRef.current as { getContent: () => string; setContent: (content: string) => void }).getContent() !== value) {
      (editorRef.current as { setContent: (content: string) => void }).setContent(value || '');
    }
  }, [value]);

  return (
    <div className="relative">
      <div ref={containerRef} />
    </div>
  );
}