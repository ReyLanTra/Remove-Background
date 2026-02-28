'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { Upload, X, Download, Loader2, Image as ImageIcon } from 'lucide-react';
import axios from 'axios';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

interface ImageUploaderProps {
  dict: any;
}

export default function ImageUploader({ dict }: ImageUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
      setError(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: false
  });

  const handleRemoveBackground = async () => {
    if (!file) return;

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post('https://remove.alikhlas.icu/api/remove-bg', formData, {
        responseType: 'blob'
      });

      const url = URL.createObjectURL(response.data);
      setResult(url);
    } catch (err) {
      console.error('Error removing background:', err);
      setError(dict.error);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  const downloadImage = () => {
    if (!result) return;
    const link = document.createElement('a');
    link.href = result;
    link.download = `removebg-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="uploader" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-8 md:p-12">
          {!preview ? (
            <div
              {...getRootProps()}
              className={cn(
                "border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200",
                isDragActive ? "border-indigo-500 bg-indigo-50" : "border-slate-200 hover:border-indigo-400 hover:bg-slate-50"
              )}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {dict.title}
                </h3>
                <p className="text-slate-500 max-w-xs mx-auto">
                  {dict.description}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{dict.original}</p>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <Image 
                      src={preview} 
                      alt="Original" 
                      fill 
                      className="object-contain" 
                      unoptimized 
                      referrerPolicy="no-referrer"
                    />
                    {!result && !isLoading && (
                      <button
                        onClick={reset}
                        className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-slate-600 hover:text-red-500 transition-colors z-10"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{dict.result}</p>
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/checkerboard.png')] bg-slate-200 border border-slate-200 flex items-center justify-center">
                    {result ? (
                      <Image 
                        src={result} 
                        alt="Result" 
                        fill 
                        className="object-contain" 
                        unoptimized 
                        referrerPolicy="no-referrer"
                      />
                    ) : isLoading ? (
                      <div className="flex flex-col items-center animate-pulse">
                        <Loader2 className="w-10 h-10 text-indigo-600 animate-spin mb-2" />
                        <p className="text-indigo-600 font-medium">{dict.processing}</p>
                      </div>
                    ) : (
                      <div className="text-slate-400 flex flex-col items-center">
                        <ImageIcon className="w-12 h-12 mb-2 opacity-20" />
                        <p className="text-sm">{dict.clickToStart}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                {!result && !isLoading && (
                  <button
                    onClick={handleRemoveBackground}
                    className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95"
                  >
                    {dict.buttonRemove}
                  </button>
                )}

                {result && (
                  <>
                    <button
                      onClick={downloadImage}
                      className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Download className="w-5 h-5" />
                      {dict.buttonDownload}
                    </button>
                    <button
                      onClick={reset}
                      className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-all active:scale-95"
                    >
                      {dict.buttonUploadNew}
                    </button>
                  </>
                )}
              </div>

              {error && (
                <p className="text-center text-red-500 font-medium">{error}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
