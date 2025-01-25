"use client"

import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react"

interface ImageUploadProps {
  value: string[]
  onChange: (value: string[]) => void
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // In a real application, you would upload these files to your storage service
      // and get back URLs to store in your database
      const urls = acceptedFiles.map((file) => URL.createObjectURL(file))
      onChange([...value, ...urls])
    },
    [onChange, value],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".webp"],
    },
    maxFiles: 10,
  })

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer"
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-400">
          {isDragActive ? "Drop the files here..." : "Drag 'n' drop images here, or click to select files"}
        </p>
      </div>
      {value.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {value.map((url, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url || "/placeholder.svg"} alt={`Upload ${index + 1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

